'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {NavItem} from "@/lib/navigation/navbar/nav-types";

interface Props { logo?: string; items: NavItem[] }

export default function NavBar({logo, items}: Props) {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    {logo ? (
                        <Image src={logo} alt="Site logo" width={40} height={40} className="h-10 w-10 object-contain"/>
                    ) : (
                        <span className="text-xl font-bold">MDM</span>
                    )}
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {items.map(link => (
                        <li key={link.label} className="relative group">
                            <Link href={link.href} className="text-gray-700 hover:text-blue-700 transition">
                                {link.label}
                            </Link>

                            {/* Dropdown */}
                            {link.submenu?.length ? (
                                <ul className="invisible opacity-0 absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg transition
                                group-hover:visible group-hover:opacity-100">
                                    {link.submenu.map(s => (
                                        <li key={s.label}>
                                            <Link href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                                {s.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <button onClick={()=>setOpen(!open)} className="md:hidden text-gray-700">
                    <span className="sr-only">Toggle menu</span>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d={open ? 'M6 18L18 6M6 6l12 12':'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <ul className="px-4 py-4 space-y-2">
                        {items.map(link => (
                            <li key={link.label}>
                                <Link href={link.href} className="block py-2 text-gray-700">
                                    {link.label}
                                </Link>
                                {link.submenu?.length && (
                                    <ul className="pl-4 space-y-1">
                                        {link.submenu.map(s => (
                                            <li key={s.label}>
                                                <Link href={s.href} className="block py-1 text-sm text-gray-600">
                                                    {s.label}
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
