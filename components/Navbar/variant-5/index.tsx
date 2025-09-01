// Kids & Mom variant - Family-friendly design
export default function NavbarVariant5() {
  return (
    <div className="navbar bg-gradient-to-r from-pink-50 to-blue-50 shadow-sm border-b border-pink-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="text-pink-600">👶 Baby Care</a></li>
            <li><a className="text-blue-600">🧸 Kids Toys</a></li>
            <li><a className="text-purple-600">👕 Kids Clothing</a></li>
            <li><a className="text-green-600">🤱 Maternity</a></li>
            <li><a className="text-orange-600">💆‍♀️ Mom Care</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          YEP Kids & Mom
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <details>
              <summary className="text-pink-600 hover:bg-pink-50 rounded-lg">👶 Baby</summary>
              <ul className="p-2 bg-base-100 shadow-lg rounded-box w-48">
                <li><a className="hover:bg-pink-50">🍼 Feeding</a></li>
                <li><a className="hover:bg-pink-50">🛁 Bath Time</a></li>
                <li><a className="hover:bg-pink-50">👕 Clothing</a></li>
                <li><a className="hover:bg-pink-50">🛏️ Sleep</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-blue-600 hover:bg-blue-50 rounded-lg">🧒 Kids</summary>
              <ul className="p-2 bg-base-100 shadow-lg rounded-box w-48">
                <li><a className="hover:bg-blue-50">🧸 Toys</a></li>
                <li><a className="hover:bg-blue-50">👕 Clothing</a></li>
                <li><a className="hover:bg-blue-50">📚 Education</a></li>
                <li><a className="hover:bg-blue-50">🏃 Sports</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-purple-600 hover:bg-purple-50 rounded-lg">👩 Mom</summary>
              <ul className="p-2 bg-base-100 shadow-lg rounded-box w-48">
                <li><a className="hover:bg-purple-50">🤱 Maternity</a></li>
                <li><a className="hover:bg-purple-50">💆‍♀️ Self Care</a></li>
                <li><a className="hover:bg-purple-50">🏃‍♀️ Fitness</a></li>
                <li><a className="hover:bg-purple-50">👗 Fashion</a></li>
              </ul>
            </details>
          </li>
          <li><a className="text-green-600 hover:bg-green-50 rounded-lg">✨ New Arrivals</a></li>
          <li><a className="text-red-600 hover:bg-red-50 rounded-lg">🔥 Sale</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="form-control hidden sm:block">
          <input type="text" placeholder="Search for family essentials..." className="input input-bordered input-sm w-40 lg:w-64 border-pink-200 focus:border-pink-400 rounded-full" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-pink-50">
            <div className="indicator">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M6 13v0M14 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="badge badge-sm indicator-item bg-pink-500 text-white">3</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">3 Items</span>
              <span className="text-pink-600">Subtotal: $85</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-pink-50">
            <div className="w-10 rounded-full border-2 border-pink-200">
              <img alt="User avatar" src="https://via.placeholder.com/40x40/ec4899/ffffff?text=👩" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="hover:bg-pink-50">👤 Profile</a></li>
            <li><a className="hover:bg-pink-50">💝 Wishlist</a></li>
            <li><a className="hover:bg-pink-50">📦 Orders</a></li>
            <li><a className="hover:bg-pink-50">⚙️ Settings</a></li>
            <li><a className="hover:bg-pink-50">🚪 Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}