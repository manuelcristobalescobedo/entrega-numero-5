import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Catalog from "./component/Catalog";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}