import { useState } from "react";
import { Link } from "react-router-dom";

const mockProducts = [
  { id: 1, title: "Tour en la ciudad", place: "Santiago", price: 50, duration: "2h", rating: 4.5 },
  { id: 2, title: "Excursión montaña", place: "Andes", price: 100, duration: "6h", rating: 4.8 },
  { id: 3, title: "trekking", place: "Cochamó", price: 30, duration: "1h", rating: 4.2 },
  { id: 4, title: "Clases de surf", place: "Viña del Mar", price: 80, duration: "3h", rating: 4.6 },
];

export default function Catalog() {
  const [query, setQuery] = useState("");

  const filtered = mockProducts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="border px-3 py-2 rounded w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p>No se encontraron productos</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <Link
              to={`/catalog/${p.id}`}
              key={p.id}
              className="border rounded-lg p-3 bg-white shadow hover:shadow-md transition"
            >
              <div className="bg-gray-200 h-32 flex items-center justify-center mb-2">
                <span>📷</span>
              </div>
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.place}</p>
              <p className="text-sm">Duración: {p.duration}</p>
              <p className="text-sm">Desde ${p.price}</p>
              <p className="text-sm">⭐ {p.rating}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}