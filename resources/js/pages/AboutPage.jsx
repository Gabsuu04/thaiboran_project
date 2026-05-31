import React from 'react'

const philosophyCards = [
  {
    title: 'Harmony of Sen Lines',
    body: 'Thai massage is based on the concept of Sen energy lines that traverse the body. By clearing blockages along these pathways, we restore the natural flow of life energy.',
    tone: 'bg-white',
    span: 'lg:col-span-2',
  },
  {
    title: 'Rooted in Mindfulness',
    body: 'Every touch is a prayer. Our therapists practice Metta loving-kindness, ensuring each movement is a meditative exchange focused entirely on your well-being.',
    tone: 'bg-[#d3aa58]',
    span: '',
  },
  {
    title: 'Historical Integrity',
    body: 'We preserve the techniques taught at the sacred Wat Pho temple, the birthplace of traditional Thai medicine, ensuring you receive the purest form of the art.',
    tone: 'bg-[#bceef2]',
    span: '',
  },
]

const therapists = [
  {
    name: 'Mali Somjai',
    role: 'Master of Therapeutic Stretching',
    image: '/images/thaiboranmassager.webp',
  },
  {
    name: 'Ananda Phum',
    role: 'Deep Tissue & Pressure Point Expert',
    image: '/images/hotstonemassage.jpg',
  },
  {
    name: 'Kanya Tuan',
    role: 'Herbal Compress & Energy Balancing',
    image: '/images/scalpmassage.jpg',
  },
]

const standards = [
  ['Certified', 'Ministry of Public Health Approved'],
  ['Organic', '100% Natural Herbs'],
  ['Privacy', 'Private Individual Suites'],
  ['Excellence', '5-Star Luxury Protocols'],
]

function AboutHero() {
  return (
    <section className="bg-[#fbf7f2] px-5 pb-[86px] pt-[126px] sm:px-8 lg:px-0">
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-[86px]">
        <div className="max-w-[470px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-[#8a7b68]">
            Since 1982
          </p>
          <h1 className="mt-[29px] font-serif text-[39px] font-normal leading-[1.02] tracking-[0px] text-[#76500d] sm:text-[48px]">
            The Art of <span className="italic text-[#0f5b61]">Nuad Thai</span>
            <br />
            Heritage
          </h1>
          <p className="mt-[25px] max-w-[390px] text-[14px] leading-[1.7] text-[#4a4037]">
            More than a massage, it is a spiritual ceremony. Thai Boran honors the 2,500-year-old tradition of healing, balancing the body&apos;s life force through mindful touch and rhythmic pressure.
          </p>
          <p className="mt-[36px] font-serif text-[14px] italic text-[#8a6a38] before:mr-4 before:inline-block before:h-px before:w-[42px] before:bg-[#8a6a38] before:align-middle before:content-['']">
            Sacred Healing Tradition
          </p>
        </div>

        <div className="mx-auto w-full max-w-[524px] overflow-hidden rounded-[6px] bg-[#2f2418] shadow-[0_24px_55px_rgba(41,27,12,0.18)] transition-transform duration-500 hover:-translate-y-1">
          <div className="relative aspect-[0.8] max-h-[640px] min-h-[470px]">
            <img
              src="/images/hotstonemassage.jpg"
              alt="Thai herbal compress massage"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
            <div className="absolute left-1/2 top-[42px] -translate-x-1/2 text-center text-white">
              <img src="/images/thaiboranlogo.jpg" alt="" className="mx-auto h-12 w-12 rounded-full object-cover opacity-85" />
            </div>
            <div className="absolute bottom-[35px] left-0 right-0 text-center">
              <div className="mb-[20px] flex justify-center gap-[25px] text-[8px] font-semibold uppercase tracking-[0.22em] text-white/80">
                <span>Massage</span>
                <span>Body Care</span>
                <span>Aroma</span>
                <span>Pressure</span>
              </div>
              <button className="rounded-full bg-[#d3aa58] px-[34px] py-[10px] text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#be9343]">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="bg-[#fbf7f2] px-5 py-[88px] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <h2 className="font-serif text-[29px] font-normal text-[#76500d]">Our Philosophy</h2>
          <div className="mx-auto mt-[13px] h-px w-[65px] bg-[#0f5b61]" />
        </div>

        <div className="mt-[67px] grid gap-[29px] lg:grid-cols-3">
          {philosophyCards.map((card) => (
            <article
              key={card.title}
              className={`${card.tone} ${card.span} rounded-[4px] p-[38px] shadow-[0_8px_26px_rgba(67,47,26,0.04)] transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="mb-[29px] h-5 w-5 rounded-full border border-[#0f5b61]" />
              <h3 className="font-serif text-[21px] font-normal text-[#76500d]">{card.title}</h3>
              <p className="mt-[17px] text-[12px] leading-[1.85] text-[#51473f]">{card.body}</p>
            </article>
          ))}
          <div className="overflow-hidden rounded-[4px] lg:col-span-2">
            <img
              src="/images/thaiboranwall.jpg"
              alt="Thai Boran treatment hallway"
              className="h-[360px] w-full object-cover sm:h-[450px] lg:h-[610px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TherapistsSection() {
  return (
    <section className="bg-[#f5f1ed] px-5 py-[96px] sm:px-8 lg:px-0">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-[31px] font-normal text-[#76500d]">Master Therapists</h2>
            <p className="mt-[18px] max-w-[410px] text-[12px] leading-[1.75] text-[#4c423a]">
              Our team consists of internationally certified practitioners with over 10+ years of experience in the ancient schools of Bangkok and Chiang Mai.
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button className="h-9 w-9 rounded-[6px] border border-[#cfbfae] text-[#76500d] transition-all duration-300 hover:bg-white">&lt;</button>
            <button className="h-9 w-9 rounded-[6px] border border-[#cfbfae] text-[#76500d] transition-all duration-300 hover:bg-white">&gt;</button>
          </div>
        </div>

        <div className="mt-[52px] grid gap-[31px] md:grid-cols-3">
          {therapists.map((therapist) => (
            <article key={therapist.name} className="group">
              <div className="aspect-[0.77] overflow-hidden rounded-[4px] bg-[#d8d1c8]">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="h-full w-full grayscale object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-[22px] font-serif text-[18px] font-normal text-[#76500d]">{therapist.name}</h3>
              <p className="mt-[4px] text-[11px] italic text-[#7b7168]">{therapist.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StandardSection() {
  return (
    <section className="bg-[#fbf7f2] px-5 py-[105px] sm:px-8 lg:px-0">
      <div className="mx-auto grid max-w-[1040px] items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="grid max-w-[500px] grid-cols-2 gap-[16px]">
          {standards.map(([title, body]) => (
            <article key={title} className="rounded-[5px] bg-[#ebe8e4] px-6 py-[34px] text-center transition-all duration-300 hover:bg-white">
              <div className="mx-auto mb-[22px] h-6 w-6 rounded-full border border-[#76500d]" />
              <h3 className="text-[15px] font-semibold text-[#76500d]">{title}</h3>
              <p className="mx-auto mt-[13px] max-w-[125px] text-[11px] leading-[1.55] text-[#51473f]">{body}</p>
            </article>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-[30px] font-normal text-[#76500d]">The Thai Boran Standard</h2>
          <p className="mt-[28px] max-w-[500px] text-[13px] leading-[1.8] text-[#4a4037]">
            We believe in uncompromising quality. From the silk linens imported from Korat to the custom-blended jasmine oils, every detail of your experience is curated to exceed global luxury standards while maintaining cultural authenticity.
          </p>
          <ul className="mt-[29px] space-y-[13px] text-[12px] text-[#4a4037]">
            <li>Rigorous hygiene and sanitation protocols</li>
            <li>Traditional Thai welcome ceremony for every guest</li>
            <li>Post-massage organic herbal tea service</li>
          </ul>
          <button className="mt-[29px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#76500d] transition-colors duration-300 hover:text-[#0f5b61]">
            Learn more about our process &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#2f2418]">
      <AboutHero />

      <section className="overflow-hidden border-y border-[#eee6dd] bg-[#f5f1ed] py-[31px]">
        <div className="flex min-w-max justify-center gap-[91px] font-serif text-[26px] italic uppercase tracking-[0.2em] text-[#c9b9a3]">
          <span>Authenticity</span>
          <span>Serenity</span>
          <span>Heritage</span>
          <span>Ancient Healing</span>
        </div>
      </section>

      <PhilosophySection />
      <TherapistsSection />
      <StandardSection />

      <section className="bg-[#fbf7f2] px-5 pb-[118px] sm:px-8 lg:px-0">
        <div className="relative mx-auto max-w-[1130px] overflow-hidden rounded-[8px] bg-[#876511] px-6 py-[76px] text-center text-white shadow-[0_18px_38px_rgba(82,55,9,0.18)]">
          <div className="absolute -bottom-3 left-0 h-24 w-24 rounded-[10px] bg-white/5" />
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[10px] bg-white/5" />
          <p className="text-[12px] font-semibold">Experience Serenity Today</p>
          <h2 className="mx-auto mt-[18px] max-w-[430px] text-[18px] font-semibold leading-[1.55]">
            Embark on a journey of healing and relaxation in our sanctuary of calm.
          </h2>
          <button className="mt-[29px] rounded-[7px] bg-white px-[36px] py-[14px] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#876511] shadow-[0_12px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fbf7f2]">
            Schedule Your Session
          </button>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
