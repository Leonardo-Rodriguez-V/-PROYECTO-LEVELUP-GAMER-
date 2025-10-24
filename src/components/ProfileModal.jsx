import React, { useState, useEffect } from 'react';

export default function ProfileModal({ show, onClose, user, updateProfile }) {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (user) {
      setNombre(user.nombre || '');
      setFecha(user.fechaNacimiento || '');
    }
  }, [user]);

  if (!show || !user) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ nombre, fechaNacimiento: fecha });
    onClose();
  };

  return (
    <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5>Mi Perfil</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3"><label>Nombre</label><input className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} required /></div>
              <div className="mb-3"><label>Fecha nacimiento</label><input className="form-control" type="date" value={fecha} onChange={e=>setFecha(e.target.value)} required /></div>
              <div className="mb-3"><label>Correo</label><input className="form-control" value={user.email} disabled /></div>
              <button className="btn btn-success w-100">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}