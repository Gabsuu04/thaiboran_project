import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/images/thaiboranlogo.jpg" alt="Thai Boran" className="footer-logo" />
          <p>Exploring the art of authentic Thai massage and healing.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon - Fri: 10am - 8pm</li>
            <li>Sat: 10am - 6pm</li>
            <li>Sun: By appointment</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Email: hello@thaiboran.com</li>
            <li>Address: 123 Wellness St</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Thai Boran. All rights reserved.</p>
      </div>
    </footer>
  )
}
