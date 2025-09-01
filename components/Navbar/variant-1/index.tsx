import Link from 'next/link'

export default function NavbarVariant1() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Yep Next
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/landing">Landing</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>
    </div>
  )
}