import React, { useState } from 'react';

export default function LoginModal({ show, onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5>Iniciar Sesión</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Correo</label>
                <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label>Contraseña</label>
                <input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={8} />
              </div>
              <button className="btn btn-primary w-100">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}