<?php

namespace App\Http\Controllers;

use App\Models\Comment;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreCommentRequest;

class CommentController extends Controller
{   
    public function index(string $recipeId): JsonResponse
    {
        $perPage = 5; // Anzahl Kommentare pro Seite

        $comments = Comment::with(['user', 'replies.user'])
            ->where('recipe_id', $recipeId)
            ->whereNull('parent_id')
            ->latest()
            ->paginate($perPage);

        // Laravel liefert ein Paginator-Objekt mit 'data' und Meta
        return response()->json($comments);
    }

    public function store(StoreCommentRequest $request, string $recipeId): JsonResponse
    {
        $userId = Auth::id();

        if (!$userId) {
            return response()->json(['error' => 'Not authenticated'], 401);
        }

        $comment = Comment::create([
            'user_id' => $userId,
            'recipe_id' => $recipeId,
            'parent_id' => $request->parent_id,
            'content' => $request->validated()['content'],
        ]);

        $comment->load('user');

        return response()->json($comment, 201);
    }

}
