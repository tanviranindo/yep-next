// Dark fashion footer with multiple columns
export default function FooterVariant1() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2 space-y-2 text-sm">
            <div className="text-lg font-bold tracking-wider">FASHION.</div>
            <p>Branded fashion & lifestyle store.</p>
            <p>Address: 123 Fashion Street, NY</p>
            <p>Call us: +1 800 123 4567</p>
          </div>
          <div>
            <h6 className="footer-title opacity-80">Follow us</h6>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Twitter</a>
          </div>
          <div>
            <h6 className="footer-title opacity-80">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </div>
          <div>
            <h6 className="footer-title opacity-80">Support</h6>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Returns</a>
          </div>
          <div>
            <h6 className="footer-title opacity-80">Pages</h6>
            <a className="link link-hover">My Account</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Wishlist</a>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300/30">
        <div className="w-full px-6 py-4 text-center text-xs opacity-80">
          © 2024 FASHION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
