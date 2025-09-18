import React from "react";   
    
export default function CarritoCompra() {
    React.useEffect(() => {
        const carrito = document.querySelector(".CarroDeCompras") as HTMLElement | null;
        const botonesAbrir = document.querySelectorAll(".abrir-carrito");
        const botonCerrar = carrito?.querySelector("#cerrar-carrito");

        if (carrito && botonCerrar) {
            botonesAbrir.forEach(boton => {
                boton.addEventListener("click", () => {
                    carrito.style.display = "flex";
                });
            });

            botonCerrar.addEventListener("click", () => {
                carrito.style.display = "none";
            });
        }
    }
    , []);}