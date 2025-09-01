'use client'

import { useEffect } from 'react'

export default function FashionPage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'fashion')
  }, [])

  return (
    <div className="min-h-screen" data-theme="fashion">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold text-primary">FASHION.</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-base-content hover:text-primary">NEW</a></li>
            <li><a className="text-base-content hover:text-primary">WOMEN</a></li>
            <li><a className="text-base-content hover:text-primary">MEN</a></li>
            <li><a className="text-base-content hover:text-primary">ACCESSORIES</a></li>
            <li><a className="text-red-500 hover:text-red-600 font-bold">SALE</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">👗 Fashion</h1>
            <p className="mb-5">
              Discover the latest trends in fashion. Premium quality, sustainable materials, and timeless designs.
            </p>
            <button className="btn btn-primary">Shop Collection</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Collections</h2>
          <p className="text-lg opacity-70">Curated fashion pieces for the modern lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample product cards */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Summer Dress</h2>
              <p className="opacity-70">Elegant summer dress for any occasion</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-primary">$129</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-secondary to-accent"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Classic Blazer</h2>
              <p className="opacity-70">Timeless blazer for professional looks</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-primary">$199</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-accent to-primary"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Designer Handbag</h2>
              <p className="opacity-70">Luxury handbag with premium materials</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-primary">$299</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl mb-4">Join Our Fashion Newsletter</h2>
              <p className="mb-6">Get exclusive access to new collections and special offers</p>
              <div className="card-actions justify-center">
                <div className="join">
                  <input className="input join-item" placeholder="Enter your email"/>
                  <button className="btn btn-secondary join-item">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}