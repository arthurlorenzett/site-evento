import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Inscricao from "./pages/Inscricao.jsx";
import Inscritos from "./pages/Inscritos.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/inscritos" element={<Inscritos />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>

      <footer className="rodape">
        <p>Mutirão Dev 2027 é um evento fictício, criado para um teste técnico.</p>
      </footer>
    </>
  );
}

export default App;
