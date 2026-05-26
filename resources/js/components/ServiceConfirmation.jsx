import React, { useState } from 'react'

export default function ServiceConfirmation({ onBack, onConfirm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    specialRequests: '',
    agreeToTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleConfirm = () => {
    if (formData.fullName && formData.email && formData.phone && formData.agreeToTerms) {
      onConfirm && onConfirm(formData)
    } else {
      alert('Please fill in all required fields and agree to terms')
    }
  }

  return (
    <section className="confirmation-page">
      <div className="confirmation-container">
        {/* Step Indicator */}
        <div className="step-indicator">
          <div className="step">
            <span className="step-number">1</span>
            <span className="step-label">Select Service</span>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <span className="step-label">Time & Therapist</span>
          </div>
          <div className="step active">
            <span className="step-number">3</span>
            <span className="step-label">Confirmation</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="confirmation-content">
          {/* Left Section - Personal Details */}
          <div className="personal-details">
            <h2 className="section-heading">Personal Details</h2>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="e.g., Sarah Jenkins"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Contact</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                  />
                  Email
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                  />
                  Phone
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests or Medical Notes</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                placeholder="Please mention any allergies, injuries, or focus areas..."
                value={formData.specialRequests}
                onChange={handleInputChange}
                className="form-textarea"
                rows="4"
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                />
                I agree to the <a href="#cancellation">Cancellation Policy</a> and understand that a deposit may be required to secure my booking.
              </label>
            </div>
          </div>

          {/* Right Section - Booking Summary */}
          <div className="booking-summary">
            <h2 className="section-heading">Booking Summary</h2>

            <div className="summary-item">
              <div className="summary-icon">🧘</div>
              <div className="summary-details">
                <div className="summary-label">SERVICE</div>
                <div className="summary-value">Traditional Royal Thai Massage Session</div>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">📅</div>
              <div className="summary-details">
                <div className="summary-label">DATE & TIME</div>
                <div className="summary-value">Friday, Oct 124, 9:00am at 11:30 PM</div>
              </div>
            </div>

            <div className="summary-item">
              <div className="summary-icon">👩‍⚕️</div>
              <div className="summary-details">
                <div className="summary-label">THERAPIST</div>
                <div className="summary-value">Ms. Halwan<br /><span className="therapist-role">Senior Thai Practitioner</span></div>
              </div>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Standard</span>
                <span>₱125.00</span>
              </div>
              <div className="price-row">
                <span>Service Tax (7%)</span>
                <span>₱8.75</span>
              </div>
              <div className="price-row total">
                <span>Total Price</span>
                <span>₱133.75</span>
              </div>
            </div>

            <button className="btn-confirm" onClick={handleConfirm}>
              Confirm Booking
            </button>

            <div className="confirmation-note">
              Instant confirmation via email
            </div>

            <div className="trust-badges">
              <div className="badge">
                <div className="badge-icon">✓</div>
                <div className="badge-text">Authentic Thai Certification</div>
              </div>
              <div className="badge">
                <div className="badge-icon">🔒</div>
                <div className="badge-text">Secure Payment Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
