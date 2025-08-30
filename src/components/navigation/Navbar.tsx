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
        <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 shadow-sm">
            <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    {logo ? (
                        <Image
                            src={logo}
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-10 object-contain"
                        />
                    ) : (
                        <div className="bg-white px-3 py-2 rounded">
                            <span className="text-purple-700 font-bold text-xl">PODAR</span>
                        </div>
                    )}
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center space-x-8">
                    {items.map((link) => (
                        <li key={link.label} className="relative group">
                            {link.submenu?.length ? (
                                <>
                                    <button className="flex items-center text-white font-medium hover:text-purple-200 transition-colors py-2">
                                        {link.label}
                                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        {link.submenu.map((sub) => (
                                            <li key={sub.label}>
                                                <Link
                                                    href={sub.href}
                                                    className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
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
                                    className="text-white font-medium hover:text-purple-200 transition-colors py-2"
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
                    className="lg:hidden p-2 rounded-md text-white hover:bg-purple-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
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

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-purple-700 border-t border-purple-500">
                    <ul className="px-6 py-4 space-y-2">
                        {items.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block py-3 text-white font-medium hover:text-purple-200 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>

                                {/* Mobile Submenu */}
                                {link.submenu?.length && (
                                    <ul className="pl-4 mt-2 space-y-2">
                                        {link.submenu.map((sub) => (
                                            <li key={sub.label}>
                                                <Link
                                                    href={sub.href}
                                                    className="block py-2 text-purple-200 hover:text-white transition-colors"
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
