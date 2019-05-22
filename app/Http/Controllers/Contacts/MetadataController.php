<?php

namespace App\Http\Controllers\Contacts;

use App\Helpers\DateHelper;
use App\Models\Contact\Note;
use App\Models\Contact\Contact;
use App\Http\Controllers\Controller;
use App\Http\Requests\People\NotesRequest;
use App\Http\Requests\People\NoteToggleRequest;

class MetadataController extends Controller
{

    public function form()
    {
        return view('people.metadata.form');
    }
}
