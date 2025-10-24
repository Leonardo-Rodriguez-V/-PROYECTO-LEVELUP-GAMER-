import React from 'react';

export default function CartModal({ show, handleClose, cart = [], setCart, user }) {
  if (!show) return null;
  const formatter = new Intl.NumberFormat('es-CL');

  const quitarDelCarrito = (id) => {
    setCart?.(cart.filter(item => item.id !== id));
  };

  const vaciarCarrito = () => setCart?.([]);

  const total = cart.reduce((sum, it) => sum + (it.precio * (it.cantidad || 1)), 0);
  const descuento = user?.email?.endsWith?.('@duoc.cl') ? Math.round(total * 0.2) : 0;

  const finalizarCompra = () => {
    if (!cart || cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    alert('Compra finalizada');
    vaciarCarrito();
    handleClose();
  };

  return (
    <div className="modal" style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">Carrito</h5>
            <button className="btn-close btn-close-white" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            {(!cart || cart.length === 0) ? <p>Carrito vacío</p> : cart.map(item => (
              <div key={item.id} className="d-flex align-items-center mb-2">
                <img src={item.img || '/assets/imag/placeholder.png'} width="50" className="me-2 rounded" alt={item.nombre} onError={(e)=>e.currentTarget.src='/assets/imag/placeholder.png'} />
                <span className="flex-grow-1">{item.nombre} x{item.cantidad || 1}</span>
                <span className="me-2">${formatter.format(item.precio * (item.cantidad || 1))}</span>
                <button className="btn btn-danger btn-sm" onClick={() => quitarDelCarrito(item.id)}>Eliminar</button>
              </div>
            ))}
            <h5>Total: ${formatter.format(total)}</h5>
            {descuento > 0 && <p style={{ color: 'var(--neon-green)' }}>Descuento Duoc: -${formatter.format(descuento)}</p>}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar</button>
            <button className="btn btn-success" onClick={finalizarCompra}>Finalizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}