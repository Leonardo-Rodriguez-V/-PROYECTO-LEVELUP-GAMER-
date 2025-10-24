import React, { useState } from "react";

/*
  Conversión de la Home (header, origen-impacto, oferta, blog, contacto).
  - Si prefieres dividir en componentes, los podemos extraer después.
*/
export default function HomePage({ setCart }) {
  const [contact, setContact] = useState({ nombre: "", email: "", mensaje: "" });
  const placeholder = '/assets/imag/logoNew.png';

  const handleContact = (e) => {
    e.preventDefault();
    alert("Mensaje enviado (demo). Gracias!");
    setContact({ nombre: "", email: "", mensaje: "" });
  };

  const addOfferToCart = () => {
    setCart?.(prev => [...(prev || []), { id: 'oferta-teclado', nombre: 'Teclado Inalámbrico', precio: 85990, cantidad: 1, img: '/assets/image/Teclado_Inspire_Smart_TI707.jpg' }]);
    window.dispatchEvent(new CustomEvent('show-toast', { detail: 'Teclado agregado al carrito' }));
  };
   
  const handleExploreCatalog = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const target = document.getElementById('catalogo'); // Encuentra el elemento con ID 'catalogo'
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia el elemento
    }
  };
  return (
    <>
      <header className="bg-dark text-white text-center py-5 mt-5">
        <h1>Bienvenido a Level UP Gamer 🎮</h1>
        <p className="lead">Tu tienda de videojuegos y accesorios
          , Leves-Up Gamer ofrece una amplia gama de productos para gamers, desde consolas y 
accesorios hasta computadores y sillas especializadas. ¡Explora nuestro catálogo y lleva tu experiencia de juego al siguiente nivel!</p>
        
      
          
      </header>

       
        {/*<header className="bg-dark text-white text-center py-5 mt-5">
        <h1>Bienvenido a Level UP Gamer 🎮</h1>
        <p className="lead">Tu tienda de videojuegos y accesorios</p>
        <a href="#catalogo" className="btn btn-primary btn-lg" onClick={handleExploreCatalog}>
          Explorar Catálogo
        </a>
      </header>

      
      <section id="catalogo" className="py-5">
        <div className="container">
          <h2 className="section-title">🛒 Catálogo de Productos</h2>
        
          <p>Aquí estará el contenido del catálogo...</p>
        </div>
      </section> */}
   


      {/* Origen e impacto */}
      <section className="container py-5" id="origen-impacto">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-lg neon-section" style={{ background: '#141A28' }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="display-6 me-2" style={{ color: 'var(--azul-electrico)' }}>
                    <i className="fas fa-industry fa-2x"></i>
                  </span>
                  <h2 className="neon-title mb-0" style={{ color: 'var(--azul-electrico)' }}>Origen de Productos</h2>
                </div>
                <p className="mb-3 text-white fs-5">Calidad y autenticidad garantizadas</p>
                <h5 className="mb-3">
                  <span className="badge" style={{ background: 'var(--verde-neon)', color: '#000', fontSize: '1rem' }}>Certificaciones Oficiales</span>
                </h5>
                <ul className="list-group list-group-flush fs-6">
                  <li className="list-group-item bg-transparent text-white border-0"><i className="fas fa-check-circle text-success me-1" /> Sony Interactive Entertainment</li>
                  <li className="list-group-item bg-transparent text-white border-0"><i className="fas fa-check-circle text-success me-1" /> Microsoft Xbox</li>
                  <li className="list-group-item bg-transparent text-white border-0"><i className="fas fa-check-circle text-success me-1" /> Nintendo Co., Ltd.</li>
                  <li className="list-group-item bg-transparent text-white border-0"><i className="fas fa-check-circle text-success me-1" /> SteelSeries</li>
                </ul>
                <div className="mt-3">
                  <span className="badge bg-info text-dark me-1">Distribución Oficial</span>
                  <span className="badge bg-primary">Producto Original</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-lg neon-section" style={{ background: '#181825' }}>
              <div className="card-body text-center">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <span className="display-6 me-2" style={{ color: 'var(--verde-neon)' }}><i className="fas fa-users fa-2x"></i></span>
                  <h2 className="neon-title mb-0" style={{ color: 'var(--verde-neon)' }}>Impacto Comunitario</h2>
                </div>
                <p className="fs-5 text-white mb-4">Tus compras <span style={{ color: 'var(--verde-neon)', fontWeight: 'bold' }}>impulsan la comunidad gamer</span>.</p>
                <div className="row g-2 justify-content-center mb-3">
                  <div className="col-6 text-center">
                    <div className="py-3 px-2 rounded bg-dark border border-success shadow-sm">
                      <div className="fs-2 text-success mb-1"><i className="fas fa-calendar-check"></i> +1,200</div>
                      <div className="text-white">Eventos apoyados</div>
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="py-3 px-2 rounded bg-dark border border-info shadow-sm">
                      <div className="fs-2 text-info mb-1"><i className="fas fa-money-bill-wave"></i> $2.5M</div>
                      <div className="text-white">Invertidos en comunidad</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="badge bg-success me-1">¡Gracias por ser parte!</span>
                  <span className="badge bg-warning text-dark">Apoya el mundo gamer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta del Mes */}
      <section className="container py-5">
        <div className="card shadow-lg border-custom h-100">
          <div className="card-body d-flex flex-column">
            <div className="row align-items-center flex-grow-1">
              <div className="col-md-6">
                <img src="/assets/imag/Teclado_Inspire.jpg" className="img-fluid" alt="Teclado Inalámbrico" onError={(e)=>e.currentTarget.src=placeholder} />
              </div>
              <div className="col-md-6 text-white">
                <h3 className="card-title">Oferta del Mes: Teclado Inalámbrico</h3>
                <p>El Teclado Multidispositivo Inalámbrico Inspire Smart TI707... (texto resumido)</p>
                <p className="card-text" style={{ color: '#00F7FF' }}>$85.990</p>
                <button className="btn btn-primary btn-comprar" onClick={addOfferToCart}>Agregar al Carrito</button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3"><img src="/assets/imag/teclado1.webp" className="img-fluid" alt="" onError={(e)=>e.currentTarget.src=placeholder} /></div>
              <div className="col-md-3"><img src="/assets/imag/teclado2.webp" className="img-fluid" alt="" onError={(e)=>e.currentTarget.src=placeholder} /></div>
              <div className="col-md-3"><img src="/assets/imag/teclado4.webp" className="img-fluid" alt="" onError={(e)=>e.currentTarget.src=placeholder} /></div>
              <div className="col-md-3"><img src="/assets/imag/teclado3.webp" className="img-fluid" alt="" onError={(e)=>e.currentTarget.src=placeholder} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog (resumen) */}
      <section id="blog" className="py-5 game-section">
        <div className="container">
          <h2 className="section-title">📰 ÚLTIMAS NOTICIAS GAMER</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="blog-card">
                <div className="card-header">
                  <span className="badge bg-neon"></span>
                  <img src="/assets/imag/setup.avif" alt="Setup Gamer"  class="blog-image" /*className="img-fluid rounded-top" onError={(e)=>e.currentTarget.src=placeholder}*/ />
                </div>
                <div className="card-body">
                  <h3>Guía Definitiva para tu Setup</h3>
                  <p>Aprende a optimizar tu espacio de juego...</p>
                  <div className="card-footer">
                    <a href="https://www.hp.com/cl-es/shop/tech-takes/guia-setup-gaming-profesional" className="btn btn-neon" target="_blank" rel="noreferrer">Leer más <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-card shadow-sm">
                <div className="card-header position-relative">
                  <img src="/assets/imag/im012.webp" alt="Tráiler de GTA 6"   class="blog-image" /*className="img-fluid rounded-top trailer-img" loading="lazy" onError={(e)=>e.currentTarget.src=placeholder}*/ />
                </div>
                <div className="card-body">
                  <h3 className="card-title">¡Mira el Tráiler de GTA 6!</h3>
                  <p className="card-text">No te pierdas el emocionante tráiler de GTA 6.</p>
                  <div className="card-footer">
                    <a href="https://www.rockstargames.com/VI" className="btn btn-neon" target="_blank" rel="noreferrer">Ver Tráiler <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Contacto*/}
      <section id="contacto" className="py-4">
        <div className="container text-center">
          <h2>📩 Contacto</h2>
          <form onSubmit={handleContact} style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="mb-3 text-start">
              <label className="form-label">Nombre 📝</label>
              <input name="nombre" value={contact.nombre} onChange={e=>setContact({...contact, nombre: e.target.value})} className="form-control" required />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Correo 📧</label>
              <input name="email" type="email" value={contact.email} onChange={e=>setContact({...contact, email: e.target.value})} className="form-control" required />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Mensaje 💬</label>
              <textarea name="mensaje" value={contact.mensaje} onChange={e=>setContact({...contact, mensaje: e.target.value})} className="form-control" rows={5} required />
            </div>
            <button type="submit" className="btn btn-neon">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
  

}