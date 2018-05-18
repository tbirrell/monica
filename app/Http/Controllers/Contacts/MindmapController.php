<?php

namespace App\Http\Controllers\Contacts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MindmapController extends Controller
{
    public function get()
    {
        return view('people.mindmap');
    }
}
