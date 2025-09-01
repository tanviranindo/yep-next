import Link from 'next/link'

export default function NavbarVariant2() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/landing" className="text-base-content">Landing</Link></li>
            <li><Link href="/products" className="text-base-content">Products</Link></li>
            <li><Link href="/faq" className="text-base-content">FAQ</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Yep Next
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/landing">Landing</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost">Login</button>
      </div>
    </div>
  )
}