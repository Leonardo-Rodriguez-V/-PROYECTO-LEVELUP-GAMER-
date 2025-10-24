import React, { useState } from 'react';

export default function RegisterModal({ show, onClose, onRegister }) {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [password, setPassword] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, nombre, fechaNacimiento, password);
  };

  return (
    <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5>Registro</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3"><label>Nombre</label><input className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} required /></div>
              <div className="mb-3"><label>Fecha nacimiento</label><input className="form-control" type="date" value={fechaNacimiento} onChange={e=>setFechaNacimiento(e.target.value)} required /></div>
              <div className="mb-3"><label>Correo</label><input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></div>
              <div className="mb-3"><label>Contraseña</label><input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={8} /></div>
              <button className="btn btn-success w-100">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}