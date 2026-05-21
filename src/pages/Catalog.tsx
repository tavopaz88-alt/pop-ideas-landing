import { useState } from "react";
import { Link } from "react-router-dom";

const POLO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBAY6ZIvsdgTrmqbCkJ6aPYPxOXT_gcarpQ6lFTOCOqgcTFvkiifLctZs9cWPVLs9rb0Hp16YyUW3_2-HoDZGRY4wZuzOgWYIhQXrSNNczJgfY8EQjam7uXv1U28C1AZ2Up1zwpsPF8hQ7tDnwpsXK6PMW-x6aH-VIeJJzWFb3NreWLI4zMc2J3o_8iQHGxlJq7Jb8UN9TSMlSbJsOUgiUoYikZW-kqbOsEgPxioJzkYCWZ5Dv1NwJfKUqhcu9pWvt5aghKNu4HSTcn";
const TERMO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCEBO-lp67VOYs_LLI8wwdZltPKXQ773PKYPFVHKXUx8cbSkbLY19CiyV8oy24NE_IAc9KPgA--hJzvqoa_JqjoJYzYN98udpovZChTHBLrn868alAfC00pcf5fWBW6rS-jITzS519QblGJS71YEp1fC8AEog7LO6KLiN_wwSOnUY44pnzZtNuTT0-KyH1wJO4qnJ0_LuClXBdSWbiOC0eq3JsrXnIs2eKv32rcpleboXkO_w0g9DMcZnYpTZzeI0UsEf0fVVU-oJmJ";
const TAZA_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAivqexWLLYZS7xUNjof6gkrvUHQuABvTt8eE6fnu7kVrnD1LN04C6w7pXAwOx1_Cc5nlauQFEUilzX9crhQ56835qjn1vJPFe5_xyQAhk9ZR4Ae9ZNsow3CDPhlA2GtiZx6hLpCoczhYAHg1KcHNc5g_hne_EX9KdB5D3b3kzFeW61RSDkJODkJvZEMho40Ni_VvjbEPcD7-eBrlo47kg-LtzC6Vxo0au4dknzSHFSVFW0tgZm2zEDS7ACbm5eO9Pk7qDobPgq0MwJ";
const TOTE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBqXJ2yomWs7KFK9QcW_vIGziEAcq1UCqZJF6dV8KQX65cXW0bWSzCdpFMYzK2eeBS5OPC64OjYVzFRMe_72TVhLWMDpF61iwDrgX29KCyhJ-UerFgu_d_tyASTJV3sV1-f0vo9I7BoqoLc64HU3Ve74cNY48QNOpnUgOTEWd8ohMpRHh3d24RN1YNB2v-";
const HERO_MERCH_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBObNiMbqRk9PlFlX7EPzxqXypBHduHgME1kCNqUU0iE2mkBIm3v6tIy1GN8Y2WWbRgSv2JBYvxwlXsCgC4NA4yJFPFhsK-ItbMFYyd65kOu67MKm5-dAd3K5WWuyZe-lEWklNocibyUq6Ym3_rPoUYSTkmt6TLmDtf-AJK84GsrYqLNsOMec6S-_ghXyTq4o0b2SleJ9PDQN4Ig5rfQqHg09sH79W49jAHfhlTlPnQbX2GRwtOMb-vkkEeNMuwvzGduqsXuhvstWp_";

const categories = ["Todos", "Ropa", "Accesorios", "Tazas/Termos"];

const products = [
  { id: 1, name: "Polos Corporativos Premium", category: "Ropa", badge: "Destacado", badgeColor: "bg-primary-container text-on-primary-container", img: POLO_IMG, desc: "Algodón Pima 100% con bordado de alta precisión. La elección ideal para uniformes ejecutivos.", featured: true },
  { id: 2, name: "Termos de Acero", category: "Tazas/Termos", price: "Desde $25", img: TERMO_IMG, desc: "Acero quirúrgico con doble pared de vacío. Mantiene 24h frío.", featured: false },
  { id: 3, name: "Taza Personalizada", category: "Tazas/Termos", price: "Desde $12", img: TAZA_IMG, desc: "Cerámica de alta densidad con acabado brillante. Apta para microondas.", featured: false },
  { id: 4, name: "Tote Bags de Lona", category: "Accesorios", badges: ["Nuevo", "Eco-friendly"], img: TOTE_IMG, desc: "Lona ultra-resistente de 12oz. Impresión ecológica a base de agua que no se cuartea.", featured: true, reverse: true },
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
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className={`${product.reverse ? "md:w-1/2 order-first md:order-first" : "md:w-1/2"} p-8 flex flex-col justify-between`}>
                    <div>
                      {product.badge && (
                        <span className={`inline-block px-3 py-1 ${product.badgeColor} rounded-full text-xs font-bold mb-4`} style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                          {product.badge}
                        </span>
                      )}
                      {product.badges && (
                        <div className="flex gap-2 mb-4">
                          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Nuevo</span>
                          <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-full text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Eco-friendly</span>
                        </div>
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
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
