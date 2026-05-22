import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

type NavItem = { label: string; to: string; sectionId?: string };

const links: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/catalog" },
  { label: "Services", to: "/#servicios", sectionId: "servicios" },
  { label: "How it Works", to: "/#proceso", sectionId: "proceso" },
  { label: "Contact", to: "/quote" },
];

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (item: NavItem) =>
    item.sectionId ? false : item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);

  const handleHashNav = (e: React.MouseEvent, sectionId: string, closeDrawer?: () => void) => {
    e.preventDefault();
    closeDrawer?.();
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

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
              {links.map((item) => {
                const cls = `text-sm font-medium transition-colors duration-200 pb-1 ${
                  isActive(item)
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`;
                return item.sectionId ? (
                  <a key={item.to} href={item.to} className={cls} onClick={(e) => handleHashNav(e, item.sectionId!)}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.to} to={item.to} className={cls}>{item.label}</Link>
                );
              })}
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
            {links.map((item) => {
              const cls = `flex items-center gap-4 text-lg font-medium ${
                isActive(item) ? "text-primary font-bold" : "text-on-surface-variant"
              }`;
              return item.sectionId ? (
                <a key={item.to} href={item.to} className={cls} onClick={(e) => handleHashNav(e, item.sectionId!, () => setDrawerOpen(false))}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.to} to={item.to} className={cls} onClick={() => setDrawerOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
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
