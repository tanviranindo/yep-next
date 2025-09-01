'use client'

import { useEffect } from 'react'

export default function GadgetsPage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'gadgets')
  }, [])

  return (
    <div className="min-h-screen" data-theme="gadgets">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg border-b">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold text-primary">TechZone</h1>
        </div>
        <div className="navbar-center flex-1 max-w-2xl mx-8">
          <div className="form-control w-full">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Search for phones, laptops, accessories..." 
                className="input input-bordered w-full" 
              />
              <button className="btn btn-primary">
                🔍
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end space-x-2">
          <button className="btn btn-ghost btn-circle">
            👤
          </button>
          <button className="btn btn-ghost btn-circle relative">
            🛒
            <div className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </div>
          </button>
          <button className="btn btn-accent">Sign In</button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-base-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <a className="text-base-content hover:text-primary font-medium">📱 Phones</a>
            <a className="text-base-content hover:text-primary font-medium">💻 Laptops</a>
            <a className="text-base-content hover:text-primary font-medium">🎧 Audio</a>
            <a className="text-base-content hover:text-primary font-medium">🎮 Gaming</a>
            <a className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">🔥 Hot Deals</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-r from-blue-500 to-gray-600">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">📱 Gadgets</h1>
            <p className="mb-5">
              Discover the latest tech innovations. From cutting-edge smartphones to powerful laptops, find everything you need.
            </p>
            <button className="btn btn-primary">Shop Tech</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Gadgets</h2>
          <p className="text-lg opacity-70">Latest technology at unbeatable prices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample tech products */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                📱
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Latest Smartphone</h2>
              <p className="opacity-70">5G enabled with advanced camera system</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <span className="text-sm opacity-70">(124 reviews)</span>
              </div>
              <div className="card-actions justify-between items-center">
                <span className="text-2xl font-bold text-primary">$899</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-6xl">
                💻
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Gaming Laptop</h2>
              <p className="opacity-70">High-performance laptop for gaming and work</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                <span className="text-sm opacity-70">(87 reviews)</span>
              </div>
              <div className="card-actions justify-between items-center">
                <span className="text-2xl font-bold text-primary">$1299</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center text-6xl">
                🎧
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Wireless Headphones</h2>
              <p className="opacity-70">Premium sound with noise cancellation</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="rating rating-sm">
                  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <span className="text-sm opacity-70">(203 reviews)</span>
              </div>
              <div className="card-actions justify-between items-center">
                <span className="text-2xl font-bold text-primary">$299</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Support Banner */}
        <div className="mt-16">
          <div className="card bg-primary text-primary-content">
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-2xl mb-4">🔧 Expert Tech Support</h2>
              <p className="text-lg mb-6">
                Get free technical support and setup assistance with every purchase. Our experts are here to help!
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-secondary">Contact Support</button>
                <button className="btn btn-outline btn-secondary">Live Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}