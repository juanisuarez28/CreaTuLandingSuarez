export const products = [
    {   id:1,
        nombre:"Bermuda Astro Baggy",
        precio: 34000,
        categoria: "bermudas",
        stock: 5,
        descripcion:"Pantalones holgados BDG de gran tamaño en denim BDG premium. Pantalones cortos de mezclilla de línea larga con un ajuste relajado y cremallera. Exclusivo Urban Outfitters.",
        img: "https://images.urbndata.com/is/image/UrbanOutfitters/87845616_040_b?$redesign-zoom-5x$" ,
    },
    {   id:2,
        nombre:"Bermuda Denim Carpenter",
        precio: 30000,
        categoria: "bermudas",
        stock: 5,
        descripcion:"Pantalones holgados BDG de gran tamaño en denim BDG premium. Pantalones cortos de mezclilla de línea larga con un ajuste relajado y cremallera. Exclusivo Urban Outfitters.",
        img: "https://images.urbndata.com/is/image/UrbanOutfitters/89848501_106_b?$redesign-zoom-5x$" ,
    },
    {   id:3,
        nombre:"Bermuda Jean Short",
        precio: 29000,
        categoria: "bermudas",
        stock: 5,
        descripcion:"Pantalones holgados BDG de gran tamaño en denim BDG premium. Pantalones cortos de mezclilla de línea larga con un ajuste relajado y cremallera. Exclusivo Urban Outfitters.",
        img: "https://images.urbndata.com/is/image/UrbanOutfitters/92685163_106_b?$redesign-zoom-5x$" ,
    },
    {   id:4,
        nombre:"Bermuda Big Slacker",
        precio: 29000,
        categoria: "bermudas",
        stock: 5,
        descripcion:"Pantalones holgados BDG de gran tamaño en denim BDG premium. Pantalones cortos de mezclilla de línea larga con un ajuste relajado y cremallera. Exclusivo Urban Outfitters.",
        img: "https://images.urbndata.com/is/image/UrbanOutfitters/92852789_052_b?$redesign-zoom-5x$" ,
    },
    {   id:5,
        nombre:"Remera Bong Fire",
        precio: 1000,
        categoria: "remeras",
        stock: 12,
        descripcion:"The essential Bonfire tee by UOs own BDG label. Washed cotton t-shirt in a boxy silhouette with a cropped hem. Short sleeve style and fitted with a ribbed crew neck. Urban Outfitters exclusive.",
        img: " https://images.urbndata.com/is/image/UrbanOutfitters/86986361_006_b?$redesign-zoom-5x$" ,
    },
    {   id:6,
        nombre:"Remera New York Yankees",
        precio: 15000,
        categoria: "remeras",
        stock: 10,
        descripcion:"New York Yankees tee by Pro Standard. Short sleeve tee cut from a cotton jersey in a standard fit with the classic insignia embroidered at the chest. Finished with a ribbed crew neck. Urban Outfitters exclusive.",
        img: "https://images.urbndata.com/is/image/UrbanOutfitters/90148073_011_b?$redesign-zoom-5x$" ,
    },
    {   id:7,
        nombre:"Brownie con helado",
        precio: 5000,
        categoria: "postres",
        stock: 10,
        descripcion:"brownie",
        img: " ../../../src/assets/imgs/brownie.jpg" ,
    },
    {   id:8,
        nombre:"Volcán de chocolate",
        precio: 6000,
        categoria: "postres",
        stock: 10,
        descripcion:"volcán de chocolate",
        img: " ../../../src/assets/imgs/volcan.jpg" ,
    },
    {   id:9,
        nombre:"Hamburguesa premium",
        precio: 11500,
        categoria: "hamburguesas",
        stock: 10,
        descripcion:"hamburguesa premium",
        img: " ../../../src/assets/imgs/hamburguesapremium.jpg" ,
    },
    {   id:10,
        nombre:"Fajita veggie",
        precio: 9000,
        categoria: "hamburguesas",
        stock: 10,
        descripcion:"fajita",
        img: " ../../../src/assets/imgs/fajitaveggie.jpg" ,
    },
    {   id:11,
        nombre:"Pizza Plomito",
        precio: 8999,
        categoria: "pizzas",
        stock: 10,
        descripcion:"Pizza plomito",
        img: " ../../../src/assets/imgs/plomito.jpg" ,
    },
    {   id:12,
        nombre:"Pizza Mediterránea",
        precio: 10500,
        categoria: "pizzas",
        stock: 10,
        descripcion:"Pizza mediterranea",
        img: " ../../../src/assets/imgs/pizzamediterranea.jpg" ,
    },
    {   id:13,
        nombre:"Taco",
        precio: 10500,
        categoria: "hamburguesas",
        stock: 10,
        descripcion:"taco",
        img: " ../../../src/assets/imgs/taco.jpg" ,
    },
    {   id:14,
        nombre:"Milapizza 4 quesos",
        precio: 18000,
        categoria: "milapizzas",
        stock: 10,
        descripcion:"Milapizza 4 quesos",
        img: "https://images.urbndata.com/is/image/UrbanOutfitters/87845616_040_b?$redesign-zoom-5x$" ,
    },
];

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (category)=>{
    return new Promise((resolve) => {
        const filteredProducts= products.filter(prod => prod.categoria === category);
        setTimeout(() => {
            resolve(filteredProducts)
        }, 2000)
    })
}

export const getProductosById=(productId)=>{
    return new Promise((resolve) => {
        const filteredProducts= products.find(prod => prod.id === parseInt(productId));
        setTimeout(() => {
            resolve(filteredProducts)
        }, 2000)
    })
}