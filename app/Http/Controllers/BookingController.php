<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'service_id' => 'required|integer',
            'date' => 'required|date',
            'time' => 'required|string'
        ]);

        // Here you would save to database
        // Booking::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Booking confirmed! We will contact you soon.'
        ]);
    }
}
