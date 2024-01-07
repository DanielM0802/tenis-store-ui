import { Typography, Button } from "@material-tailwind/react"
import ProductoCarro from "../components/ProductoCarro" 
import { useCarrito } from "../context/carritoContext"
import { useEffect } from "react";

function Carrito() {

    const { carrito, totalCarrito, vaciarCarrito } = useCarrito();


    useEffect(() => {
        console.log(carrito)
    }, [])

  if(carrito.length < 1){
    return(
        <Typography variant='h2' color="black" className='text-center mt-10'>
            Tu carrito esta vacío
        </Typography>
    )
  }

  return (
    <div  className="w-4/5 mx-auto">

        <div>

            <Typography variant='h2' color="black" className=''>
                Tu carrito
            </Typography>
            <Typography variant='h3' color="black" className=''>
                TOTAL (2 productos) $240.980
            </Typography>
            <Typography variant='p' color="black" className=''>
                Los artículos en tu carrito no están reservados. Termina el proceso de compra ahora para hacerte con ellos.
            </Typography>
            <Button color="red" className="my-5" onClick={vaciarCarrito}>Vaciar carrito</Button>
        </div>

        <div className="flex justify-between gap-8 mt-10">
            {/*Div a la izquieerda con productos  */}
            <div className="w-3/4">

                {
                    carrito.map( producto => (
                        <ProductoCarro producto={producto}/>
                    ) )
                }

            </div>

            {/*Div a la derecha con resumen y boton  */}

            <div className="w-1/4 flex flex-col gap-5">
                <div className="border-b border-blue-gray-600">
                    <Typography variant='h3' color="black" className=''>
                        Total del carrito
                    </Typography>
                    <Typography variant='p' color="black" className=''>
                        Subtotal	$ {`${totalCarrito}`}
                    </Typography>
                </div>
                <div className="border-b border-blue-gray-600">
                    <Typography variant='h3' color="black" className=''>
                        Envío	
                    </Typography>
                    <Typography variant='p' color="black" className=''>
                        Enviar a Región Metropolitana de Santiago.
                    </Typography>
                </div>
                <div className="border-b border-blue-gray-600">
                    <Typography variant='h2' color="black" className=''>
                        Total	
                    </Typography>
                    <Typography variant='p' color="black" className=''>
                        $ {`${totalCarrito}`}
                    </Typography>
                </div>
                <Button color="amber">Finalizar compra</Button>
            </div>
        </div>
        


    </div>
  )
}

export default Carrito