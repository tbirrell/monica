<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use App\Tag;
use Validator;
use App\Contact;
use App\ContactFieldType;
use App\Jobs\ResizeAvatars;
use App\Helpers\VCardHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GroupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $sort = $request->get('sort') ?? $user->contacts_sort_order;
        
        if ($user->contacts_sort_order !== $sort) {
            $user->updateContactViewPreference($sort);
        }
        
        $date_flag = false;
        
        if (str_contains($sort, 'lastactivitydate')) {
            $date_sort = str_after($sort, 'lastactivitydate');
            $sort = 'firstnameAZ';
            $date_flag = true;
        }
        
        $tags = null;
        $url = '';
        $tagCount = 1;
        
        if ($request->get('tag1')) {
            $tags = Tag::where('name_slug', $request->get('tag1'))
                       ->where('account_id', auth()->user()->account_id)
                       ->get();
            
            $count = 2;
            
            while (true) {
                if ($request->get('tag' . $count)) {
                    $tags = $tags->concat(
                    Tag::where('name_slug', $request->get('tag' . $count))
                       ->where('account_id', auth()->user()->account_id)
                       ->get()
                    );
                } else {
                    break;
                }
                
                $count++;
            }
            if (is_null($tags)) {
                return redirect()->route('groups.index');
            }
            
            $contacts = $user->account->contacts()->real()->sortedBy($sort);
            
            foreach ($tags as $tag) {
                $contacts = $contacts->whereHas('tags', function ($query) use ($tag) {
                    $query->where('id', $tag->id);
                });
                
                $url = $url . 'tag' . $tagCount . '=' . $tag->name_slug . '&';
                
                $tagCount++;
            }
            
            $contacts = $contacts->where('is_group_proxy', 0)->get();
        } else {
            $contacts = $user->account->contacts()->real()->sortedBy($sort)->where('is_group_proxy', 0)->get();
        }
        
        if ($date_flag) {
            foreach ($contacts as $contact) {
                $contact['sort_date'] = $contact->getLastActivityDate();
            }
            
            if ($date_sort == 'NewtoOld') {
                $contacts = $contacts->sortByDesc('sort_date');
            } elseif ($date_sort == 'OldtoNew') {
                $contacts = $contacts->sortBy('sort_date');
            }
        }
        
        return view('groups.index')
        ->withContacts($contacts)
        ->withTags($tags)
        ->withUrl($url)
        ->withTagCount($tagCount);
    }
    
    /**
     * Display the specified resource.
     *
     * @param  Contact $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $group)
    {
        // not a group
        if (!$group->is_group()) {
            return redirect('/people');
        }
        $tag_id = $group->group_id;
        $contacts = Contact::whereHas('tags', function($q) use ($tag_id) {
                                        $q->where('id', $tag_id);
                                    })->get();
        
        $group->load(['notes' => function ($query) {
            $query->orderBy('updated_at', 'desc');
        }]);

        $reminders = $group->getRemindersAboutRelatives();

        $group->last_consulted_at = \Carbon\Carbon::now(auth()->user()->timezone);
        $group->save();
        
        $group->contacts = $contacts;
        
        return view('groups.profile')
        ->withContact($group)
        ->withReminders($reminders);
    }
    
    
}