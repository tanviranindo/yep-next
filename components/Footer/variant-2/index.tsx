import Link from 'next/link'

export default function FooterVariant2() {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <aside>
        <p className="font-bold text-lg">Yep Next</p>
        <p>A simple Next.js boilerplate<br/>with DaisyUI and app routing</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/products" className="link link-hover">Products</Link>
        <Link href="/landing" className="link link-hover">Landing</Link>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/" className="link link-hover">About us</Link>
        <Link href="/faq" className="link link-hover">FAQ</Link>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  )
}