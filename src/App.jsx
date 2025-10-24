/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx"; // asegúrate de que Navbar use <Link> para rutas internas
import HomePage from "./Pages/HomePage.jsx";
import CatalogPage from "./Pages/CatalogPage.jsx";
import Eventos from "./components/Eventos.jsx";
import Footer from "./components/Footer.jsx";
import Blog from "./components/Blog.jsx";
import Contacto from "./components/Contacto.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import CartModal from "./components/CartModal.jsx";
import LoginModal from "./components/LoginModal.jsx";
import RegisterModal from "./components/RegisterModal.jsx";
import ProfileModal from "./components/ProfileModal.jsx";


export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogin = (email) => { setUser({ email, nombre: "Usuario Demo" }); setShowLogin(false); };
  const handleRegister = (email, nombre) => { setUser({ email, nombre }); setShowRegister(false); };
  const logout = () => setUser(null);
  const updateProfile = (data) => setUser(prev => ({ ...prev, ...data }));

  return (
    <>
      <Navbar onShowCart={() => setShowCart(true)} onShowLogin={() => setShowLogin(true)} onShowRegister={() => setShowRegister(true)} onShowProfile={() => setShowProfile(true)} user={user} logout={logout} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage setCart={setCart} />} />
          <Route path="/catalogo" element={<CatalogPage setCart={setCart} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />

      <CartModal show={showCart} handleClose={() => setShowCart(false)} cart={cart} setCart={setCart} user={user} />
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} onRegister={handleRegister} />
      <ProfileModal show={showProfile} onClose={() => setShowProfile(false)} user={user} updateProfile={updateProfile} />
    </>
  );
}