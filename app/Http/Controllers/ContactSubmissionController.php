<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactSubmissionRequest;
use App\Models\ContactSubmission;

class ContactSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactSubmissionRequest $request)
    {
        ContactSubmission::create($request->validated());
        return redirect()->back()->with('success', 'Vielen Dank für deine Nachricht!');
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactSubmission $contactSubmission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactSubmission $contactSubmission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ContactSubmission $contactSubmission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactSubmission $contactSubmission)
    {
        //
    }
}
