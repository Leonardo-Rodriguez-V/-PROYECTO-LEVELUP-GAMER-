import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container d-flex align-items-center justify-content-between">
        <div><img src="/assets/imag/logoNew.png" alt="Level UP Game" style={{ height: 40 }} onError={(e)=>e.currentTarget.src='/assets/imag/placeholder.png'} /></div>
        <nav>
          <a href="/privacidad" className="text-white me-3">Privacidad</a>
          <a href="#contacto" className="text-white me-3">Contacto</a>
          <a href="/terminos" className="text-white">Términos</a>
        </nav>
        <div className="text-white">&copy; {year} Level UP Gamer.</div>
      </div>
    </footer>
  );
}