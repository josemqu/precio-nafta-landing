'use client'

import { useState } from 'react'
import Image from 'next/image'

interface SmartImageProps {
  src: string
  fallback: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function SmartImage({ 
  src, 
  fallback, 
  alt, 
  className = '',
  width,
  height
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallback)
    }
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      width={width || 1000}
      height={height || 600}
      style={{ objectFit: 'cover' }}
    />
  )
}
