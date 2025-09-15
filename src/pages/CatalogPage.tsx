import React from "react";

const CatalogPage: React.FC = () => {

    const product = [

        { 
        id: 1,
        image: "",
        title: "Tour en la ciudad",
        place: "Santiago",
        price: 50.000,
        description: "Tour por los principales puntos turísticos de la ciudad",
        },
        {
        id: 2,
        image: "",
        title: "Excursion a la montaña",
        place: "Andes",
        price: 80.000,
        description: "Excursion de un día a la montaña con guía",
        },
        {
        id: 3,
        image: "",
        title: "Rafting en el rio",
        place: "Cochamo",
        price: 40.000,
        description: "Descenso en rafting por el rio Cochamo",
        },
        {
        id: 4,
        image: "",
        title: "Tour en bicicleta",
        place: "Valparaiso",
        price: 30.000,
        description: "Tour en bicicleta por los cerros de Valparaiso",
        },
    ]

    const [query, setQuery] = React.useState("");

    const filtered = product.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase())
    })


    if (!product || !filtered) {
        return <p>Producto no encontrado</p>
    }

    return (
        <>
        <div>
            <h1 className="catalogo_producto">Catalogo de productos</h1>
            <input type="text" placeholder="Buscar producto" value={query}
            onChange={(e) => setQuery(e.target.value)} />
        </div>
        </>
    );
}

export default CatalogPage;