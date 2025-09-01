'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CategoryType } from '@/lib/theme'

interface ThemeContextType {
  currentCategory: CategoryType
  setCurrentCategory: (category: CategoryType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  initialCategory?: CategoryType
}

export const ThemeProvider = ({ children, initialCategory = 'fashion' }: ThemeProviderProps) => {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>(initialCategory)

  return (
    <ThemeContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </ThemeContext.Provider>
  )
}