import React, { useState } from 'react';

export default function Contacto(){
  const [form, setForm] = useState({ nombre:'', email:'', mensaje:'' });
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = e => { e.preventDefault(); alert('Mensaje enviado (demo)'); setForm({ nombre:'', email:'', mensaje:'' }); };

  return (
    <section id="contacto" className="py-4">
      <div className="container">
        <h2 className="hero-title">Contacto</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="mb-3"><label>Nombre</label><input className="form-control" name="nombre" value={form.nombre} onChange={handleChange} required /></div>
          <div className="mb-3"><label>Correo</label><input className="form-control" name="email" type="email" value={form.email} onChange={handleChange} required /></div>
          <div className="mb-3"><label>Mensaje</label><textarea className="form-control" name="mensaje" value={form.mensaje} onChange={handleChange} rows="5" required /></div>
          <button className="btn btn-neon">Enviar</button>
        </form>
      </div>
    </section>
  );
}