export const products = [
    {   id:1,
        nombre:"Remera",
        precio: 12000,
        categoria: "Remera lisa negra",
        stock: 5,
        descripcion:"Remera de algodon lisa negra con detalles blancos",
        img: "https://acdn.mitiendanube.com/stores/002/140/898/products/remera-negra-puesta11-c2126ceece9c419cbb16513266147936-1024-1024.png" ,
    },
    {   id:2,
        nombre:"Zapatillas",
        precio: 29000,
        categoria: "Zapatillas lisa negra",
        stock: 2,
        descripcion:"Zapatilla de algodon lisa negra con detalles blancos",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/456672-1200-1200?width=1200&height=1200&aspect=true" ,
    },
    {   id:3,
        nombre:"Campera",
        precio: 18000,
        categoria: "Campera lisa negra",
        stock: 10,
        descripcion:"Campera de algodon lisa negra con detalles blancos",
        img: "https://acdn.mitiendanube.com/stores/429/781/products/puffer1-637bc68bf864c599b216892613886206-640-0.jpg" ,
    }
];

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}