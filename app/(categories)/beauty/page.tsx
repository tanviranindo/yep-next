'use client'

import { useEffect } from 'react'

export default function BeautyPage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'beauty')
  }, [])

  return (
    <div className="min-h-screen" data-theme="beauty">
      {/* Top Bar */}
      <div className="bg-primary text-primary-content text-center py-2 text-sm">
        Free shipping on orders over $75 | Shop now and save!
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <h1 className="text-3xl font-bold text-primary tracking-wide">GLAMOUR</h1>
        </div>
        <div className="navbar-center flex-1 max-w-md mx-8">
          <div className="form-control w-full">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Search for skincare, makeup..." 
                className="input input-bordered w-full rounded-full" 
              />
              <button className="btn btn-primary rounded-full">
                🔍
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Beauty Box</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-r from-pink-300 to-purple-600">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">💄 Beauty</h1>
            <p className="mb-5">
              Your trusted beauty destination for premium skincare, makeup, and fragrance from the world's best brands.
            </p>
            <button className="btn btn-primary">Explore Beauty</button>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="bg-base-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <a className="text-base-content hover:text-primary font-medium">Skincare</a>
            <a className="text-base-content hover:text-primary font-medium">Makeup</a>
            <a className="text-base-content hover:text-primary font-medium">Fragrance</a>
            <a className="text-base-content hover:text-primary font-medium">Hair Care</a>
            <a className="text-red-500 hover:text-red-600 font-bold">Sale</a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg opacity-70">Discover our most loved beauty essentials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sample beauty products */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary rounded-t-lg"></div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Hydrating Serum</h2>
              <p className="opacity-70 text-sm">Advanced hydration for all skin types</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">$89</span>
                <button className="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-secondary to-accent rounded-t-lg"></div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Matte Lipstick</h2>
              <p className="opacity-70 text-sm">Long-lasting matte finish</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">$35</span>
                <button className="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-accent to-primary rounded-t-lg"></div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Face Mask</h2>
              <p className="opacity-70 text-sm">Weekly deep cleansing treatment</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">$45</span>
                <button className="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-primary to-accent rounded-t-lg"></div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg">Eye Cream</h2>
              <p className="opacity-70 text-sm">Anti-aging eye care solution</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">$65</span>
                <button className="btn btn-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Beauty Tips Section */}
        <div className="mt-16">
          <div className="card bg-secondary text-secondary-content">
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-2xl mb-4">💡 Beauty Tip of the Day</h2>
              <p className="text-lg mb-6">
                Always apply skincare products from thinnest to thickest consistency for optimal absorption.
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">View More Tips</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}