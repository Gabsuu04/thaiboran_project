<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = [
            [
                'id' => 1,
                'name' => 'Hot Stone Massage',
                'price' => 55,
                'duration' => 90,
                'description' => 'Warm stone therapy to relieve muscle tension'
            ],
            [
                'id' => 2,
                'name' => 'Aroma Therapy',
                'price' => 78,
                'duration' => 60,
                'description' => 'Aromatic essential oils to restore balance'
            ],
            [
                'id' => 3,
                'name' => 'Scalp Massage',
                'price' => 150,
                'duration' => 90,
                'description' => 'Therapeutic scalp treatment for deep relaxation'
            ]
        ];

        return response()->json($services);
    }
}
