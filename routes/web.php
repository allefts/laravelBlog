<?php


use App\Models\Post;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/getPosts", function(){
    return Post::all();
});

Route::get("/getPost/{id}", function($id){
    return Post::findOrFail($id);
});

Route::get('/', function () {
    return view('home');
});

//Allows for refreshing when routes change
Route::get('/post/{id}', function($id){
    return view('home');
});
