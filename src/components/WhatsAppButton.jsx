import React from 'react';

export default function WhatsAppButton(){
  return (
    <div className="fab-whatsapp" role="link" aria-label="Soporte por WhatsApp">
      <a href="https://wa.me/56937366485" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
        <i className="fab fa-whatsapp fa-2x"></i>
      </a>
    </div>
  );
}