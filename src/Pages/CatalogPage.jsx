
import React, { useMemo, useState } from "react";
import ImageWithFallback from "../components/ImageWithFallback";




 /* CatalogPage (modificada para usar ImageWithFallback y placeholder)
  - Asegúrate de tener placeholder.png en public/assets/imag/placeholder.png
  - Ajusta la lista PRODUCTS si renombraste archivos (mejor usar nombres sin espacios)
*/



const PRODUCTS = [
  { code: "JM001", name: "Catan", img: "catan.webp", price: 29990, desc: "Clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos." },
  { code: "JM002", name: "carcassonne", img: "ima005.webp", price: 24990, desc: "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender." },
  { code: "AC001", name: "Control Xbox Series X", img: "im006.webp", price: 59990, desc: "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC." },
  { code: "PS001", name: "Play Station 5", img: "im007.webp", price: 549990, desc: "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva." },
  { code: "HG001", name: "Auriculares Gamer HyperX Cloud II", img: "im003.jpg", price: 79990, desc: "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego." },
  { code: "GL001", name: "Asus Rog Strix Scar 15 Gaming Laptop", img: "im002.jpg", price: 1299990, desc: "Potente laptop para juegos con procesador Intel i7, tarjeta gráfica NVIDIA RTX 3060 y pantalla de 15.6\" Full HD a 300Hz para una experiencia de juego fluida y de alta calidad." },
  { code: "SG001", name: "Secretlab Titan Evo Frost", img: "im017.jpg", price: 349990, desc: "Silla gamer diseñada para el máximo confort, con soporte ergonómico y personalización ajustable para sesiones prolongadas." },
  { code: "MG001", name: "Mouse Gamer Logitech G502 HERO", img: "im014.webp", price: 49990, desc: "Mouse gamer de alta precisión con sensor HERO 25K, 11 botones programables y retroiluminación RGB personalizable." },
  { code: "MP001", name: "Mousepad Razer Goliathus Extended Chroma", img: "im015.webp", price: 29990, desc: "Mousepad extendido con iluminación RGB personalizable, superficie optimizada para sensores ópticos y láser, y base antideslizante." },
  { code: "TS001", name: "Polera Level UP Gamer", img: "PoleraLevelUP.jpg", price: 19990, desc: "Polera de algodón 100% con diseño exclusivo de Level UP Gamer, cómoda y duradera." },
  { code: "RL001", name: "Refrigeración Líquida Cougar Poseidon Elite ARGB 240", img: "im016.webp", price: 70990, desc: "Sistema de refrigeración líquida para CPU con radiador de 240mm, iluminación ARGB personalizable y bomba de alta eficiencia." },
  { code: "MG002", name: "Monitor Gamer Xiaomi G34, WQi, 180Hz", img: "im013.webp", price: 295990, desc: "Monitor ultrawide de 34\" con resolución WQHD, tasa de refresco de 180Hz y tiempo de respuesta de 3ms, ideal para una experiencia de juego inmersiva y fluida." }
  
];


const formatter = new Intl.NumberFormat("es-CL");

export default function CatalogPage({ setCart }) {
  const [query, setQuery] = useState("");
  const placeholder = "/assets/imag/placeholder.png";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) => (p.name + " " + p.desc).toLowerCase().includes(q));
  }, [query]);

  const addToCart = (p) => {
    setCart?.((prev) => {
      const list = prev ?? [];
      const found = list.find((i) => i.id === p.code);
      if (found) {
        return list.map((i) => (i.id === p.code ? { ...i, cantidad: (i.cantidad || 1) + 1 } : i));
      }
      return [...list, { id: p.code, nombre: p.name, precio: p.price, cantidad: 1, img: `/assets/imag/${p.img}` }];
    });
    window.dispatchEvent(new CustomEvent("show-toast", { detail: `${p.name} agregado al carrito` }));
  };

  return (
    <section id="catalogo" className="py-4 container">
      <h2 className="mb-4" style={{ color: "var(--azul-electrico)" }}>Catálogo de la tienda</h2>

      <div className="row mb-4">
        <div className="col-12 col-md-6 mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"
            placeholder="Buscar productos..."
            style={{ background: "#e9e6e6", color: "#000", border: "1px solid var(--azul-electrico)" }}
          />
        </div>
      </div>

      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.code} className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card h-100 w-100">
              <div className="ratio ratio-4x3">
                <ImageWithFallback
                  src={`/assets/imag/${p.img}`}
                  alt={p.name}
                  className="card-img-top"
                  onError={() => {}}
                  placeholder={placeholder}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text" style={{ color: "#D3D3D3" }}>
                  <strong>Descripción:</strong> {p.desc}
                </p>
                <p className="card-text" style={{ color: "#00F7FF" }}>${formatter.format(p.price)}</p>
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(p)}>Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  