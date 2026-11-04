import { Routes, Route, Link } from "react-router";
import Inscricao from "./pages/Inscricao.jsx";
import Inscritos from "./pages/Inscritos.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Evento</Link>
        <Link to="/inscricao">Inscrição</Link>
        <Link to="/inscritos">Inscritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/inscritos" element={<Inscritos />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;