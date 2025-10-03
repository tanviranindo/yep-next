import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Yep Next
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero min-h-[calc(100vh-4rem)]">
        <div className="hero-content text-center">
          <div className="w-full">
            <h1 className="text-5xl font-bold">Landing Page</h1>
            <p className="py-6">
              This is the landing page of your Next.js application with DaisyUI.
            </p>
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
