import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-blue-600 text-white font-bold text-xl">
        Catálogo de productos
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}