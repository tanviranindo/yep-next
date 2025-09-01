'use client'

import { useEffect } from 'react'

export default function KidsMomPage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'kids-mom')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50" data-theme="kids-mom">
      {/* Navbar */}
      <div className="navbar bg-gradient-to-r from-pink-100 to-purple-100 shadow-lg border-b border-pink-200">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            YEP KIDS & MOM
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-pink-600 hover:bg-pink-50 rounded-lg">👶 BABY</a></li>
            <li><a className="text-blue-600 hover:bg-blue-50 rounded-lg">🧒 KIDS</a></li>
            <li><a className="text-purple-600 hover:bg-purple-50 rounded-lg">👩 MOM</a></li>
            <li><a className="text-green-600 hover:bg-green-50 rounded-lg">🎁 GIFTS</a></li>
            <li><a className="text-red-600 hover:bg-red-50 rounded-lg font-bold">🔥 SALE</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
            Shop Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                👨‍👩‍👧‍👦 Kids & Mom
              </span>
            </h1>
            <p className="mb-5 text-lg text-purple-700">
              Everything for the whole family! From baby essentials to mom's self-care, we've got you covered with love.
            </p>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
              Explore Family Essentials
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Family Favorites
          </h2>
          <p className="text-lg text-purple-700">Carefully curated products for every member of your family</p>
        </div>

        {/* Category Tabs */}
        <div className="tabs tabs-boxed justify-center mb-8 bg-white/50">
          <a className="tab tab-active bg-pink-200 text-pink-700">👶 Baby</a> 
          <a className="tab hover:bg-blue-100 text-blue-700">🧒 Kids</a> 
          <a className="tab hover:bg-purple-100 text-purple-700">👩 Mom</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample product cards */}
          <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow border border-pink-100">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                <span className="text-6xl">🍼</span>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-pink-600">Baby Care Bundle</h2>
              <p className="text-pink-700">Complete care set for your little one</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-pink-600">$49</span>
                <button className="btn bg-pink-500 hover:bg-pink-600 text-white border-0">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow border border-blue-100">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <span className="text-6xl">🧸</span>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-600">Educational Toys</h2>
              <p className="text-blue-700">Fun learning toys for growing minds</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-blue-600">$29</span>
                <button className="btn bg-blue-500 hover:bg-blue-600 text-white border-0">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow border border-purple-100">
            <figure>
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                <span className="text-6xl">💆‍♀️</span>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-600">Mom's Self-Care Kit</h2>
              <p className="text-purple-700">Pamper yourself with this relaxing set</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold text-purple-600">$69</span>
                <button className="btn bg-purple-500 hover:bg-purple-600 text-white border-0">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Age Groups Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Shop by Age
            </h2>
            <p className="text-lg text-purple-700">Find the perfect products for every stage of development</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-white/70 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="font-bold text-pink-600">0-12 months</h3>
              <p className="text-pink-700 text-sm">Newborn essentials</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧒</div>
              <h3 className="font-bold text-blue-600">1-3 years</h3>
              <p className="text-blue-700 text-sm">Toddler favorites</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👦</div>
              <h3 className="font-bold text-green-600">4-8 years</h3>
              <p className="text-green-700 text-sm">Growing kids</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👩</div>
              <h3 className="font-bold text-purple-600">Mom Care</h3>
              <p className="text-purple-700 text-sm">Self-care & wellness</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card bg-gradient-to-r from-pink-400 to-purple-400 text-white">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl mb-4">Join Our Family Community! 👨‍👩‍👧‍👦</h2>
              <p className="mb-6">Get parenting tips, product updates, and exclusive family deals</p>
              <div className="card-actions justify-center gap-4">
                <div className="join">
                  <input className="input join-item text-purple-700" placeholder="Enter your email"/>
                  <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 join-item">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-purple-600">
                  📱 Download App
                </button>
                <button className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-purple-600">
                  💬 Chat Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}