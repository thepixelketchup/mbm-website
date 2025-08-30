'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavItem } from '@/lib/navigation/navbar/nav-types'

interface Props {
  logo?: string
  items: NavItem[]
}

export default function NavBar({ logo, items }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-screen bg-background shadow-sm">
      <nav className="flex items-center justify-between px-4 py-2 lg:px-4 w-full">
        
        {/* Logo */}
        <Link href="/" className="flex w-12">
          {logo ? (
            <Image
              src={logo}
              alt="Logo"
              width={140}
              height={45}
              className="h-10 object-contain"
            />
          ) : (
            <span className="text-xl font-bold text-white tracking-wide">
              PODAR
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center">
          {items.map((link) => (
            <li key={link.label} className="relative group">
              {link.submenu?.length ? (
                <>
                  <Link
                    href={link.href ?? '#'}
                    className="flex items-center font-medium text-white px-6 py-3 rounded-xl hover:text-foreground hover:bg-white"
                  >
                    {link.label}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <ul className="absolute left-0 mt-2 w-52 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block px-5 py-3 text-sm text-foreground hover:bg-muted/50 rounded-lg transition"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-white px-6 py-3 rounded-xl 
                             hover:bg-white hover:text-foreground"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-white hover:bg-primary/80 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-background">
          <ul className="px-6 py-4 space-y-2 overflow-y-scroll">
            {items.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block font-medium text-white rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>

                {link.submenu?.length && (
                  <ul className="pl-4 space-y-1">
                    {link.submenu.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block py-2 text-white w-full"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
