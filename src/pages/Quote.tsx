import { useState, useRef } from "react";

const MERCH_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAm5VSJpBE-Z7TQyupW81H_xYi86M4qjuh121OsQCq4rCmskQbjq_JhHgIHs4tzTcokD6VzacRPx3N6GVCaBsK8OCPDizjMIGkSg4CHp2sBFos8m7tStfwFL5d7jprkXvK75BFgWiZp401sOpPB6Xm_4foiq0PpHENWoNlPwEwmTaaYm1agK01eZXwFM4trkDLuuins3GnKCA5-VmrvRTQpbh9iaJFxB-vfIQbdgSZreqCuvGfGCV0zRdrk-VOd7jZO1mm7TlIwQCbv";

const PRODUCTS = [
  { value: "polo", label: "Polo / Camiseta tipo polo" },
  { value: "tshirt", label: "T-shirt / Playera" },
  { value: "manga-larga", label: "Camisa manga larga" },
  { value: "gorra", label: "Gorra" },
  { value: "uniforme-deportivo", label: "Uniforme deportivo" },
  { value: "uniforme-corporativo", label: "Uniforme corporativo" },
  { value: "taza", label: "Taza" },
  { value: "termo", label: "Termo" },
  { value: "vaso", label: "Vaso" },
  { value: "otro", label: "Otro" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

type FormState = {
  nombre: string;
  empresa: string;
  whatsapp: string;
  producto: string;
  tallas: string[];
  color: string;
  cantidad: string;
  fecha: string;
  comentarios: string;
};

export default function Quote() {
  const [form, setForm] = useState<FormState>({
    nombre: "", empresa: "", whatsapp: "", producto: "", tallas: [],
    color: "", cantidad: "", fecha: "", comentarios: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSize = (size: string) => {
    setForm(prev => ({
      ...prev,
      tallas: prev.tallas.includes(size) ? prev.tallas.filter(s => s !== size) : [...prev.tallas, size],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, Array.isArray(v) ? v.join(", ") : v));
      if (logoFile) body.append("logo", logoFile);

      const res = await fetch("/api/quote", { method: "POST", body });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", empresa: "", whatsapp: "", producto: "", tallas: [], color: "", cantidad: "", fecha: "", comentarios: "" });
        setLogoFile(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="max-w-7xl mx-auto px-4 md:px-margin-desktop py-24 flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="text-4xl font-bold">¡Solicitud enviada!</h1>
        <p className="text-on-surface-variant text-lg max-w-md">
          Gracias por tu interés. Nuestro equipo se comunicará contigo por WhatsApp en menos de 24 horas.
        </p>
        <a href="https://wa.me/19198641322" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined">chat</span>
          Chatear ahora por WhatsApp
        </a>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info panel */}
        <div className="lg:col-span-5 space-y-8">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Cotización Personalizada
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-on-surface">
            Impulsa tu marca con productos que <span className="text-primary">hacen pop</span>.
          </h1>
          <p className="text-lg text-on-surface-variant">
            Completa el formulario para recibir un presupuesto detallado. Nuestro equipo te contactará en menos de 24 horas.
          </p>
          <div className="bg-surface-container p-6 rounded-xl space-y-4">
            {[
              { icon: "verified", label: "Calidad premium garantizada" },
              { icon: "schedule", label: "Tiempo de entrega: 14 días hábiles" },
              { icon: "local_shipping", label: "Envíos a todo el país" },
              { icon: "groups", label: "Pedido mínimo: 12-15 piezas" },
            ].map(({ icon, label }) => (
              <div key={icon} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                <p className="font-medium">{label}</p>
              </div>
            ))}
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
            <img src={MERCH_IMG} alt="Merchandise Display" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-6 lg:p-10 rounded-xl border border-outline-variant pop-shadow">
          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Customer info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-outline-variant pb-2">Información del Cliente</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Nombre Completo *</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} required
                    className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all"
                    placeholder="Ej. Juan Pérez" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Empresa *</label>
                  <input name="empresa" value={form.empresa} onChange={handleChange} required
                    className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all"
                    placeholder="Nombre de tu negocio" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>WhatsApp *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined">call</span>
                  <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required
                    className="w-full bg-white border border-outline rounded-lg p-3 pl-12 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all"
                    placeholder="+1 000 000 0000" type="tel" />
                </div>
              </div>
            </div>

            {/* Order details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-outline-variant pb-2">Detalles del Pedido</h2>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Producto deseado *</label>
                <select name="producto" value={form.producto} onChange={handleChange} required
                  className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Selecciona un producto</option>
                  {PRODUCTS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Tallas</label>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {SIZES.map(size => (
                      <label key={size} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" checked={form.tallas.includes(size)} onChange={() => handleSize(size)}
                          className="w-5 h-5 rounded border-outline accent-primary" />
                        <span className="group-hover:text-primary transition-colors">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Color de prenda</label>
                  <input name="color" value={form.color} onChange={handleChange}
                    className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all"
                    placeholder="Ej. Azul Marino o #001b3a" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Cantidad (Mín. 12) *</label>
                  <input name="cantidad" value={form.cantidad} onChange={handleChange} required min="12" type="number"
                    className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all"
                    placeholder="Min. 12" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Fecha requerida</label>
                  <input name="fecha" value={form.fecha} onChange={handleChange} type="date"
                    className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all" />
                </div>
              </div>
            </div>

            {/* Assets */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-outline-variant pb-2">Archivos y Comentarios</h2>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Diseño del Logo</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors ${
                    logoFile ? "bg-secondary-container/20 border-secondary" : "border-outline-variant bg-surface-container-low hover:bg-surface-container"
                  }`}
                >
                  <input ref={fileInputRef} type="file" accept=".png,.pdf,.jpg,.jpeg,.ai,.eps"
                    className="hidden" onChange={e => setLogoFile(e.target.files?.[0] ?? null)} />
                  <span className={`material-symbols-outlined text-[48px] ${logoFile ? "text-secondary" : "text-primary"}`}>upload_file</span>
                  <div className="text-center">
                    <p className="font-bold text-on-surface">{logoFile ? logoFile.name : "Adjuntar Logo (PNG, PDF, JPG)"}</p>
                    <p className="text-sm text-on-surface-variant">Arrastra o haz clic para subir · PNG, PDF, JPG, AI, EPS</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Comentarios adicionales</label>
                <textarea name="comentarios" value={form.comentarios} onChange={handleChange} rows={3}
                  className="bg-white border border-outline rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..." />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 space-y-6">
              <div className="flex items-center gap-3 p-4 bg-secondary-container/10 border border-secondary/20 rounded-lg">
                <span className="material-symbols-outlined text-secondary">info</span>
                <p className="text-sm text-on-secondary-container">
                  Tiempo de entrega: <span className="font-bold">14 días hábiles</span> una vez aprobado el diseño.
                </p>
              </div>
              {status === "error" && (
                <p className="text-sm text-error font-medium text-center">
                  Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.
                </p>
              )}
              <button type="submit" disabled={status === "loading"}
                className="w-full bg-primary text-on-primary py-4 rounded-lg text-xl font-bold shadow-lg hover:brightness-110 transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3">
                {status === "loading" ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">sync</span>
                    Enviando...
                  </>
                ) : "Enviar Solicitud de Cotización"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
