import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-[100] border-b border-[#e9e0d7] bg-[#fbf7f2]">
      <div className="mx-auto flex min-h-[68px] max-w-[1200px] flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 md:flex-nowrap md:py-0 sm:px-8 lg:px-0">
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="font-serif text-[24px] font-semibold leading-none tracking-[0px] text-[#76500d] transition-colors duration-300 hover:text-[#9a6f22]"
        >
          Thai Boran
        </button>

        <nav className="order-3 flex w-full items-center justify-center gap-[23px] md:order-none md:w-auto md:gap-[33px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavClick(item.path)}
                className={[
                  'relative text-[15px] font-normal tracking-[0.01em] text-[#1f1712] transition-colors duration-300 hover:text-[#76500d]',
                  isActive
                    ? 'text-[#76500d] after:absolute after:-bottom-[9px] after:left-0 after:h-px after:w-full after:bg-[#76500d]'
                    : '',
                ].join(' ')}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => handleNavClick('/services')}
          className="h-[38px] rounded-[10px] bg-[#caa45c] px-[25px] text-[13px] font-medium tracking-[0.08em] text-[#211914] transition-all duration-300 hover:bg-[#b88e42] hover:shadow-[0_8px_18px_rgba(118,80,13,0.18)]"
        >
          Book Now
        </button>
      </div>
    </header>
  )
}
