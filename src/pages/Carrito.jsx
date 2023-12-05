import { Typography, Button } from "@material-tailwind/react"
import ProductoCarro from "../components/ProductoCarro" 

function Carrito() {


    const productos = [
        {
            porcentajeDescuento: 25,
            nombre: "Pelotas de Tenis Dunlop Fort All Court",
            descripcion: "Pelotas de tenis Dunlop Fort All Court diseñadas para un rendimiento óptimo en todas las superficies de la cancha. Aprobadas por la ITF.",
            url_imagen: "https://dunlopsports.com/wp-content/uploads/2019/01/Updated-ATP-Championship-4-Tin-Image-500x500.jpg",
            precio_anterior: 11990,
            precio_actual: 8993,
            cantidad: 4,
            tipo: "Presión media",
            disponible_entrega: true,
            disponible_retiro: true,
          },
          {
            porcentajeDescuento: 18,
            nombre: "Yonex Percept 100",
            descripcion: "La Yonex Percept 100 esta creada para jugadores de nivel intermedio a avanzado que buscan una raqueta flexible, con precisión y sensaciones.",
            url_imagen: "https://sursports.cl/wp-content/uploads/2023/10/Raqueta-Yonex-Percept-100-300gr-1.jpg",
            precio_anterior: 269990,
            precio_actual: 221393,
            grip_size: "4 3/8",
            head_size: "97 sq in",
            disponible_entrega: true,
            disponible_retiro: false,
            cantidad: 2,

          },
          {
            porcentajeDescuento: 18,
            nombre: "Plantilla Wilson Para Raquetas",
            descripcion: "Dale a tu raqueta el toque profesional con una plantilla de logotipo en las cuerdas. Esta plantilla Wilson fácil de usar funciona con cualquier tinta de plantilla de raqueta y es perfecta para jugadores patrocinados por Wilson o por fanáticos de los productos Wilson. Guárdalo en tu bolsa de raqueta para retoques fáciles.",
            url_imagen: "https://sursports.cl/wp-content/uploads/2022/10/Plantilla-Wilson-Raquetas.jpg",
            tipo: "Plnatilla",
            disponible_entrega: false,
            disponible_retiro: true,
            precio_anterior: 8000,
            precio_actual: 6560,
            cantidad: 1,

          },
    ]



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
        </div>

        <div className="flex justify-between gap-8 mt-10">
            {/*Div a la izquieerda con productos  */}
            <div className="w-3/4">

                {
                    productos.map( producto => (
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
                        Subtotal	$44.990
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
                        $44.990
                    </Typography>
                </div>
                <Button color="amber">Finalizar compra</Button>
            </div>
        </div>
        


    </div>
  )
}

export default Carrito