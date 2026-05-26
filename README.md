# Thai Boran Website

A beautiful wellness spa website built with Laravel backend and React frontend, designed to showcase services and allow customers to book appointments.

## 🚀 Quick Start

### Prerequisites
- XAMPP (with Apache and MySQL running)
- PHP 8.1+
- Node.js 16+ and npm
- Composer

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd c:\Users\Gabriel\thaiburan-main
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node dependencies**
   ```bash
   npm install
   ```

4. **Setup environment file**
   ```bash
   copy .env.example .env
   ```
   
   Update `.env` with your XAMPP MySQL credentials:
   ```
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=thai_boran
   DB_USERNAME=root
   DB_PASSWORD=
   ```

5. **Generate Laravel key**
   ```bash
   php artisan key:generate
   ```

6. **Create database in phpMyAdmin**
   - Open http://localhost/phpmyadmin
   - Create a new database named `thai_boran`

7. **Run migrations (when migrations are created)**
   ```bash
   php artisan migrate
   ```

### Development

**Terminal 1: Start Laravel development server**
```bash
php artisan serve
```
The backend will be available at `http://localhost:8000`

**Terminal 2: Build React frontend**
```bash
npm run dev
```
The frontend with hot reload will be available at `http://localhost:5173`

Or for production build:
```bash
npm run build
```

## 📁 Project Structure

```
├── app/
│   └── Http/Controllers/    # Laravel API controllers
├── resources/
│   ├── js/                 # React components
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── css/                # Stylesheets
│   └── views/              # Laravel blade templates
├── public/                 # Static assets
│   └── images/             # Service images
├── routes/
│   └── web.php             # Web routes
├── package.json            # Node dependencies
├── composer.json           # PHP dependencies
├── vite.config.js          # Vite configuration
└── README.md
```

## ✨ Features

- ✅ Responsive hero section with call-to-action
- ✅ Service showcase with pricing and duration
- ✅ Professional design with warm, earthy tones
- ✅ Mobile-friendly layout
- ✅ API endpoints for bookings and contact
- ✅ Footer with business information
- ✅ Smooth hover effects and animations

## 🎨 Customization

### Colors
Edit the CSS variables in `resources/css/index.css`:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary brand color
- `--accent-color`: Accent color for highlights

### Images
Replace placeholder images in `/public/images/`:
- `service-1.jpg`: Traditional Thai massage image
- `service-2.jpg`: Aroma therapy image
- `service-3.jpg`: Herbal compress image

### Content
Update service details in:
- `resources/js/components/PopularServices.jsx`
- `app/Http/Controllers/ServiceController.php`

## 🔗 Available API Endpoints

- `GET /api/services` - Get all services
- `POST /api/bookings` - Create a new booking
- `POST /api/contact` - Send a contact message

## 📝 Notes

- For production deployment, build the React app and serve from Laravel's public directory
- Ensure XAMPP Apache and MySQL are running before starting
- Hot reload is available during development with `npm run dev`

## 📧 Support

For questions or issues, contact hello@thaiboran.com

---

Built with ❤️ using Laravel & React
