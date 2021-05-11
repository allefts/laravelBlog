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

//When we hit this route, use PostController's function getAllPosts()
// Route::get('/posts', [PostController::class, 'getAllPosts']);

Route::get("/getPosts", function(){
    return Post::all();
});

Route::get("/getPosts/{id}", function(){
});


Route::get('/', function () {
    return view('home');
});
