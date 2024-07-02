export const products = [
    {   id:1,
        nombre:"Pizza Pampita",
        precio: 12000,
        categoria: "pizzas",
        stock: 5,
        descripcion:"Pizza Pampita",
        img: " ../../../src/assets/imgs/pizzapampita.jpg" ,
    },
    {   id:2,
        nombre:"Pizza Confite",
        precio: 7999,
        categoria: "pizzas",
        stock: 2,
        descripcion:"Pizza Confite",
        img: " ../../../src/assets/imgs/pizzaconfitte.jpg" ,
    },
    {   id:3,
        nombre:"Milapizza Morrón",
        precio: 18000,
        categoria: "milapizzas",
        stock: 10,
        descripcion:"Milapizza Morrón",
        img: " ../../../src/assets/imgs/milapizzamorron.jpg" ,
    },
    {   id:4,
        nombre:"Pizza Calabresa",
        precio: 8999,
        categoria: "pizzas",
        stock: 10,
        descripcion:"Pizza Calabresa",
        img: " ../../../src/assets/imgs/pizzacalabresa.jpg" ,
    },
    {   id:5,
        nombre:"Empanada de carne",
        precio: 1000,
        categoria: "horno-de-barro",
        stock: 12,
        descripcion:"Empanada de carne",
        img: " ../../../src/assets/imgs/empanada.jpg" ,
    },
    {   id:6,
        nombre:"Pastel de papa",
        precio: 6000,
        categoria: "horno-de-barro",
        stock: 10,
        descripcion:"pastel de papa",
        img: " ../../../src/assets/imgs/pasteldepapa.jpg" ,
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
        img: " ../../../src/assets/imgs/milapizza4quesos.jpg" ,
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