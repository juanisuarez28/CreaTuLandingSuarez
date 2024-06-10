const crearBoton = (text, classname, id)=>{
    const divRoot= document.getElementById('root');
    const button = document.createElement('button');

    button.innerHTML = text;
    button.className = classname;
    button.id = id;
    
    button.addEventListener("click", handleClick);

    divRoot.appendChild(button);
};

const handleClick = () =>{
    alert("hola");
}

crearBoton("nombreboton", "btn", "btn");
