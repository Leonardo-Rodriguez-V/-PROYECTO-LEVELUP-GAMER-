import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

/*
  Navbar con navegación que:
  - si la ruta objetivo es una página (ej. /catalogo, /blog, /eventos, /contacto) usa navigate
  - si la ruta objetivo es una sección dentro de Home (ej. #origen-impacto) navega a '/' y luego hace scroll al id
*/
export default function Navbar({ onShowCart, onShowLogin, onShowRegister, onShowProfile, user, logout }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Mapea el texto a rutas o a secciones en la home
  const routeFor = {
    catalogo: "/catalogo",
    promociones: "/promociones", // si tienes página promociones, ajusta; si está en home usa '/'
    eventos: "/eventos",
    contacto: "/contacto",
    // ejemplo de sección dentro de Home:
    "origen-impacto": "/", // si quieres scroll a la sección origen-impacto en la home
  };

  const navigateTo = (key, scrollId) => {
    const target = routeFor[key] ?? "/";

    if (target === "/" && scrollId) {
      // Si ya estamos en home, sólo hacemos scroll
      if (location.pathname === "/") {
        const el = document.getElementById(scrollId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }
      // navegamos a home y esperamos a que se renderice para hacer scroll
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(scrollId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220); // pequeño delay para asegurar render
      return;
    }

    // Si es una ruta dedicada (catalogo, blog, eventos, etc.), navegamos
    navigate(target);
    // opcional: si quieres que el scroll vaya a un id específico en esa ruta, podrías usar hash e inspeccionar en la otra página
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <img src="/assets/imag/logoNew.png" alt="logo" width="48" className="me-3" onError={(e)=>e.currentTarget.src='/assets/imag/placeholder.png'} />
        <span className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>LEVEL UP GAMER</span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navCollapse">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-4">
    <li className="nav-item">
      <button 
        className="nav-link btn btn-link px-3 py-2 text-white fw-medium"
        onClick={() => navigateTo("catalogo")}
        style={{ transition: "all 0.3s ease" }}>
        Catálogo
      </button>
    </li>

   {/* <li className="nav-item">
      <button 
        className="nav-link btn btn-link px-3 py-2 text-white fw-medium"
        onClick={() => navigateTo("promociones")}>
        Promociones
      </button>
    </li> */}

    <li className="nav-item">
      <button 
        className="nav-link btn btn-link px-3 py-2 text-white fw-medium"
        onClick={() => navigateTo("eventos")}>
        Eventos
      </button>
    </li>
    
  </ul>

 


          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-2" onClick={onShowCart} aria-label="Carrito"><i className="fas fa-shopping-cart"></i></button>
            {user ? (
              <>
                <button className="btn btn-outline-success me-2" onClick={onShowProfile}>Mi Perfil</button>
                <button className="btn btn-danger" onClick={logout}>Salir</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-primary me-2" onClick={onShowLogin}>Iniciar Sesión</button>
                <button className="btn btn-outline-primary" onClick={onShowRegister}>Registro</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}



