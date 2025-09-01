// Fashion Navbar - Minimalist & Premium

export default function FashionNavbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>NEW</a></li>
            <li><a>WOMEN</a></li>
            <li><a>MEN</a></li>
            <li><a>ACCESSORIES</a></li>
            <li><a className="text-red-500 font-bold">SALE</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold tracking-wider">FASHION.</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="hover:text-primary">NEW</a></li>
          <li><a className="hover:text-primary">WOMEN</a></li>
          <li><a className="hover:text-primary">MEN</a></li>
          <li><a className="hover:text-primary">ACCESSORIES</a></li>
          <li><a className="text-red-500 hover:text-red-600 font-bold">SALE</a></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="flex items-center space-x-2">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </button>
          
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </button>
          
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13L5.4 7M7 13l2.5 5M14 13v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6" />
              </svg>
              <span className="badge badge-sm indicator-item">3</span>
            </div>
          </button>
          
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  )
}