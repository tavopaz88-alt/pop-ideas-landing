import { Link } from "react-router-dom";
import tazaMockup from "../assets/taza-mockup.jpeg";
import caballeroVest from "../assets/caballero-vest.jpeg";

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAerl7IJ6epG3EYJKHdgX2UVdXd3KICrDz6NasvoPxttQjMZ_5tcNxR3uxFJPnd91pN5uLUpxla5jB31WLMWdn8gzYJLOj6VOJNSrmClq3yYnj3Hi6lMkCHK6f-RMAu99xjvNQVfLyFK1SzmgQ3ZPP7BEZu7RVfZKlSziH3wmjip9DnJ7c6m6RCD5tbQGOQc3T5XNzk_LW6x-mC5xADCUzyxDvUImXf6e6nAm54ZWnQvEgyon1XBZpWpUpMK-DC2k3_gd0H0nQb9hUY";
const PRINT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD9ASLl6MuNVLB2iebeO-0tS2ZxyA6MjbKqPbbmPSXhBReMlJCTFz1cO4ijcJi6M8iCF-yEr36cGiqggDRWNRdW8Dl5XySRC_Rx78RXGXiYOn0NlBvbHV30X_FVw6YimkcRItu8HV5Hrqhgi-pQ3yuXqCYQH1THM79LuQOsPvFaC00si-XJCFR7HFVgzMfV";
const POLO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAjJEWglZFLTbKWRqRkr_fajlGPQlhsNSQZPda-pMUAD-KcUEHL3GBhAxT5mDfjoiiwEGlYWnIXuDL56Xxxowijlxt3NE5h9iyVKVfftDaGMIAuIdQXN4C458fD3AVxapXseE92QwWTMsfXXY_lLVkrgLTyxLQ7vSHLb3AcYHd5pQV707NFGDtkoyVqdZa_m3OUjJnVE_UlyPuuyGwHZcO9Fl27YNvOHq2QQTTJn72gu7w7HkB1VnQV1ze-NTZm1z4JjEPdMzrXDV9X";
const TSHIRT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDU1BrBFocH4RnfAa0N2fFXtHtV6EVI8okv959xoCjLzb7YD7MxX2d6VFRVKkFHenqZVmXJRlUTEV8cNlj8RNTadiUixJ56cXl1PXYabWA-GJL4QbRuErnieZG95qtRAao-7YToXZChfCjrqgJ90CueNDVt7Tfsuqi0TOdMEfc0PMH9g34mpYftcfUkwO7voljw0Z4fcpmiuJqyaulkLIhd-IlDY6pY26yx3mzwrS50hKlp2IMXRiyyMEwje_5QIFI5OT41XTsPY0qQ";
const UNIFORME_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDVBB8-uwI095fCROQA_Q3Svyt_5hPW3DRai3__orwTju4QEeIwpsaEW6-t8vu02IYNobWyF3Nmn_BgLTjDWWxXaZiTCijvb8n2HbsHQvsPyTgvunob7hTTk_wutfy9pIrY73Ymm6_WAFIjj0cf2hfcicd0wGcuNTFBslL8v3EpiAegE0uzWha7ZlF0f-fyShf-wOHo5Cwdt1JoeRUpRbxaSp3ETDrtE3baVO3iB7yM-SbxD8lE6SDYIP1iTdaDLLQbWqJHYB0U7YJz";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Professional production facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-4 md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full w-fit">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Artesanía Moderna
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-md">
              Calidad y Buen Trabajo en cada <span className="text-primary">Detalle</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-sm">
              Elevamos tu marca con productos personalizados de alta gama, desde textiles hasta accesorios corporativos con acabados de precisión.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/catalog" className="bg-primary text-on-primary text-sm font-bold px-8 py-4 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all">
                Cotizar ahora
              </Link>
              <Link to="/catalog" className="bg-surface-container-lowest border border-outline-variant text-on-surface text-sm font-bold px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all">
                Ver Galería
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto flex flex-col items-center gap-6">
          <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Confían en nosotros</p>
          <div className="hover:opacity-100 opacity-80 transition-all duration-500">
            <img src={caballeroVest} alt="Transportes Caballero" className="h-40 w-auto object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background" id="productos">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold">Catálogo Premium</h2>
              <p className="text-on-surface-variant">Descubre nuestra selección de productos listos para personalizar.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-1 rounded-full text-xs font-bold">Best Sellers</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold">Novedades</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { img: POLO_IMG, category: "Textil", name: "Polos", span: "col-span-2" },
              { img: TSHIRT_IMG, category: "Casual", name: "T-shirts", span: "col-span-2" },
              { img: UNIFORME_IMG, category: "Corporate", name: "Uniformes", span: "col-span-2" },
            ].map(({ img, category, name, span }) => (
              <div key={name} className={`group ${span} flex flex-col bg-surface-container-lowest rounded-xl pop-shadow border border-outline-variant overflow-hidden hover:-translate-y-1 transition-all duration-300`}>
                <div className="aspect-[4/3] bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} alt={name} />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase">{category}</span>
                    <h3 className="text-xl font-bold">{name}</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            ))}
            {[
              { icon: "child_hat", name: "Gorras", img: null },
              { icon: "coffee", name: "Tazas", img: tazaMockup },
              { icon: "water_bottle", name: "Termos", img: null },
            ].map(({ icon, name, img }) => (
              <div key={name} className="group flex flex-col bg-surface-container-lowest rounded-xl pop-shadow border border-outline-variant overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-square overflow-hidden flex items-center justify-center bg-surface-container">
                  {img
                    ? <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    : <span className="material-symbols-outlined text-primary text-[48px]">{icon}</span>
                  }
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-bold">{name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/catalog" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
              Ver catálogo completo <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-surface-container-low overflow-hidden" id="servicios">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed opacity-30 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-fixed opacity-30 rounded-full blur-3xl" />
              <div className="relative bg-white p-2 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={PRINT_IMG} alt="Printing techniques" className="rounded-lg w-full" />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-4xl font-bold">Técnicas de Impresión de Vanguardia</h2>
              <p className="text-on-surface-variant">Utilizamos tecnología de punta para asegurar que cada diseño se mantenga vibrante y duradero.</p>
              <div className="space-y-3">
                {[
                  { icon: "print", color: "text-primary", bg: "bg-primary/10", title: "DTF (Direct to Film)", desc: "Ideal para degradados complejos y colores vibrantes en cualquier tejido." },
                  { icon: "layers", color: "text-secondary", bg: "bg-secondary/10", title: "Vinil Textil", desc: "Acabados mate o brillantes de alta resistencia para logos sólidos." },
                  { icon: "palette", color: "text-on-secondary-fixed-variant", bg: "bg-on-secondary-fixed-variant/10", title: "Impresión Digital", desc: "Perfecto para accesorios y rígidos con precisión fotográfica." },
                ].map(({ icon, color, bg, title, desc }) => (
                  <div key={title} className="flex gap-4 p-4 bg-white rounded-xl border border-outline-variant hover:shadow-md transition-all">
                    <div className={`flex-shrink-0 w-12 h-12 ${bg} flex items-center justify-center rounded-lg`}>
                      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">{title}</h4>
                      <p className="text-sm text-on-surface-variant">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background" id="proceso">
        <div className="px-4 md:px-margin-desktop max-w-7xl mx-auto text-center flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Nuestro Proceso</h2>
            <p className="text-on-surface-variant">Simple, rápido y profesional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-outline-variant/30" />
            {[
              { num: "1", color: "bg-primary text-on-primary", title: "Eliges producto", desc: "Selecciona del catálogo la base perfecta para tu marca." },
              { num: "2", color: "bg-secondary text-on-secondary", title: "Envías logo", desc: "Carga tu arte y ajustamos los detalles de producción." },
              { num: "3", color: "bg-primary text-on-primary", title: "Recibes en 14 días", desc: "Enviamos tu pedido terminado directamente a tu puerta." },
            ].map(({ num, color, title, desc }) => (
              <div key={num} className="flex flex-col items-center gap-4 relative z-10">
                <div className={`w-20 h-20 ${color} rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-2`}>
                  {num}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-on-surface-variant text-sm px-4">{desc}</p>
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
            ¿Listo para hacer <span className="text-primary-fixed">Pop</span> tu marca?
          </h2>
          <p className="text-lg text-surface-variant max-w-xl relative z-10">
            Solicita una cotización personalizada hoy mismo y descubre por qué somos los favoritos de las empresas líderes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10 mt-4">
            <Link to="/quote" className="bg-primary text-on-primary text-sm font-bold px-10 py-4 rounded-lg shadow-xl hover:scale-105 transition-transform">
              Solicitar Cotización
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
