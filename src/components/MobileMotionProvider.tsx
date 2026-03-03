'use client'

import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'

export function MobileMotionProvider({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
            {children}
        </MotionConfig>
    )
}
