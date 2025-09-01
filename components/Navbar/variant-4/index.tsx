// Furniture variant - Sophisticated with material focus
export default function NavbarVariant4() {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Living Room</a></li>
            <li><a>Bedroom</a></li>
            <li><a>Kitchen</a></li>
            <li><a>Office</a></li>
            <li><a>Outdoor</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-amber-800">YEP Furniture</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <details>
              <summary className="text-amber-800 hover:bg-amber-50">Categories</summary>
              <ul className="p-2 bg-base-100 shadow-lg rounded-box w-52">
                <li><a className="hover:bg-amber-50">Living Room</a></li>
                <li><a className="hover:bg-amber-50">Bedroom</a></li>
                <li><a className="hover:bg-amber-50">Kitchen</a></li>
                <li><a className="hover:bg-amber-50">Office</a></li>
                <li><a className="hover:bg-amber-50">Outdoor</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-amber-800 hover:bg-amber-50">Materials</summary>
              <ul className="p-2 bg-base-100 shadow-lg rounded-box w-40">
                <li><a className="hover:bg-amber-50">Wood</a></li>
                <li><a className="hover:bg-amber-50">Metal</a></li>
                <li><a className="hover:bg-amber-50">Glass</a></li>
                <li><a className="hover:bg-amber-50">Fabric</a></li>
              </ul>
            </details>
          </li>
          <li><a className="text-amber-800 hover:bg-amber-50">New Arrivals</a></li>
          <li><a className="text-amber-800 hover:bg-amber-50">Sale</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="form-control hidden sm:block">
          <input type="text" placeholder="Search furniture..." className="input input-bordered input-sm w-40 lg:w-64 border-amber-200 focus:border-amber-400" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M6 13v0M14 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="badge badge-sm indicator-item bg-amber-600 text-white">2</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">2 Items</span>
              <span className="text-amber-600">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block bg-amber-700 hover:bg-amber-800 border-amber-700">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User avatar" src="https://via.placeholder.com/40x40/d4af37/ffffff?text=U" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}