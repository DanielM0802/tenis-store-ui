import { Producto } from '../../components/Producto'
import { useState, useEffect } from 'react'
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Raquetas() {

  const [raquetas, setRaquetas] = useState();

  const consultarAPI = async () => {
    //simular consulta a api
    try {
      const respuesta = await axios.get('http://localhost:3000/productos');
      setRaquetas(respuesta.data);
    } catch (error) {
      console.error('Error al obtener los productos: ', error)
    }

  }

  useEffect(() => {
      consultarAPI();
  }, [])
  

  if (!raquetas) {
    return(
      <p>Cargando....</p>
    )
  }

  return (
    <div className='container px-12 mx-auto'>
      <Typography variant='h1' color="blue-gray" className='text-2xl my-5'>
        Raquetas
      </Typography>

      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          raquetas.map( raqueta => (
            <Link key={raqueta._id} to="/productos/detalle" state={ {producto: raqueta} }>
              <Producto producto={raqueta} />
            </Link>
          ))
        }
      </div>


      

    </div>
  )
}

export default Raquetas