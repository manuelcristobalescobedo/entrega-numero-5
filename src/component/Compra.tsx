import React from "react";

export default function ProcesoCompra() {
  React.useEffect(() => {
    const compra = document.querySelector(".ProcesoCompra") as HTMLElement | null;
    const botonesAbrirCompra = document.querySelectorAll(".abrir-compra");
    const botonCerrarCompra = compra?.querySelector("#cerrar-compra");

    if (compra && botonCerrarCompra) {
      botonesAbrirCompra.forEach(boton => {
        boton.addEventListener("click", () => {
          compra.style.display = "flex";
        });
      });

      botonCerrarCompra.addEventListener("click", () => {
        compra.style.display = "none";
      });
    }
  }, []);
}