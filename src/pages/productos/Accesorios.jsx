import { Link } from "react-router-dom";
import { Producto } from "../../components/Producto";
import { Typography, Spinner } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

function Accesorios() {

  const [accesorios, setAccesorios] = useState();

  const consultarAPI = async () => {
    //simular consulta a api
    try {
      const respuesta = await axios.get('http://tenis-store-api-production.up.railway.app/productos/categoria/accesorios');
      setAccesorios(respuesta.data);
      console.log(respuesta.data)
    } catch (error) {
      console.error('Error al obtener los productos: ', error)
    }

  }

  useEffect(() => {
      consultarAPI();
  }, [])


  if(!accesorios){
    return (
       
      <div className="flex justify-center mt-10">
        <Spinner className="h-12 w-12" color="yellow"/>
      </div>

    )
  }
   
  return (
    <div className='container px-12 mx-auto'>
      <Typography  variant="h1" color= "blue-gray" className="text-2xl my-5" >
      Accesorios
      </Typography>

    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

     {
      
       accesorios.map(accesorio => (
        <Producto  key={accesorio._id} producto= {accesorio}/>
       ))

     }

     </div>

    </div>
    
  )
}

export default Accesorios