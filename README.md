# Thai Boran Website

A beautiful wellness spa website built with Laravel backend and React frontend, designed to showcase services and allow customers to book appointments.

## 🚀 Setup Guide for Collaborators

Follow these step-by-step instructions to get the project running locally.

### Prerequisites
Before starting, make sure you have installed:
- **XAMPP** (with Apache and MySQL enabled) - [Download](https://www.apachefriends.org/)
- **Git** - [Download](https://git-scm.com/)
- **PHP 8.1+** (comes with XAMPP)
- **Node.js 16+** (includes npm) - [Download](https://nodejs.org/)
- **Composer** - [Download](https://getcomposer.org/)

### Step-by-Step Installation

#### Step 1: Clone the Repository
```bash
# Clone the repository to your desired location
git clone https://github.com/YOUR_USERNAME/thai-boran.git

# Navigate into the project folder
cd thai-boran
```

#### Step 2: Install PHP Dependencies
```bash
# Install Laravel and PHP dependencies
composer install
```

#### Step 3: Install Node.js Dependencies
```bash
# Install React and frontend dependencies
npm install
```

#### Step 4: Setup Environment Variables
```bash
# Copy the example environment file
copy .env.example .env
```

Then open `.env` in your text editor and update the database configuration:
```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=thai_boran
DB_USERNAME=root
DB_PASSWORD=
```

#### Step 5: Generate Laravel Application Key
```bash
php artisan key:generate
```

#### Step 6: Create Database in phpMyAdmin
1. **Start XAMPP** - Turn on Apache and MySQL from the control panel
2. **Open phpMyAdmin** - Go to http://localhost/phpmyadmin
3. **Create Database** - Click "New" and create a database named `thai_boran`
4. Leave the collation as default and click "Create"

#### Step 7: Run Migrations (When Available)
```bash
php artisan migrate
```

### Running the Application

**Important:** You need TWO terminal windows running simultaneously!

#### Terminal 1: Start Laravel Backend Server
```bash
php artisan serve
```
✅ Backend runs at: http://localhost:8000

#### Terminal 2: Start React Frontend with Hot Reload
```bash
npm run dev
```
✅ Frontend runs at: http://localhost:5173

### Accessing the Website

Open your browser and go to:
```
http://localhost:5173
```

You should see the Thai Boran spa website with:
- Homepage with hero section and popular services
- Full services menu with categories
- Interactive date picker calendar
- Therapist selection
- Booking confirmation form

### Building for Production

To create a production build:
```bash
npm run build
```

This will generate optimized files in the `dist/` folder.

## 📁 Project Structure

```
thai-boran/
├── app/
│   ├── Http/
│   │   ├── Controllers/        # Laravel API controllers
│   │   └── Kernel.php
│   ├── Exceptions/
│   ├── Console/
│   └── Application.php
├── resources/
│   ├── js/
│   │   ├── components/         # React UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceDetails.jsx (Calendar & Schedule)
│   │   │   ├── ServiceConfirmation.jsx (Booking Form)
│   │   │   └── ...
│   │   ├── pages/              # Page routes
│   │   │   ├── HomePage.jsx
│   │   │   ├── ServicesPage.jsx
│   │   │   ├── DetailsPage.jsx
│   │   │   └── ConfirmationPage.jsx
│   │   ├── App.jsx             # Root component with routing
│   │   └── index.jsx
│   ├── css/                    # Stylesheets
│   │   ├── index.css
│   │   ├── services.css
│   │   ├── service-details.css
│   │   └── service-confirmation.css
│   └── views/                  # Laravel blade templates
├── public/
│   └── images/                 # Service images
│       ├── thaiboranlogo.jpg
│       ├── thaiboranwall.jpg
│       ├── hotstonemassage.jpg
│       ├── aromatherapy.jpg
│       └── scalpmassage.jpg
├── routes/
│   ├── web.php                 # Web routes
│   ├── api.php                 # API routes
│   └── console.php
├── bootstrap/
│   └── app.php
├── config/
│   ├── app.php
│   └── database.php
├── package.json                # Node.js dependencies
├── composer.json               # PHP dependencies
├── composer.lock
├── vite.config.js              # Vite configuration
├── index.html                  # React entry point
└── README.md
```

## ✨ Features

### Frontend
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **React Router** - Multi-page SPA with clean URL routes
- ✅ **Service Booking** - 3-step booking process
- ✅ **Interactive Calendar** - Date picker with unavailable dates in grey
- ✅ **Time Slot Selection** - Choose preferred appointment time
- ✅ **Therapist Selection** - Pick your preferred therapist
- ✅ **Booking Form** - Collect customer information
- ✅ **Currency Support** - Philippine Peso (₱) pricing

### Backend (In Development)
- API controllers for bookings
- Service management
- Database models and migrations

## 🔧 Tech Stack

**Frontend:**
- React 18.2.0
- React Router DOM 6.x
- React Calendar (date picker)
- Vite (build tool)
- CSS3 with CSS Variables

**Backend:**
- Laravel 10.0
- PHP 8.1+
- MySQL Database

## 📝 Development Notes

### Colors & Design
- Primary Color: `#a38a4e` (Warm Brown)
- Secondary Color: `#8b7d6b` (Dark Taupe)
- Accent Color: `#d4af37` (Gold)
- Background: `#f5f1ed` (Cream)

### Available Services
**Popular Services:**
- Hot Stone Massage - ₱950 (90 mins)
- Aroma Therapy - ₱500 (60 mins)
- Scalp Massage - ₱500 (90 mins)

**Regular Rates (1 Hour):**
- Thai Body Massage - ₱500
- Back Massage - ₱500
- Foot Massage - ₱500
- Swedish Massage - ₱500

**Combo Rates (2 Hours):**
- 6 massage combinations - ₱950 each

**Combo Rates (3 Hours):**
- Unlimited Choice - ₱1,400

## 🐛 Troubleshooting

### Issue: `php artisan` command not found
**Solution:** Make sure you're in the project root directory with `composer install` completed.

### Issue: npm modules not found
**Solution:** Run `npm install` again and clear npm cache:
```bash
npm cache clean --force
npm install
```

### Issue: Database connection error
**Solution:** 
1. Check XAMPP MySQL is running
2. Verify DB credentials in `.env` file match your setup
3. Create the `thai_boran` database in phpMyAdmin

### Issue: Port 5173 or 8000 already in use
**Solution:** Change ports in commands:
```bash
# Use different port for Laravel
php artisan serve --port=8001

# Use different port for React
npm run dev -- --port=5174
```

### Issue: CORS errors when calling backend
**Solution:** Configure CORS in Laravel when API endpoints are created.

## 📞 Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Commit: `git commit -m "Add your message"`
4. Push: `git push origin feature/your-feature-name`
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💡 Next Steps

- [ ] Create Laravel API endpoints
- [ ] Add database models and migrations
- [ ] Implement payment processing
- [ ] Add admin dashboard
- [ ] Setup email notifications
- [ ] Deploy to production

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
