<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
class FirstController extends Controller
{
    //
    public function showUserName () {
        return "Ahmed Emam";
    }

    public function getIndex () {
        $data = ['ahmed','bassem'];

        return view('welcome')->with('data', $data);
    }

    public function showLandingPage () {
        return view ('landing');
    }
    public function showLandingabout () {
        return view ('about');
    }
}
