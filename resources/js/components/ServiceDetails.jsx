import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function ServiceDetails({ onBack, onNext }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('11:30 AM')
  const [selectedTherapist, setSelectedTherapist] = useState('malee')

  // Define unavailable dates (example: Sundays and some booked dates)
  const unavailableDates = [
    // Sundays (day of week = 0)
    new Date(2026, 5, 7),   // Sun May 7
    new Date(2026, 5, 14),  // Sun May 14
    new Date(2026, 5, 21),  // Sun May 21
    new Date(2026, 5, 28),  // Sun May 28
    // Mondays (day of week = 1)
    new Date(2026, 5, 1),   // Mon May 1
    new Date(2026, 5, 8),   // Mon May 8
    // Sample booked dates
    new Date(2026, 5, 15),  // Wed May 15
    new Date(2026, 5, 20),  // Mon May 20
  ]

  const isDateDisabled = (date) => {
    // Disable past dates
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (date < today) return true

    // Disable specific unavailable dates
    return unavailableDates.some(
      unavailableDate =>
        date.getDate() === unavailableDate.getDate() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getFullYear() === unavailableDate.getFullYear()
    )
  }

  const therapists = [
    {
      id: 'malee',
      name: 'Malee S.',
      role: 'Senior Therapist',
      exp: '8y exp',
      image: '👩‍⚕️'
    },
    {
      id: 'anong',
      name: 'Anong K.',
      role: 'Traditional Specialist',
      exp: '8y exp',
      image: '👩‍⚕️'
    },
    {
      id: 'somchai',
      name: 'Somchai P.',
      role: 'Deep Tissue Expert',
      exp: '12y exp',
      image: '👨‍⚕️'
    },
    {
      id: 'any',
      name: 'Any Therapist',
      role: 'Best available for chosen slot',
      image: '👤'
    }
  ]

  const times = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:30 PM'
  ]

  const getTherapistDisplayName = () => {
    const therapist = therapists.find(t => t.id === selectedTherapist)
    return therapist ? therapist.name : 'Malee S.'
  }

  const formatSelectedDate = () => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return selectedDate.toLocaleDateString('en-US', options)
  }

  return (
    <section className="service-details-page">
      <div className="details-container">
        {/* Step Indicator */}
        <div className="step-indicator">
          <div className="step">
            <span className="step-number">1</span>
            <span className="step-label">Service</span>
          </div>
          <div className="step active">
            <span className="step-number">2</span>
            <span className="step-label">Schedule</span>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-label">Confirm</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="details-content">
          {/* Left Section - Date & Time Selection */}
          <div className="details-left">
            {/* Select Date */}
            <div className="selection-group">
              <h3 className="selection-title">Select Date</h3>
              <div className="calendar-wrapper">
                <Calendar 
                  onChange={setSelectedDate}
                  value={selectedDate}
                  minDate={new Date()}
                  tileDisabled={({ date }) => isDateDisabled(date)}
                  className="custom-calendar"
                />
              </div>
            </div>

            {/* Select Time */}
            <div className="selection-group">
              <h3 className="selection-title">Available Time</h3>
              <div className="time-grid">
                {times.map(time => (
                  <button
                    key={time}
                    className={`time-button ${selectedTime === time ? 'active' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Therapist Selection */}
          <div className="details-right">
            <h3 className="selection-title">Select Your Therapist</h3>
            <div className="therapist-list">
              {therapists.map(therapist => (
                <div
                  key={therapist.id}
                  className={`therapist-card ${selectedTherapist === therapist.id ? 'active' : ''}`}
                  onClick={() => setSelectedTherapist(therapist.id)}
                >
                  <div className="therapist-image">{therapist.image}</div>
                  <div className="therapist-info">
                    <h4 className="therapist-name">{therapist.name}</h4>
                    <p className="therapist-role">{therapist.role} • {therapist.exp}</p>
                  </div>
                  <div className="therapist-radio">
                    <input
                      type="radio"
                      name="therapist"
                      value={therapist.id}
                      checked={selectedTherapist === therapist.id}
                      onChange={() => setSelectedTherapist(therapist.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="details-footer">
          <button className="btn-back" onClick={() => onBack && onBack()}>
            ← Back
          </button>
          <div className="selected-info">
            Selected: {formatSelectedDate()}, {selectedTime} with {getTherapistDisplayName()}
          </div>
          <button className="btn-next" onClick={() => onNext && onNext()}>
            Next Step
          </button>
        </div>
      </div>
    </section>
  )
}
