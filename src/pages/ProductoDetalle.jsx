import { useLocation } from "react-router-dom"
import { Typography, Button } from "@material-tailwind/react";

function ProductoDetalle() {

    const {state} = useLocation();
    const {nombre, url_imagen, porcentajeDescuento, precio_actual, descripcion} = state.producto;
    console.log(state.producto)
  return (
    <div className='container px-12 mx-auto'>


        <Typography variant='h1' color="blue-gray" className='text-3xl my-5'>
            {nombre}
        </Typography>
        <div className="flex justify-between">
            
            <img
            className="h-[32rem] w-1/2 rounded-lg object-cover object-center"
            src={url_imagen}
            alt="nature image"
            />

            <div>

                <p>STOCK DISPONIBLE</p>
                <Typography variant='h2' color="blue-gray" className='text-2xl my-5'>
                {nombre}
                </Typography>
                <p>SKU: FT04898</p>
                
                <p className="line-through">${ parseInt(precio_actual / ( 1 - porcentajeDescuento / 100 ))}</p>
                <p>${precio_actual}</p>
              
                <Typography variant='h2' color="blue-gray" className='text-xl my-5'>
                {descripcion}
                </Typography>
              
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Añadir al carro
                </Button>

                <p>Disponible para entrega a domicilio</p>
                <p>Disponible para retiro en tienda</p>
                
                


            </div>

        </div>

    </div>
  )
}

export default ProductoDetalle