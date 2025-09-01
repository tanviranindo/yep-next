// Theme configuration for multi-category e-commerce platform

export type CategoryType = 'fashion' | 'beauty' | 'gadgets' | 'furniture' | 'kidsmom'

export interface CategoryConfig {
  id: CategoryType
  name: string
  emoji: string
  description: string
  colors: {
    primary: string
    secondary: string  
    accent: string
    background: string
  }
  gradients: {
    hero: string
    card: string
  }
}

export const categories: Record<CategoryType, CategoryConfig> = {
  fashion: {
    id: 'fashion',
    name: 'Fashion',
    emoji: '👗',
    description: 'Premium fashion and sustainable style',
    colors: {
      primary: '#1a1a2e',
      secondary: '#d4af37', 
      accent: '#ff6b6b',
      background: '#f8f9fa'
    },
    gradients: {
      hero: 'from-slate-900 to-amber-500',
      card: 'from-primary to-secondary'
    }
  },
  beauty: {
    id: 'beauty',
    name: 'Beauty',
    emoji: '💄',
    description: 'Premium beauty and skincare essentials',
    colors: {
      primary: '#e8b4b8',
      secondary: '#6a0572',
      accent: '#f8b5c1', 
      background: '#fdf6e3'
    },
    gradients: {
      hero: 'from-pink-300 to-purple-600',
      card: 'from-secondary to-accent'
    }
  },
  gadgets: {
    id: 'gadgets',
    name: 'Gadgets', 
    emoji: '📱',
    description: 'Latest tech and innovative gadgets',
    colors: {
      primary: '#007bff',
      secondary: '#343a40',
      accent: '#ff6b35',
      background: '#f8f9fa'
    },
    gradients: {
      hero: 'from-blue-500 to-gray-600',
      card: 'from-accent to-primary'
    }
  },
  furniture: {
    id: 'furniture',
    name: 'Furniture',
    emoji: '🛋️', 
    description: 'Modern furniture and home decor',
    colors: {
      primary: '#8b4513',
      secondary: '#9caf88',
      accent: '#f5f5dc',
      background: '#ffffff'
    },
    gradients: {
      hero: 'from-amber-700 to-green-500',
      card: 'from-primary to-secondary'
    }
  },
  kidsmom: {
    id: 'kidsmom',
    name: 'Kids & Mom',
    emoji: '👶',
    description: 'Family essentials and parenting products',
    colors: {
      primary: '#a8a8d8',
      secondary: '#98d8c8', 
      accent: '#ff7f7f',
      background: '#e6f3ff'
    },
    gradients: {
      hero: 'from-purple-400 to-green-300',
      card: 'from-primary to-accent'
    }
  }
}

export const getCategoryConfig = (category: CategoryType): CategoryConfig => {
  return categories[category]
}

export const getAllCategories = (): CategoryConfig[] => {
  return Object.values(categories)
}