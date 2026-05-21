import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Quote from "./pages/Quote";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={
          <div className="flex min-h-[60vh] items-center justify-center flex-col gap-4">
            <h1 className="text-5xl font-bold text-primary">404</h1>
            <p className="text-on-surface-variant">Página no encontrada</p>
            <a href="/" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold">Volver al inicio</a>
          </div>
        } />
      </Routes>
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  );
}
