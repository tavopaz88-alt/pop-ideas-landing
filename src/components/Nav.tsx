import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/catalog" },
  { label: "Services", to: "/#servicios" },
  { label: "How it Works", to: "/#proceso" },
  { label: "Contact", to: "/quote" },
];

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => to === "/" ? location.pathname === "/" : location.pathname.startsWith(to.replace("/#", "/"));

  return (
    <>
      <header className="bg-surface-bright sticky top-0 z-50 border-b border-outline-variant shadow-sm">
        <div className="flex justify-between items-center w-full px-4 md:px-margin-desktop py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <button
                className="p-2 -ml-2 text-primary md:hidden"
                onClick={() => setDrawerOpen(true)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              <Link to="/">
                <img src={logo} alt="Pop Ideas" className="h-12 w-auto" />
              </Link>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                    isActive(to)
                      ? "text-primary border-b-2 border-primary font-bold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/19198641322"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-on-secondary-container bg-secondary-container px-4 rounded-lg flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="hidden sm:inline font-bold text-xs" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                WhatsApp
              </span>
            </a>
            <Link
              to="/quote"
              className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-transform duration-300 md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
        <div className="relative w-4/5 max-w-xs h-full bg-surface-container-lowest shadow-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="Pop Ideas" className="h-10 w-auto" />
            <button className="p-2 text-on-surface-variant" onClick={() => setDrawerOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-4 text-lg font-medium ${
                  isActive(to) ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <Link
              to="/quote"
              onClick={() => setDrawerOpen(false)}
              className="block w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
