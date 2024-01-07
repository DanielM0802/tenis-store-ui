import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useCarrito } from "../context/carritoContext";
  import { Link } from "react-router-dom";
   
  export function Producto( {producto} ) {

    const { agregarProducto } = useCarrito();

    const {nombre, url_imagen, porcentajeDescuento, precio_actual, descripcion} = producto;

    return (
      <Card className="w-80 flex flex-col justify-between">
        <Link to="/productos/detalle" state={ {producto}} >
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={url_imagen}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {nombre}
              </Typography>
              <div className="flex gap-4">
                  <Typography color="blue-gray" className="font-medium line-through">
                  ${ parseInt(precio_actual / ( 1 - porcentajeDescuento / 100 ))}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                  ${precio_actual}
                  </Typography>
              </div>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {descripcion}
            </Typography>
          </CardBody>
        </Link>
        <CardFooter className="pt-0">
          <Button
            onClick={ () =>  agregarProducto(producto, 1) }
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Añadir al carro
          </Button>
        </CardFooter>
      </Card>
    );
  }