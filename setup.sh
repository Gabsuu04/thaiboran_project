#!/bin/bash

# Thai Boran Website - Setup Script for macOS/Linux

echo ""
echo "======================================"
echo "Thai Boran Website Setup"
echo "======================================"
echo ""

# Check if composer is installed
if ! command -v composer &> /dev/null; then
    echo "ERROR: Composer is not installed"
    echo "Please install Composer from https://getcomposer.org/"
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "[1/5] Installing PHP dependencies..."
composer install || exit 1

echo "[2/5] Installing Node dependencies..."
npm install || exit 1

echo "[3/5] Setting up environment file..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file - please update with your database credentials"
else
    echo ".env already exists"
fi

echo "[4/5] Generating Laravel application key..."
php artisan key:generate

echo "[5/5] Building frontend assets..."
npm run build

echo ""
echo "======================================"
echo "Setup Complete!"
echo "======================================"
echo ""
echo "IMPORTANT NEXT STEPS:"
echo ""
echo "1. Create database:"
echo "   mysql -u root -e 'CREATE DATABASE thai_boran;'"
echo ""
echo "2. Run in Terminal 1 (Laravel):"
echo "   php artisan serve"
echo ""
echo "3. Run in Terminal 2 (React - if you want hot reload):"
echo "   npm run dev"
echo ""
echo "4. Open browser to:"
echo "   - http://localhost:8000 (Laravel)"
echo "   - http://localhost:5173 (React dev - optional)"
echo ""
