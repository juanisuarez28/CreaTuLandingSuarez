const crearBoton = ()=>{
    const divRoot= document.getElementById('root');
    const button = document.createElement('button');

    button.innerHTML = "clickeame";
    button.className = "button";
    button.id = "button";
    

    button.addEventListener("click", handleClick);

    divRoot.appendChild(button);



};

const handleClick = () =>{
    alert("hola");
}

crearBoton();
