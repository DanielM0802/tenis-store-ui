import React from 'react'
import { Producto } from '../../components/Producto'
import { Typography, Spinner } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Pelotas() {


  const [pelotas, setPelotas] = useState();

  const consultarAPI = async () => {
    //simular consulta a api
    try {
      const respuesta = await axios.get('http://tenis-store-api-production.up.railway.app/productos/categoria/pelotas');
      setPelotas(respuesta.data);
      console.log(respuesta.data)
    } catch (error) {
      console.error('Error al obtener los productos: ', error)
    }

  }

  useEffect(() => {
      consultarAPI();
  }, [])


  if(!pelotas){
    return (
       
      <div className="flex justify-center mt-10">
        <Spinner className="h-12 w-12" color="yellow"/>
      </div>

    )
  }

  return (
    <div className='container px-12 mx-auto'>
      <Typography variant='h1' color="blue-gray" className='text-2xl my-5'>
        Pelotas
      </Typography>

      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            
            pelotas.map(pelota => (
              <Producto  key={pelota._id} producto= {pelota}/>
            ))

          }
      </div>

    </div>
  )
}

export default Pelotas