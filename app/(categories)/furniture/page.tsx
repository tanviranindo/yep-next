'use client'

import { useEffect } from 'react'

export default function FurniturePage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'furniture')
  }, [])

  return (
    <div className="min-h-screen" data-theme="furniture">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg border-b">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold text-amber-800">YEP FURNITURE</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-amber-800 hover:bg-amber-50">LIVING ROOM</a></li>
            <li><a className="text-amber-800 hover:bg-amber-50">BEDROOM</a></li>
            <li><a className="text-amber-800 hover:bg-amber-50">KITCHEN</a></li>
            <li><a className="text-amber-800 hover:bg-amber-50">OFFICE</a></li>
            <li><a className="text-red-600 hover:text-red-700 font-bold">CLEARANCE</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-amber-700 hover:bg-amber-800 text-white border-amber-700">Browse Catalog</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-amber-800">🪑 Furniture</h1>
            <p className="mb-5 text-amber-700">
              Transform your home with our premium furniture collection. Quality craftsmanship meets modern design.
            </p>
            <button className="btn bg-amber-700 hover:bg-amber-800 text-white border-amber-700">Explore Collection</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-amber-800">Featured Categories</h2>
          <p className="text-lg text-amber-700">Discover furniture that combines style, comfort, and functionality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample product cards */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-200"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-amber-800">Modern Sofa Set</h2>
              <p className="text-amber-700">Comfortable 3-piece sofa set in premium fabric</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-amber-800">$899</span>
                <button className="btn bg-amber-700 hover:bg-amber-800 text-white border-amber-700">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-yellow-200"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-amber-800">Oak Dining Table</h2>
              <p className="text-amber-700">Handcrafted solid oak dining table for 6</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-amber-800">$1,299</span>
                <button className="btn bg-amber-700 hover:bg-amber-800 text-white border-amber-700">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-yellow-200 to-amber-200"></div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-amber-800">Storage Cabinet</h2>
              <p className="text-amber-700">Multi-purpose cabinet with elegant design</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-amber-800">$449</span>
                <button className="btn bg-amber-700 hover:bg-amber-800 text-white border-amber-700">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Materials Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-amber-800">Premium Materials</h2>
            <p className="text-lg text-amber-700">We use only the finest materials for lasting quality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-bold text-amber-800">Solid Wood</h3>
              <p className="text-amber-700">Premium oak, walnut, and maple</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">🔩</div>
              <h3 className="font-bold text-amber-800">Metal Hardware</h3>
              <p className="text-amber-700">Durable stainless steel fittings</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="font-bold text-amber-800">Comfort Foam</h3>
              <p className="text-amber-700">High-density comfort padding</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-bold text-amber-800">Eco-Friendly</h3>
              <p className="text-amber-700">Sustainable and certified materials</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card bg-amber-700 text-white">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl mb-4">Visit Our Showroom</h2>
              <p className="mb-6">Experience our furniture in person. Book a free consultation today!</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline text-white border-white hover:bg-white hover:text-amber-700">Book Consultation</button>
                <button className="btn bg-white text-amber-700 hover:bg-amber-50">Download Catalog</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}