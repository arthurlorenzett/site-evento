import { useEffect } from "react";
import { useLocation } from "react-router";

// O React Router não volta a rolagem para o topo ao trocar de tela
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
