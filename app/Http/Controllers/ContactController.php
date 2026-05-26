<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string|min:10'
        ]);

        // Here you would send email
        // Mail::send('emails.contact', $validated, function($message) use ($validated) {
        //     $message->to('hello@thaiboran.com')
        //             ->from($validated['email'])
        //             ->subject('New Contact Message');
        // });

        return response()->json([
            'success' => true,
            'message' => 'Thank you for contacting us! We will get back to you soon.'
        ]);
    }
}
