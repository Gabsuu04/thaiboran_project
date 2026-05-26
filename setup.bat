@echo off
REM Thai Boran Website - Setup Script for Windows

echo.
echo ======================================
echo Thai Boran Website Setup
echo ======================================
echo.

REM Check if composer is installed
composer --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Composer is not installed or not in PATH
    echo Please install Composer from https://getcomposer.org/
    pause
    exit /b 1
)

REM Check if node is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [1/5] Installing PHP dependencies...
call composer install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install PHP dependencies
    pause
    exit /b 1
)

echo [2/5] Installing Node dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install Node dependencies
    pause
    exit /b 1
)

echo [3/5] Setting up environment file...
if not exist .env (
    copy .env.example .env
    echo Created .env file - please update with your database credentials
) else (
    echo .env already exists
)

echo [4/5] Generating Laravel application key...
php artisan key:generate

echo [5/5] Building frontend assets...
call npm run build

echo.
echo ======================================
echo Setup Complete!
echo ======================================
echo.
echo IMPORTANT NEXT STEPS:
echo.
echo 1. Open XAMPP Control Panel and start Apache and MySQL
echo.
echo 2. Create database in phpMyAdmin:
echo    - Go to http://localhost/phpmyadmin
echo    - Create new database named 'thai_boran'
echo.
echo 3. Run in Terminal 1 (Laravel):
echo    php artisan serve
echo.
echo 4. Run in Terminal 2 (React - if you want hot reload):
echo    npm run dev
echo.
echo 5. Open browser to:
echo    - http://localhost:8000 (Laravel)
echo    - http://localhost:5173 (React dev - optional)
echo.
pause
