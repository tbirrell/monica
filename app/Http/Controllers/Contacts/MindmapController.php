<?php

namespace App\Http\Controllers\Contacts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contact;

class MindmapController extends Controller
{
    public function get(Contact $contact)
    {
        return view('people.mindmap')
                ->withContact($contact);
    }
}
