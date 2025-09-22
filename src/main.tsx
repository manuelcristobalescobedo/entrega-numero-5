import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import "./index.css";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaProducto from "./pages/PaginaProducto";
import PaginaCatalogo from "./pages/PaginaCatalogo";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PaginaPrincipal />} />
            <Route path="producto" element={<PaginaProducto />} />
            <Route path="catalogo" element={<PaginaCatalogo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}