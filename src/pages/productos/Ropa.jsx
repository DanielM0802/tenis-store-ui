import { Producto } from "../../components/Producto"
import { Typography, Spinner } from "@material-tailwind/react"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Ropa() {

    const [ropa, setRopa] = useState();

    const consultarAPI = async () => {
      //simular consulta a api
      try {
        const respuesta = await axios.get('http://tenis-store-api-production.up.railway.app/productos/categoria/ropa');
        setRopa(respuesta.data);
        console.log(respuesta.data)
      } catch (error) {
        console.error('Error al obtener los productos: ', error)
      }
  
    }
  
    useEffect(() => {
        consultarAPI();
    }, [])
  
  
    if(!ropa){
      return (
         
        <div className="flex justify-center mt-10">
          <Spinner className="h-12 w-12" color="yellow"/>
        </div>
  
      )
    }

    return (

        <div className='container px-12 mx-auto'>
            <Typography variant="h1" color="blue-gray" className="text-2xl my-5" >
                Ropa
            </Typography>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {

                    ropa.map(ropa => (
                      <Producto  key={ropa._id} producto= {ropa}/>
                    ))

                }

            </div>

        </div>




    )
}

export default Ropa