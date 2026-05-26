<!-- Thai Boran Website - Laravel + React Project -->

# Thai Boran Website Development

## Project Overview
Thai Boran is a wellness spa website built with Laravel backend and React frontend, designed to be deployed with XAMPP for local development.

## Setup Instructions

### Prerequisites
- XAMPP installed with Apache and MySQL enabled
- PHP 8.1+
- Node.js 16+
- Composer installed

### Installation Steps

1. **Start XAMPP Services**
   - Open XAMPP Control Panel
   - Start Apache and MySQL services

2. **Install Laravel Dependencies**
   ```
   composer install
   ```

3. **Install React/Node Dependencies**
   ```
   npm install
   ```

4. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Update database credentials for XAMPP MySQL
   - Set `APP_URL=http://localhost:8000`

5. **Build Frontend**
   ```
   npm run dev
   ```

6. **Run Laravel Development Server**
   ```
   php artisan serve
   ```

## Project Structure

- `/app` - Laravel application code
- `/resources/js` - React components
- `/resources/css` - Stylesheets
- `/public` - Static assets (images, compiled React)
- `/routes` - API routes

## Features
- Responsive hero section
- Service showcase with pricing
- Booking functionality
- Gallery section
- Contact form integration
