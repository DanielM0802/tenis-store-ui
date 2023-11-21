import React from 'react'
import { Producto } from '../../components/Producto'
import { Typography } from '@material-tailwind/react';

function Pelotas() {

  const pelotas = [
    {
      porcentajeDescuento: 10,
      nombre: "Pelotas de Tenis Wilson Championship",
      descripcion: "Pelotas de tenis Wilson Championship ideales para todo tipo de superficies. Ofrecen durabilidad y consistencia en el rebote.",
      url_imagen: "https://tenisygolf.cl/wp-content/uploads/2021/08/WILSON-CHAMPIONSHIP.jpg",
      precio_anterior: 7990,
      precio_actual: 7191,
      cantidad: 3,
      tipo: "Presión media",
      disponible_entrega: true,
      disponible_retiro: false,
    },
    {
      porcentajeDescuento: 20,
      nombre: "Pelotas de Tenis Babolat French Open",
      descripcion: "Pelotas de tenis Babolat French Open con el logo del torneo. Diseñadas para ofrecer un rendimiento excepcional en canchas de arcilla.",
      url_imagen: "https://www.deportescarlosmiguel.com/imagebyhash/91d32b77a383e5b28ef92ccfe59e5133869d3b86.jpg",
      precio_anterior: 9990,
      precio_actual: 7992,
      cantidad: 4,
      tipo: "Presión alta",
      disponible_entrega: true,
      disponible_retiro: true,
    },
    {
      porcentajeDescuento: 15,
      nombre: "Pelotas de Tenis Head Pro",
      descripcion: "Pelotas de tenis Head Pro con un fieltro de alta calidad para una excelente jugabilidad. Aprobadas por la ITF para torneos profesionales.",
      url_imagen: "https://sparta.cl/media/catalog/product/5/7/571701_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550",
      precio_anterior: 8990,
      precio_actual: 7641,
      cantidad: 3,
      tipo: "Presión media",
      disponible_entrega: false,
      disponible_retiro: true,
    },
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
      porcentajeDescuento: 10,
      nombre: "Pelotas de Tenis Prince Championship",
      descripcion: "Pelotas de tenis Prince Championship ideales para jugadores recreativos. Ofrecen durabilidad y consistencia en el rebote.",
      url_imagen: "https://cdnx.jumpseller.com/muuk1/image/27019471/resize/640/640?1699376362",
      precio_anterior: 6990,
      precio_actual: 6291,
      cantidad: 3,
      tipo: "Presión baja",
      disponible_entrega: true,
      disponible_retiro: false,
    },
   
  ];
  
  

  return (
    <div className='container px-12 mx-auto'>
      <Typography variant='h1' color="blue-gray" className='text-2xl my-5'>
        Pelotas
      </Typography>

      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            
            pelotas.map(pelota => (

            <Producto producto= {pelota}/>

            ))

          }
      </div>

    </div>
  )
}

export default Pelotas