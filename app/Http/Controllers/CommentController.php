<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Recipe;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, Recipe $recipe)
    {

        $comment = Comment::create([
            'user_id' => $request->user()->id,
            'recipe_id' => $recipe->id,
            'content' => $request->content,
            'parent_id' => $request->parent_id,
        ]);

        // Optional: Kommentar laden mit User-Beziehung
        $comment->load('user');

        return redirect()->back()->with('success', 'Kommentar hinzugefügt!');
    }
}
