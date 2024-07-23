import { Box, Flex, FormControl } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Context from "../../context/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../config/Firebase";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(Context);

  const [error, setError] = useState({});

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });

  function redirectToHome() {
    function redirect() {
      window.location.href = "/"; 
    }
    
    // Establece un temporizador para ejecutar la función redirect después de 2000 milisegundos (2 segundos)
    setTimeout(redirect, 3800);
  }

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }

    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Parece que no agregaste ningun elemento al carrito aún",
        footer: "<p> Vuelve a la tienda y agrega un producto!</p>",
      });
      return;
    }

    const ordersCollection = collection(db, "orders"); //describo la coleccion

    try {
      const order = {
        //creo la orden con los datos necesarios
        buyer: user,
        cart: cart,
        total: getTotalPrice(),
        fechadecompra: Timestamp.now(),
      };

      const orderRef = await addDoc(ordersCollection, order); //la envio a firebase

      let timerInterval;
      Swal.fire({
        title: "Muchas gracias por tu compra! ",
        html: `ID de compra: ${orderRef.id}. 
        Redireccionando a inicio...`,
        icon:"success",
        timer: 3500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      redirectToHome();
    } catch (error) {
      console.log(error);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!user.name || !user.lastname) {
      errors.name = "Tenés que agregar un nombre/apellido.";
    } else if (
      user.name.length < 3 ||
      (user.name.length > 15 && user.lastname.length < 3) ||
      user.lastname.length > 15
    ) {
      errors.name =
        "Tenes que agregar un nombre/apellido mayor que 3 caracteres y menor a 15.";
    }

    if (!user.email) {
      errors.email = "Tenés que ingresar un email.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Tenés que ingresar un email válido.";
    }

    if (user.repeatedEmail != user.email) {
      errors.repeatedEmail = "Los emails no coinciden";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.repeatedEmail = "Tenés que ingresar un email válido.";
    }

    if (!user.phone) {
      errors.phone = "Tenés que ingresar un número de teléfono.";
    } else if (!user.phone.length >= 8) {
      errors.phone = "Tenes que ingresar un número de teléfono válido.";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <Box width={"100%"} justifyContent={"center"}>
      <Flex
        w={"100%"}
        pt={"180px"}
        justify={"center"}
        align={"center"}
        direction={"column"}
      >
        <FormControl w={"40%"}>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Datos de facturación:
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Usa un email en el cual tengas acceso.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    onChange={updateUser}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-red-600">
                  {error.name}
                </p>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    name="lastname"
                    type="text"
                    autoComplete="family-name"
                    onChange={updateUser}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={updateUser}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-red-600">
                  {error.email}
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="repeatedEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirmar Email
                </label>
                <div className="mt-2">
                  <input
                    name="repeatedEmail"
                    type="email"
                    onChange={updateUser}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-red-600">
                  {error.repeatedEmail}
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Número Telefónico
                </label>
                <div className="mt-2">
                  <input
                    name="phone"
                    type="text"
                    onChange={updateUser}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-red-600">
                  {error.phone}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-end justify-end gap-x-6">
            <button
              onClick={getOrder}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Finalizar compra
            </button>
          </div>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Checkout;
