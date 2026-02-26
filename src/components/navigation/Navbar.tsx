'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NavItem } from '@/lib/navigation/navbar/nav-types'

interface Props {
  logo?: string
  items: NavItem[]
}

export default function NavBar({ logo, items }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'py-2 glass shadow-md' : 'py-4 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50 relative">
          {logo ? (
            <Image
              src={logo}
              alt="Logo"
              width={140}
              height={45}
              className="h-10 object-contain drop-shadow-sm"
              priority
            />
          ) : (
            <span className="text-2xl font-bold text-primary font-serif tracking-wide drop-shadow-sm">
              PODAR
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1">
          {items.map((link) => (
            <li key={link.label} className="relative group">
              {link.submenu?.length ? (
                <>
                  <Link
                    href={link.href ?? '#'}
                    className="flex items-center font-medium text-foreground/80 px-4 py-2.5 rounded-full hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    {link.label}
                    <ChevronDown className="ml-1 w-4 h-4 text-foreground/50 group-hover:text-primary transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                    <ul className="w-56 p-2 rounded-2xl glass shadow-xl border border-white/50">
                      {link.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors duration-200"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-foreground/80 px-4 py-2.5 rounded-full hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          
          {/* CTA Button Example - can be dynamic if needed */}
          <li className="pl-4">
            <Link 
              href="/admissions" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Apply Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col pt-24 pb-8 px-6 min-h-screen">
              <ul className="space-y-4 flex-1">
                {items.map((link, index) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="border-b border-primary/10 pb-4"
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-serif text-foreground hover:text-primary transition-colors block"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {link.submenu?.length && (
                      <ul className="pt-4 space-y-3 pl-4">
                        {link.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block text-lg text-foreground/70 hover:text-primary transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-8 w-full mt-auto">
                <Link
                  href="/admissions"
                  className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-primary rounded-xl focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

