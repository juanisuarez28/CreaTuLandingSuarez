import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  ButtonGroup,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ nombre, id, precio, img, stock }) => {
  return (
    <div id="card"  className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
        <img 
          alt={nombre}
          src={img}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/producto/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {nombre}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Talle único</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${precio}</p>
      </div>
    </div>
  );
};

export default Item;
