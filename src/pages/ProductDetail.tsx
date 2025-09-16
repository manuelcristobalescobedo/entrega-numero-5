// pages/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";

const mockProducts = [
  { id: 1, title: "Tour en la ciudad", place: "Santiago", price: 50, duration: "2h", rating: 4.5, description: "Un recorrido por los principales puntos de la ciudad." },
  { id: 2, title: "Excursión montaña", place: "Andes", price: 100, duration: "6h", rating: 4.8, description: "Aventura en los Andes con guía experto." },
  { id: 3, title: "Visita museo", place: "Valparaíso", price: 30, duration: "1h", rating: 4.2, description: "Explora la historia y cultura en un museo local." },
  { id: 4, title: "Clases de surf", place: "Viña del Mar", price: 80, duration: "3h", rating: 4.6, description: "Aprende surf con instructores profesionales." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <Link to="/catalog" className="text-blue-600 underline">← Volver al catálogo</Link>
      <div className="mt-4 border rounded-lg p-6 bg-white shadow">
        <div className="bg-gray-200 h-48 flex items-center justify-center mb-4">
          <span>📷</span>
        </div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.place}</p>
        <p>Duración: {product.duration}</p>
        <p>Precio: ${product.price}</p>
        <p>⭐ {product.rating}</p>
        <p className="mt-2">{product.description}</p>
      </div>
    </div>
  );
}

