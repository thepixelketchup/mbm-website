'use client'

import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import {FooterData} from "@/lib/navigation/footer/getFooter";
import PortableTextComponent from "@/components/PortableTextComponent";

export default function Footer({ data }: { data: FooterData }) {
    return (
        <footer className="bg-muted text-zinc-200 font-sans">
            {data.quote && (
                <div className="py-6 text-center text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
                    “{data.quote}”
                </div>
            )}

            <div className="mx-auto max-w-7xl grid gap-10 px-6 py-14 md:grid-cols-4">
                <div>
                    <h3 className="mb-6 border-b border-zinc-700 pb-2 text-lg font-bold uppercase">
                        Our Pages
                    </h3>

                    <ul className="space-y-3 text-sm">
                        {data.pages?.map((p: any) => (
                            <li key={p.href}>
                                <Link
                                    href={p.href}
                                    className="flex items-center gap-2 text-foreground text-lg"
                                >
                                    <svg
                                        className="h-4 w-4 shrink-0 text-foreground"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a.75.75 0 01-.53-1.28l4.72-4.72-4.7-4.7a.75.75 0 111.06-1.06l5.24 5.24a.75.75 0 010 1.06l-5.3 5.3A.75.75 0 0110 18z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {p.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h3 className="mb-6 border-b border-zinc-700 pb-2 text-lg font-bold uppercase">
                        Contact Information
                    </h3>

                    <div className="grid gap-y-8 gap-x-12 text-xs sm:grid-cols-3">
                        <div>
                            <h4 className="text-xl font-normal mb-2 text-foreground">Head Office</h4>
                            <PortableTextComponent value={data.headOffice} />
                        </div>

                        <div>
                            <h4 className="mb-2 text-xl font-normal text-foreground">Branches</h4>
                            <PortableTextComponent value={data.branches} />
                        </div>

                        <div>
                            <h4 className="mb-2 text-xl font-normal text-foreground">Mail ID</h4>
                            <ul className="space-y-2">
                                {data.emails?.map((e: any) => (
                                    <li key={e.href}>
                                        <Link
                                            href={`mailto:${e.href}`}
                                            className="text-foreground text-lg"
                                        >
                                            {e.href}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-800 py-5">
                <div className="mx-auto max-w-7xl px-6 text-center text-xs text-zinc-400">
                    {data.copyright}
                </div>
            </div>
        </footer>
    )
}
