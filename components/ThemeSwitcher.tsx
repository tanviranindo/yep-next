'use client'

import { useState } from 'react'
import { CategoryType, getAllCategories } from '@/lib/theme'

interface ThemeSwitcherProps {
  currentCategory: CategoryType
  onCategoryChange: (category: CategoryType) => void
  className?: string
}

export default function ThemeSwitcher({ 
  currentCategory, 
  onCategoryChange, 
  className = '' 
}: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const categories = getAllCategories()

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">
          {categories.find(cat => cat.id === currentCategory)?.emoji || '🎨'}
        </span>
      </div>
      
      {isOpen && (
        <ul 
          tabIndex={0} 
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`flex items-center space-x-3 ${
                  currentCategory === category.id ? 'active' : ''
                }`}
                onClick={() => {
                  onCategoryChange(category.id)
                  setIsOpen(false)
                }}
              >
                <span className="text-lg">{category.emoji}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-70">{category.description}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}