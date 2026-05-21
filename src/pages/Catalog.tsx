import { useState } from "react";
import { Link } from "react-router-dom";
import tazaMockup from "../assets/taza-mockup.jpeg";
import caballeroVest from "../assets/caballero-vest.jpeg";

const POLO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBAY6ZIvsdgTrmqbCkJ6aPYPxOXT_gcarpQ6lFTOCOqgcTFvkiifLctZs9cWPVLs9rb0Hp16YyUW3_2-HoDZGRY4wZuzOgWYIhQXrSNNczJgfY8EQjam7uXv1U28C1AZ2Up1zwpsPF8hQ7tDnwpsXK6PMW-x6aH-VIeJJzWFb3NreWLI4zMc2J3o_8iQHGxlJq7Jb8UN9TSMlSbJsOUgiUoYikZW-kqbOsEgPxioJzkYCWZ5Dv1NwJfKUqhcu9pWvt5aghKNu4HSTcn";
const TSHIRT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDU1BrBFocH4RnfAa0N2fFXtHtV6EVI8okv959xoCjLzb7YD7MxX2d6VFRVKkFHenqZVmXJRlUTEV8cNlj8RNTadiUixJ56cXl1PXYabWA-GJL4QbRuErnieZG95qtRAao-7YToXZChfCjrqgJ90CueNDVt7Tfsuqi0TOdMEfc0PMH9g34mpYftcfUkwO7voljw0Z4fcpmiuJqyaulkLIhd-IlDY6pY26yx3mzwrS50hKlp2IMXRiyyMEwje_5QIFI5OT41XTsPY0qQ";
const UNIFORME_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDVBB8-uwI095fCROQA_Q3Svyt_5hPW3DRai3__orwTju4QEeIwpsaEW6-t8vu02IYNobWyF3Nmn_BgLTjDWWxXaZiTCijvb8n2HbsHQvsPyTgvunob7hTTk_wutfy9pIrY73Ymm6_WAFIjj0cf2hfcicd0wGcuNTFBslL8v3EpiAegE0uzWha7ZlF0f-fyShf-wOHo5Cwdt1JoeRUpRbxaSp3ETDrtE3baVO3iB7yM-SbxD8lE6SDYIP1iTdaDLLQbWqJHYB0U7YJz";
const TERMO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCEBO-lp67VOYs_LLI8wwdZltPKXQ773PKYPFVHKXUx8cbSkbLY19CiyV8oy24NE_IAc9KPgA--hJzvqoa_JqjoJYzYN98udpovZChTHBLrn868alAfC00pcf5fWBW6rS-jITzS519QblGJS71YEp1fC8AEog7LO6KLiN_wwSOnUY44pnzZtNuTT0-KyH1wJO4qnJ0_LuClXBdSWbiOC0eq3JsrXnIs2eKv32rcpleboXkO_w0g9DMcZnYpTZzeI0UsEf0fVVU-oJmJ";
const HERO_MERCH_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBObNiMbqRk9PlFlX7EPzxqXypBHduHgME1kCNqUU0iE2mkBIm3v6tIy1GN8Y2WWbRgSv2JBYvxwlXsCgC4NA4yJFPFhsK-ItbMFYyd65kOu67MKm5-dAd3K5WWuyZe-lEWklNocibyUq6Ym3_rPoUYSTkmt6TLmDtf-AJK84GsrYqLNsOMec6S-_ghXyTq4o0b2SleJ9PDQN4Ig5rfQqHg09sH79W49jAHfhlTlPnQbX2GRwtOMb-vkkEeNMuwvzGduqsXuhvstWp_";

const categories = ["Todos", "Ropa", "Accesorios", "Tazas/Termos"];

const products = [
  { id: 1, name: "Camisas Tipo Polo", category: "Ropa", badge: "Best Seller", badgeColor: "bg-primary-container text-on-primary-container", img: POLO_IMG, desc: "Disponibles en múltiples colores con bordado o DTF de alta precisión. Ideales para uniformes ejecutivos.", featured: true },
  { id: 2, name: "Uniformes Corporativos", category: "Ropa", badge: "Destacado", badgeColor: "bg-secondary-container text-on-secondary-container", img: caballeroVest, desc: "Uniformes completos personalizados para tu empresa, desde chalecos hasta trajes corporativos.", featured: true, reverse: true },
  { id: 3, name: "T-shirts / Playeras", category: "Ropa", img: TSHIRT_IMG, desc: "100% algodón con impresión digital o vinil textil. Perfectas para eventos y promociones.", featured: false },
  { id: 4, name: "Camisas Manga Larga", category: "Ropa", img: TSHIRT_IMG, desc: "Tela de alta calidad para clima frío. Personalización en pecho, manga y espalda.", featured: false },
  { id: 5, name: "Uniformes Deportivos", category: "Ropa", img: UNIFORME_IMG, desc: "Tela deportiva transpirable con sublimación full-print. Para equipos y academias.", featured: false },
  { id: 6, name: "Termos", category: "Tazas/Termos", price: "Desde $25", img: TERMO_IMG, desc: "Acero quirúrgico con doble pared de vacío. Mantiene temperatura 24h.", featured: false },
  { id: 7, name: "Tazas Personalizadas", category: "Tazas/Termos", price: "Desde $12", img: tazaMockup, desc: "Cerámica de alta densidad con tu logo. Acabado brillante, apta para microondas.", featured: false },
  { id: 8, name: "Vasos", category: "Tazas/Termos", price: "Desde $10", img: tazaMockup, desc: "Vasos personalizados para eventos, ferias y regalos corporativos.", featured: false },
  { id: 9, name: "Gorras", category: "Accesorios", img: null, icon: "child_hat", desc: "Gorras estructuradas y no estructuradas con bordado 3D o impresión frontal.", featured: false },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [quoteCount, setQuoteCount] = useState(0);
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const filtered = activeCategory === "Todos" ? products : products.filter(p => p.category === activeCategory);

  const handleAdd = (id: number) => {
    if (addedIds.includes(id)) return;
    setAddedIds(prev => [...prev, id]);
    setQuoteCount(prev => prev + 1);
    setTimeout(() => setAddedIds(prev => prev.filter(i => i !== id)), 2500);
  };

  return (
    <main className="pt-0">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-margin-desktop py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-bold text-xs" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            NUEVA COLECCIÓN 2024
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface leading-tight">
            Merchandising con <span className="text-primary italic">Carácter</span>
          </h1>
          <p className="text-lg text-on-surface-variant">
            Elevamos la identidad de tu marca con productos personalizados de alta calidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/quote" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-shadow">
              Solicitar Cotización
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src={HERO_MERCH_IMG} alt="Premium merchandise" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-secondary-container text-on-secondary-container p-6 rounded-xl shadow-lg -rotate-2">
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Best Seller</p>
            <p className="text-xl font-bold" style={{ fontFamily: "Epilogue, sans-serif" }}>Termo Phoenix Gold</p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="max-w-7xl mx-auto px-4 md:px-margin-desktop py-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-on-surface">Nuestro Catálogo</h2>
            <p className="text-on-surface-variant">Filtrar por las categorías más populares de Pop Ideas</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary font-bold shadow-md"
                    : "bg-surface-container text-on-surface-variant hover:bg-outline-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {filtered.map(product => {
            const isAdded = addedIds.includes(product.id);
            if (product.featured) {
              return (
                <div key={product.id} className={`md:col-span-8 group relative bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex ${product.reverse ? "flex-col-reverse md:flex-row" : "flex-col md:flex-row"} h-full`}>
                  <div className={`${product.reverse ? "md:w-1/2 order-last md:order-last" : "md:w-1/2"} overflow-hidden`}>
                    <img src={product.img ?? ""} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className={`${product.reverse ? "md:w-1/2 order-first md:order-first" : "md:w-1/2"} p-8 flex flex-col justify-between`}>
                    <div>
                      {product.badge && (
                        <span className={`inline-block px-3 py-1 ${product.badgeColor} rounded-full text-xs font-bold mb-4`} style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {product.badge}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-on-surface mb-3">{product.name}</h3>
                      <p className="text-on-surface-variant mb-6">{product.desc}</p>
                    </div>
                    <button
                      onClick={() => handleAdd(product.id)}
                      className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                        isAdded ? "bg-secondary text-on-secondary" : "bg-primary text-on-primary hover:opacity-90"
                      }`}
                    >
                      <span className="material-symbols-outlined">{isAdded ? "check_circle" : "add_shopping_cart"}</span>
                      {isAdded ? "¡Agregado!" : "Agregar a Cotización"}
                    </button>
                  </div>
                </div>
              );
            }
            return (
              <div key={product.id} className="md:col-span-4 group relative bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden bg-surface-container flex items-center justify-center">
                  {product.img
                    ? <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    : <span className="material-symbols-outlined text-primary text-[64px]">{(product as any).icon}</span>
                  }
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface">{product.name}</h3>
                    {product.price && <span className="text-primary font-extrabold">{product.price}</span>}
                  </div>
                  <p className="text-on-surface-variant text-sm">{product.desc}</p>
                  <button
                    onClick={() => handleAdd(product.id)}
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      isAdded ? "bg-secondary text-on-secondary border-2 border-secondary" : "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
                    }`}
                  >
                    {isAdded ? "¡Agregado!" : "Agregar a Cotización"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote FAB */}
      {quoteCount > 0 && (
        <div className="fixed bottom-8 right-8 z-40 group">
          <div className="absolute -top-10 right-0 bg-inverse-surface text-inverse-on-surface px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-xs font-bold">
            {quoteCount} producto{quoteCount !== 1 ? "s" : ""} en tu lista
          </div>
          <Link to="/quote" className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[32px]">description</span>
          </Link>
        </div>
      )}
    </main>
  );
}
