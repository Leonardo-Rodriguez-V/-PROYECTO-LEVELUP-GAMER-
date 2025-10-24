import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Eventos() {
  useEffect(() => {
    const container = document.getElementById("map");
    if (!container) return;

    // Evita re-inicializar si ya existe (por StrictMode en dev)
    if (container._leaflet_id) {
      // Si ya existe, forzamos un resize para que se renderice bien
      try {
        const existingMap = L.map(container);
        existingMap.invalidateSize();
      } catch (e) {}
      return;
    }

    const map = L.map("map").setView([-33.45694, -70.64827], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-33.45694, -70.64827]).addTo(map).bindPopup("Torneo FIFA 2025<br>25 Septiembre").openPopup();

    // A veces necesita un pequeño timeout para calcular tamaño dentro de layout
    setTimeout(() => {
      try { map.invalidateSize(); } catch (e) { /* noop */ }
    }, 250);

    return () => {
      try { map.remove(); } catch (e) { /* noop */ }
    };
  }, []);

  return (
    <section id="eventos" className="py-5 neon-section">
      <div className="container">
        <h2 className="section-title">🗺️ EVENTOS GAMER</h2>
        <p>Torneo de FIFA 25 ¡Premios en efectivo y consolas!</p>
        <div className="map-container">
          <div id="map" style={{ height: 500, border: "3px solid var(--azul-electrico)", borderRadius: 15 }} />
        </div>
      </div>
    </section>
  );
}