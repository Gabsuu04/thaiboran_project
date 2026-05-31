import React, { useState } from 'react'

const filters = ['All', 'Interior', 'Treatments', 'Wellness Details']

const galleryItems = [
  {
    title: 'Grand Reception',
    category: 'Interior',
    image: '/images/thaiboranwall.jpg',
  },
  {
    title: 'Herbal Compresses',
    category: 'Wellness Details',
    image: '/images/hotstonemassage.jpg',
  },
  {
    title: 'Aromatherapy Oils',
    category: 'Wellness Details',
    image: '/images/aromatherapy.jpg',
  },
  {
    title: 'Authentic Thai Stretching',
    category: 'Treatments',
    image: '/images/thaiboranmassager.webp',
  },
  {
    title: 'Private Suite',
    category: 'Interior',
    image: '/images/thaiboranwall.jpg',
  },
  {
    title: 'Foot Rituals',
    category: 'Treatments',
    image: '/images/scalpmassage.jpg',
  },
]

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <main className="bg-[#fbf7f2] text-[#2f2418]">
      <section className="mx-auto max-w-[1080px] px-5 pb-[138px] pt-[48px] sm:px-8 lg:px-0 lg:pt-[45px]">
        <div className="mx-auto max-w-[690px] text-center">
          <h1 className="font-serif text-[42px] font-normal leading-tight tracking-[0px] text-[#76500d] sm:text-[54px]">
            Visual Serenity
          </h1>
          <p className="mt-[22px] text-[16px] leading-[1.72] text-[#27201a] sm:text-[17px]">
            Explore the authentic atmosphere and meticulous details of our sanctuary. Every
            element is designed to transport you to a world of peace and traditional Thai
            healing.
          </p>
        </div>

        <div className="mt-[62px] flex flex-wrap justify-center gap-[14px]">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  'h-[43px] rounded-[10px] px-[30px] text-[13px] font-medium tracking-[0.08em] transition-all duration-300',
                  isActive
                    ? 'bg-[#2f6970] text-white shadow-[0_3px_0_#1d4247]'
                    : 'bg-[#f5f0eb] text-[#211914] hover:bg-[#ebe3db] hover:text-[#76500d]',
                ].join(' ')}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-[51px] grid gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[6px] bg-white shadow-[0_14px_30px_rgba(83,56,25,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(83,56,25,0.12)]"
            >
              <div className="h-[282px] overflow-hidden bg-[#d7c6b2] sm:h-[276px] lg:h-[294px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-[23px] pb-[22px] pt-[21px]">
                <h2 className="text-[20px] font-medium leading-tight tracking-[0px] text-[#7a4d05]">
                  {item.title}
                </h2>
                <p className="mt-[8px] text-[13px] font-medium uppercase leading-none tracking-[0.15em] text-[#14100d]">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
