import React from 'react'
import { Typography, Button} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>

      <div className='py-2 bg-amber-400'>
        <Typography variant='h4' color="white" className='text-sm text-center'>
          ENVÍO GRATUITO POR COMPRAS SUPERIORES A $100.000.
        </Typography>
      </div>

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




    </div>
  )
}

export default Home 