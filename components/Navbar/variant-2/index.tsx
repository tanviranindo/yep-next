// Beauty Navbar - Search-focused & Elegant

export default function BeautyNavbar() {
  return (
    <>
      {/* Promotional Top Bar */}
      <div className="bg-primary text-primary-content text-center py-2 text-sm">
        Free shipping on orders over $75 | Shop now and save!
      </div>
      
      {/* Main Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Skincare</a></li>
              <li><a>Makeup</a></li>
              <li><a>Fragrance</a></li>
              <li><a>Hair Care</a></li>
              <li><a className="text-red-500 font-bold">Sale</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold tracking-wide text-primary">GLAMOUR</a>
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="navbar-end">
          <div className="hidden lg:flex items-center space-x-6 mr-4">
            <a className="hover:text-primary cursor-pointer">Skincare</a>
            <a className="hover:text-primary cursor-pointer">Makeup</a>
            <a className="hover:text-primary cursor-pointer">Fragrance</a>
            <a className="hover:text-primary cursor-pointer">Hair Care</a>
            <a className="text-red-500 hover:text-red-600 font-bold cursor-pointer">Sale</a>
          </div>
          <button className="btn btn-primary">Beauty Box</button>
        </div>
      </div>
    </>
  )
}