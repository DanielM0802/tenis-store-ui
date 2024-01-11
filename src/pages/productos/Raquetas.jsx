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
      const respuesta = await axios.get('http://tenis-store-api-production.up.railway.app/productos/categoria/raquetas');
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
            <Producto  key={raqueta._id} producto= {raqueta}/>
          ))
        }
      </div>


      

    </div>
  )
}

export default Raquetas