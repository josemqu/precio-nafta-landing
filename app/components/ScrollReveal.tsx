'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  threshold?: number
  triggerOnce?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 600,
  distance = 30,
  direction = 'up',
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce })

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)'
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`
      case 'down':
        return `translate3d(0, -${distance}px, 0)`
      case 'left':
        return `translate3d(${distance}px, 0, 0)`
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`
      default:
        return `translate3d(0, ${distance}px, 0)`
    }
  }

  return (
    <div
      ref={ref as any}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}
