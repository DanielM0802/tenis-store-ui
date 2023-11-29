import React from 'react'
import { Typography, Button} from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import CategoriaHome from '../components/CategoriaHome'

function Home () {

  const categorias = [
    {
      nombre: 'Accesorios',
      ruta: 'productos/accesorios',
      urlImagen: 'https://ae01.alicdn.com/kf/S59577abdd2554a5489332dd7000e95719/Raqueta-de-tenis-deportiva-en-miniaturas-y-juego-de-pelota-accesorios-de-decoraci-n-de-casa.jpg',
    },
    {
      nombre: 'Ropa',
      ruta: 'productos/ropa',
      urlImagen: 'https://www.tennisboutiquemx.com/cdn/shop/collections/ropa-de-tenis-para-hombre-483911.jpg?v=1693042398',
    }
  ]

  return (
    <div>

      <div className='py-2 bg-amber-400'>
        <Typography variant='h4' color="white" className='text-sm text-center'>
          ENVÍO GRATUITO POR COMPRAS SUPERIORES A $100.000.
        </Typography>
      </div>

      {/* Seccion de Hero */}
      <div className='h-96'>
        <div className="h-full bg-[url('/img/hero.webp')] bg-cover bg-no-repeat bg-center">
            <div className='h-full grid grid-cols-2'>

              <div className='flex flex-col justify-center items-center pb-16'>
                <Typography variant='h1' color="white" className=''>
                  🔥Tenis Store🔥
                </Typography>
                <div className="flex gap-4">  
                  <Link to="/productos/raquetas">
                    <Button color="amber">Raquetas</Button>

                  </Link>
                  <Link to="/productos/pelotas">
                    <Button color="amber">Pelotas</Button>
                  </Link>
                </div>
              </div>

              <div className=''></div>


            </div>
        </div>
      </div>

      <div className='my-10 flex gap-10 justify-center'>
        
        {
          categorias.map(  categoria => (
            <CategoriaHome  categoria={categoria} />

          ))
        }

      </div>



    </div>
  )
}

export default Home 