'use client'

import { useEffect } from 'react'
import { CategoryType, getCategoryConfig } from '@/lib/theme'

interface CategoryLayoutProps {
  category: CategoryType
  children: React.ReactNode
  className?: string
}

export default function CategoryLayout({ 
  category, 
  children, 
  className = '' 
}: CategoryLayoutProps) {
  const config = getCategoryConfig(category)

  useEffect(() => {
    // Set the data-theme attribute for DaisyUI
    document.documentElement.setAttribute('data-theme', category)
    
    // Set CSS custom properties for category colors
    const root = document.documentElement
    root.style.setProperty('--category-primary', config.colors.primary)
    root.style.setProperty('--category-secondary', config.colors.secondary)
    root.style.setProperty('--category-accent', config.colors.accent)
    root.style.setProperty('--category-background', config.colors.background)
  }, [category, config])

  return (
    <div 
      className={`min-h-screen theme-${category} ${className}`}
      data-theme={category}
    >
      {children}
    </div>
  )
}