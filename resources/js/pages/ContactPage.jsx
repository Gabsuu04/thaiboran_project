import React, { useState } from 'react'

const contactDetails = [
  {
    label: 'Phone',
    value: '+66 2 123 4567',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'serenity@thaiboran.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16v14H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: '123 Sukhumvit Road, Khlong Toei,\nBangkok 10110, Thailand',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.2" />
      </svg>
    ),
  },
]

const faqs = [
  'When should I arrive for my appointment?',
  'What is your cancellation policy?',
  'What should I wear for a traditional Thai massage?',
  'Can I book a session for two people?',
]

function Field({ id, label, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-[12px] block text-[13px] font-medium text-[#2c2118]">{label}</span>
      {children}
    </label>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const inputClasses =
    'h-[50px] w-full border-0 border-b border-[#c9c2ba] bg-[#f2eee9] px-[18px] text-[13px] text-[#2f2418] outline-none transition-all duration-300 placeholder:text-[#8d847b] focus:border-[#8a650e] focus:bg-white focus:ring-2 focus:ring-[#d3aa58]/25'

  return (
    <form
      className="rounded-[8px] bg-white px-[31px] py-[52px] shadow-[0_26px_55px_rgba(83,56,25,0.06)] sm:px-[50px]"
      noValidate
    >
      <div className="grid gap-[32px] md:grid-cols-2">
        <Field id="fullName" label="Full Name">
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={updateField}
            placeholder="Arun Sawad"
            className={inputClasses}
          />
        </Field>

        <Field id="email" label="Email Address">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={updateField}
            placeholder="arun@example.com"
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="mt-[35px]">
        <Field id="subject" label="Subject">
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={updateField}
            className={`${inputClasses} appearance-none`}
          >
            <option>General Inquiry</option>
            <option>Booking Availability</option>
            <option>Treatment Recommendation</option>
            <option>Gift Certificates</option>
          </select>
        </Field>
      </div>

      <div className="mt-[35px]">
        <Field id="message" label="Your Message">
          <textarea
            id="message"
            name="message"
            required
            rows="7"
            value={formData.message}
            onChange={updateField}
            placeholder="How can we help you relax today?"
            className="min-h-[154px] w-full resize-y border-0 border-b border-[#c9c2ba] bg-[#f2eee9] px-[18px] py-[17px] text-[13px] text-[#2f2418] outline-none transition-all duration-300 placeholder:text-[#8d847b] focus:border-[#8a650e] focus:bg-white focus:ring-2 focus:ring-[#d3aa58]/25"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-[34px] h-[58px] rounded-[8px] bg-[#876511] px-[52px] text-[16px] font-semibold text-white shadow-[0_10px_22px_rgba(84,57,11,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#76500d] focus:outline-none focus:ring-4 focus:ring-[#d3aa58]/35"
      >
        Send Message
      </button>
    </form>
  )
}

function ContactInfo() {
  return (
    <aside>
      <h2 className="font-serif text-[22px] font-normal text-[#76500d]">Contact Details</h2>
      <div className="mt-[27px] space-y-[27px]">
        {contactDetails.map((item) => (
          <div key={item.label} className="flex gap-[20px] text-[#76500d]">
            <div className="mt-[3px]">{item.icon}</div>
            <div>
              <p className="text-[13px] font-medium text-[#2f2418]">{item.label}</p>
              <p className="mt-[6px] whitespace-pre-line text-[13px] leading-[1.55] text-[#3f342c]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-[40px] h-px bg-[#e2d9cf]" />

      <h2 className="font-serif text-[22px] font-normal text-[#76500d]">Opening Hours</h2>
      <div className="mt-[25px] space-y-[14px] text-[14px] text-[#3f342c]">
        <div className="flex justify-between gap-8">
          <span>Monday - Friday</span>
          <span className="text-[#0f0c09]">10:00 - 22:00</span>
        </div>
        <div className="flex justify-between gap-8">
          <span>Saturday - Sunday</span>
          <span className="text-[#0f0c09]">09:00 - 23:00</span>
        </div>
      </div>
      <p className="mt-[35px] text-[13px] italic text-[#5c5148]">
        Last entry 60 minutes before closing.
      </p>
    </aside>
  )
}

function LocationPanel() {
  return (
    <section className="mx-auto mt-[116px] max-w-[1140px] px-5 sm:px-8 lg:px-0">
      <div className="relative overflow-hidden rounded-[10px] bg-[#203d35] shadow-[0_22px_42px_rgba(48,37,24,0.15)]">
        <div className="relative h-[330px] sm:h-[430px]">
          <img
            src="/images/thaiboranwall.jpg"
            alt="Thai Boran location"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#173b35]/80 via-transparent to-[#173b35]/75" />
          <div className="absolute left-[30px] top-1/2 w-[286px] -translate-y-1/2 rounded-[7px] bg-[#fbf7f2]/95 p-[28px] shadow-[0_18px_34px_rgba(0,0,0,0.12)] sm:left-[33px]">
            <h3 className="font-serif text-[21px] font-normal text-[#76500d]">Find Us Here</h3>
            <p className="mt-[13px] text-[13px] leading-[1.75] text-[#4a4037]">
              Located in the heart of Sukhumvit, just a 5-minute walk from the BTS station.
            </p>
            <a href="https://maps.google.com" className="mt-[22px] inline-flex text-[12px] font-semibold text-[#76500d] transition-colors duration-300 hover:text-[#0f5b61]">
              Open in Google Maps&nbsp; &rarr;
            </a>
          </div>
          <div className="absolute left-1/2 top-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[8px] bg-[#876511] text-white shadow-[0_13px_28px_rgba(0,0,0,0.2)]">
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="bg-[#fbf7f2] px-5 pb-[158px] pt-[123px] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1140px]">
        <div className="text-center">
          <h2 className="font-serif text-[35px] font-normal text-[#1d1712]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-[20px] max-w-[540px] text-[15px] leading-[1.65] text-[#4a4037]">
            Common questions about visiting Thai Boran to ensure your session is perfectly serene.
          </p>
        </div>

        <div className="mt-[71px] grid gap-x-[54px] gap-y-0 md:grid-cols-2">
          {faqs.map((question) => (
            <button
              key={question}
              type="button"
              className="flex min-h-[83px] w-full items-center justify-between border-b border-[#ded5cb] text-left text-[18px] text-[#090806] transition-colors duration-300 hover:text-[#76500d] focus:outline-none focus:ring-2 focus:ring-[#d3aa58]/30"
            >
              <span className="pr-8">{question}</span>
              <span className="text-[18px] text-[#76500d]">⌄</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2f2418]">
      <section className="mx-auto max-w-[1140px] px-5 pb-[44px] pt-[56px] sm:px-8 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#76500d]">
              Get In Touch
            </p>
            <h1 className="mt-[22px] max-w-[635px] font-serif text-[46px] font-normal leading-[1.04] tracking-[0px] text-[#1d1712] sm:text-[58px]">
              Your sanctuary of peace awaits your arrival.
            </h1>
          </div>
          <p className="max-w-[390px] pt-[64px] text-[16px] leading-[1.75] text-[#3f342c] lg:justify-self-end">
            We are here to assist with any inquiries regarding our traditional Thai therapies and booking availability.
          </p>
        </div>

        <div className="mt-[102px] grid gap-[49px] lg:grid-cols-[320px_1fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <LocationPanel />
      <FAQSection />
    </main>
  )
}

export default ContactPage
