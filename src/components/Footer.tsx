import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-margin-desktop py-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/">
            <img src={logo} alt="Pop Ideas" className="h-12 w-auto" />
          </Link>
          <p className="text-xs text-on-surface-variant">© 2026 Pop Ideas. Modern Craftsmanship for Custom Merch.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {["Privacy Policy", "Terms of Service", "Shipping Info", "FAQs"].map((item) => (
            <a key={item} href="#" className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href="https://wa.me/19198641322"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary/10 hover:text-primary cursor-pointer transition-all text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </a>
          <a
            href="mailto:contact@popideasnc.com"
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary/10 hover:text-primary cursor-pointer transition-all text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[20px]">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
