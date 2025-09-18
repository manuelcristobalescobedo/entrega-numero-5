import React from "react";


export default function Filtro() {
    React.useEffect(() => {
        const filtros = document.querySelector(".FiltrosDeBusqueda") as HTMLElement | null;
        const botonesAbrirFiltros = document.querySelectorAll(".abrir-filtros");
        const botonCerrarFiltros = filtros?.querySelector("#cerrar-filtros");

        if (filtros && botonCerrarFiltros) {
            botonesAbrirFiltros.forEach(boton => {
                boton.addEventListener("click", () => {
                    filtros.style.display = "flex";
                });
            });

            botonCerrarFiltros.addEventListener("click", () => {
                filtros.style.display = "none";
            });
        }
    }, []);}