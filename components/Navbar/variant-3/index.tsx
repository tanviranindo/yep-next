// Gadgets Navbar - Tech-focused & Professional

export default function GadgetsNavbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>📱 Phones</a>
            </li>
            <li>
              <a>💻 Laptops</a>
            </li>
            <li>
              <a>🎧 Audio</a>
            </li>
            <li>
              <a>🎮 Gaming</a>
            </li>
            <li>
              <a className="bg-accent text-white rounded">🔥 Hot Deals</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-primary">TechZone</a>
      </div>

      <div className="navbar-center flex-1 mx-8">
        <div className="form-control w-full">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search for phones, laptops, accessories..."
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-end space-x-2">
        <button className="btn btn-ghost btn-circle">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle relative">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13L5.4 7M7 13l2.5 5M14 13v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6"
            />
          </svg>
          <div className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </button>

        <button className="btn btn-accent">Sign In</button>
      </div>
    </div>
  );
}
