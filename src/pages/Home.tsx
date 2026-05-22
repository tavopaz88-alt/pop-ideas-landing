import { Link } from "react-router-dom";
import tazaMockup from "../assets/taza-mockup.jpeg";
import caballeroVest from "../assets/caballero-vest.jpeg";
import { useLang } from "../contexts/LanguageContext";
import { tr } from "../i18n/translations";

const POLO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAjJEWglZFLTbKWRqRkr_fajlGPQlhsNSQZPda-pMUAD-KcUEHL3GBhAxT5mDfjoiiwEGlYWnIXuDL56Xxxowijlxt3NE5h9iyVKVfftDaGMIAuIdQXN4C458fD3AVxapXseE92QwWTMsfXXY_lLVkrgLTyxLQ7vSHLb3AcYHd5pQV707NFGDtkoyVqdZa_m3OUjJnVE_UlyPuuyGwHZcO9Fl27YNvOHq2QQTTJn72gu7w7HkB1VnQV1ze-NTZm1z4JjEPdMzrXDV9X";
const DTF_IMG = "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?auto=format&fit=crop&w=800&q=80";
const VINYL_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80";
const DIGITAL_IMG = "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=800&q=80";
const TSHIRT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDU1BrBFocH4RnfAa0N2fFXtHtV6EVI8okv959xoCjLzb7YD7MxX2d6VFRVKkFHenqZVmXJRlUTEV8cNlj8RNTadiUixJ56cXl1PXYabWA-GJL4QbRuErnieZG95qtRAao-7YToXZChfCjrqgJ90CueNDVt7Tfsuqi0TOdMEfc0PMH9g34mpYftcfUkwO7voljw0Z4fcpmiuJqyaulkLIhd-IlDY6pY26yx3mzwrS50hKlp2IMXRiyyMEwje_5QIFI5OT41XTsPY0qQ";
const UNIFORME_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDVBB8-uwI095fCROQA_Q3Svyt_5hPW3DRai3__orwTju4QEeIwpsaEW6-t8vu02IYNobWyF3Nmn_BgLTjDWWxXaZiTCijvb8n2HbsHQvsPyTgvunob7hTTk_wutfy9pIrY73Ymm6_WAFIjj0cf2hfcicd0wGcuNTFBslL8v3EpiAegE0uzWha7ZlF0f-fyShf-wOHo5Cwdt1JoeRUpRbxaSp3ETDrtE3baVO3iB7yM-SbxD8lE6SDYIP1iTdaDLLQbWqJHYB0U7YJz";
const TERMO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCEBO-lp67VOYs_LLI8wwdZltPKXQ773PKYPFVHKXUx8cbSkbLY19CiyV8oy24NE_IAc9KPgA--hJzvqoa_JqjoJYzYN98udpovZChTHBLrn868alAfC00pcf5fWBW6rS-jITzS519QblGJS71YEp1fC8AEog7LO6KLiN_wwSOnUY44pnzZtNuTT0-KyH1wJO4qnJ0_LuClXBdSWbiOC0eq3JsrXnIs2eKv32rcpleboXkO_w0g9DMcZnYpTZzeI0UsEf0fVVU-oJmJ";

export default function Home() {
  const { lang } = useLang();
  const t = tr[lang].home;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-container-lowest py-16 md:py-24">
        {/* Brand color blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "#9e3c5a" }} />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "#d7ef46" }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "#ffb1c3" }} />

        <div className="relative z-10 w-full px-4 md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full w-fit">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t.heroBadge}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              {t.heroTitle} <span className="text-primary">{t.heroHighlight}</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/quote" className="bg-primary text-on-primary text-sm font-bold px-8 py-4 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all">
                {t.heroCta}
              </Link>
              <Link to="/catalog" className="bg-surface-container border border-outline-variant text-on-surface text-sm font-bold px-8 py-4 rounded-lg hover:bg-surface-container-high transition-all">
                {t.heroCta2}
              </Link>
            </div>
          </div>

          {/* Product showcase */}
          <div className="relative flex items-center justify-center">
            {/* Main product image */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <img src={tazaMockup} alt="Pop Ideas — Tazas personalizadas" className="w-full object-cover" />
              </div>
              {/* Floating badge top-left */}
              <div className="absolute -top-4 -left-4 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl shadow-lg -rotate-3 font-bold text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t.heroBadgePremium}
              </div>
              {/* Floating badge bottom-right */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary px-4 py-2 rounded-xl shadow-lg rotate-2 text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {t.heroBadgeDelivery}
              </div>
            </div>

            {/* Side mini card */}
            <div className="absolute -right-4 top-1/4 hidden lg:flex flex-col gap-2 bg-white rounded-2xl shadow-xl p-4 border border-outline-variant w-36 -rotate-1">
              <img src={caballeroVest} alt="Uniformes" className="w-full rounded-lg object-contain h-20 bg-surface-container-low" />
              <p className="text-xs font-bold text-on-surface text-center">Uniformes Corp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto flex flex-col items-center gap-6">
          <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">{t.clientsLabel}</p>
          <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-[28px]">local_shipping</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{t.clientsBadge}</p>
              <p className="text-xl font-extrabold text-on-surface" style={{ fontFamily: "Epilogue, sans-serif" }}>Transportes Caballero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background" id="productos">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold">{t.productsTitle}</h2>
              <p className="text-on-surface-variant">{t.productsSubtitle}</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full text-xs font-bold">{t.productsBadge1}</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold">{t.productsBadge2}</span>
            </div>
          </div>

          {/* Row 1: 3 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { img: POLO_IMG, category: t.cat_textile, name: t.prod_polo },
              { img: TSHIRT_IMG, category: t.cat_casual, name: t.prod_tshirt },
              { img: caballeroVest, category: t.cat_corporate, name: t.prod_corporate },
            ].map(({ img, category, name }) => (
              <Link to="/catalog" key={name} className="group flex flex-col bg-surface-container-lowest rounded-xl pop-shadow border border-outline-variant overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} alt={name} />
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase">{category}</span>
                    <h3 className="text-lg font-bold">{name}</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2: 3 medium cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { img: TSHIRT_IMG, category: t.cat_textile, name: t.prod_longsleeve },
              { img: UNIFORME_IMG, category: t.cat_sport, name: t.prod_sport },
              { img: TERMO_IMG, category: t.cat_accessories, name: t.prod_thermos },
            ].map(({ img, category, name }) => (
              <Link to="/catalog" key={name} className="group flex flex-col bg-surface-container-lowest rounded-xl pop-shadow border border-outline-variant overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} alt={name} />
                </div>
                <div className="p-5 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase">{category}</span>
                    <h3 className="text-lg font-bold">{name}</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 3: 3 small cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {[
              { img: tazaMockup, icon: "coffee", name: t.prod_mugs },
              { img: tazaMockup, icon: "local_drink", name: t.prod_cups },
              { img: null, icon: "child_hat", name: t.prod_caps },
            ].map(({ img, icon, name }) => (
              <Link to="/catalog" key={name} className="group flex flex-col bg-surface-container-lowest rounded-xl pop-shadow border border-outline-variant overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-square bg-surface-container overflow-hidden flex items-center justify-center">
                  {img
                    ? <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    : <span className="material-symbols-outlined text-primary text-[48px]">{icon}</span>
                  }
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-bold">{name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
              {t.productsCta} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-surface-container-low overflow-hidden" id="servicios">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">{t.servicesTitle}</h2>
            <p className="text-on-surface-variant">{t.servicesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: DTF_IMG,
                icon: "print",
                iconBg: "bg-primary",
                badge: t.servicesBadge,
                badgeCls: "bg-primary-container text-on-primary-container",
                title: t.dtfTitle,
                desc: t.dtfDesc,
              },
              {
                img: VINYL_IMG,
                icon: "layers",
                iconBg: "bg-secondary",
                badge: null as null,
                badgeCls: "",
                title: t.vinylTitle,
                desc: t.vinylDesc,
              },
              {
                img: DIGITAL_IMG,
                icon: "palette",
                iconBg: "bg-primary",
                badge: null as null,
                badgeCls: "",
                title: t.digitalTitle,
                desc: t.digitalDesc,
              },
            ].map(({ img, icon, iconBg, badge, badgeCls, title, desc }) => (
              <div key={title} className="group rounded-2xl overflow-hidden border border-outline-variant shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative aspect-video overflow-hidden bg-surface-container">
                  <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {badge && (
                    <span className={`absolute top-4 left-4 ${badgeCls} px-3 py-1 rounded-full text-xs font-bold shadow`}>{badge}</span>
                  )}
                  <div className={`absolute bottom-4 left-4 w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="material-symbols-outlined text-white text-[20px]">{icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-sm text-on-surface-variant">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background" id="proceso">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-4xl font-bold">{t.processTitle}</h2>
            <p className="text-on-surface-variant">{t.processSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: "forum",
                iconBg: "bg-primary",
                iconColor: "text-on-primary",
                title: t.proc_channels_title,
                details: t.proc_channels_items,
              },
              {
                icon: "schedule",
                iconBg: "bg-secondary",
                iconColor: "text-on-secondary",
                title: t.proc_delivery_title,
                details: t.proc_delivery_items,
              },
              {
                icon: "inventory_2",
                iconBg: "bg-primary",
                iconColor: "text-on-primary",
                title: t.proc_minimum_title,
                details: t.proc_minimum_items,
              },
              {
                icon: "payments",
                iconBg: "bg-secondary",
                iconColor: "text-on-secondary",
                title: t.proc_payment_title,
                details: t.proc_payment_items,
              },
              {
                icon: "local_shipping",
                iconBg: "bg-primary",
                iconColor: "text-on-primary",
                title: t.proc_shipping_title,
                details: t.proc_shipping_items,
              },
            ].map(({ icon, iconBg, iconColor, title, details }) => (
              <div key={title} className="flex flex-col gap-4 p-6 rounded-2xl border border-outline-variant bg-surface-container-lowest hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center shadow-md shrink-0`}>
                  <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2 text-on-surface">{title}</h3>
                  <ul className="space-y-1">
                    {details.map(d => (
                      <li key={d} className="text-xs text-on-surface-variant flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary inline-block shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-margin-desktop py-20 max-w-7xl mx-auto" id="contacto">
        <div className="bg-inverse-surface rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center gap-6 text-inverse-on-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          <h2 className="text-5xl font-extrabold relative z-10">
            {t.ctaTitle} <span className="text-primary-fixed">{t.ctaHighlight}</span>
          </h2>
          <p className="text-lg text-surface-variant max-w-xl relative z-10">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10 mt-4">
            <Link to="/quote" className="bg-primary text-on-primary text-sm font-bold px-10 py-4 rounded-lg shadow-xl hover:scale-105 transition-transform">
              {t.ctaBtn}
            </Link>
            <a href="tel:+19198641322" className="flex items-center gap-2 text-sm font-bold px-10 py-4 border border-outline text-inverse-on-surface rounded-lg hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">call</span>
              +1 919 864-1322
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
