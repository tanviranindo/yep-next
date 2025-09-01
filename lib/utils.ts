import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CategoryType, getCategoryConfig } from "./theme"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategoryColors(category: CategoryType) {
  return getCategoryConfig(category).colors
}

export function generateCategoryClasses(category: CategoryType) {
  const colors = getCategoryConfig(category).colors
  return {
    primary: `bg-[${colors.primary}] text-white`,
    secondary: `bg-[${colors.secondary}] text-white`,
    accent: `bg-[${colors.accent}] text-white`,
    background: `bg-[${colors.background}]`,
    text: {
      primary: `text-[${colors.primary}]`,
      secondary: `text-[${colors.secondary}]`,
      accent: `text-[${colors.accent}]`,
    },
    border: {
      primary: `border-[${colors.primary}]`,
      secondary: `border-[${colors.secondary}]`,
      accent: `border-[${colors.accent}]`,
    },
    hover: {
      primary: `hover:bg-[${colors.primary}] hover:text-white`,
      secondary: `hover:bg-[${colors.secondary}] hover:text-white`,
      accent: `hover:bg-[${colors.accent}] hover:text-white`,
    }
  }
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}