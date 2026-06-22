import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Precios from './pages/Precios';
import Contacto from './pages/Contacto';
import TerminosYCondiciones from './pages/legal/TerminosYCondiciones';
import PoliticaEnviosReembolsos from './pages/legal/PoliticaEnviosReembolsos';
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/legal/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        <Route path="/legal/politica-de-envios-y-reembolsos" element={<PoliticaEnviosReembolsos />} />
        <Route path="/legal/politica-de-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </HashRouter>
  );
}
