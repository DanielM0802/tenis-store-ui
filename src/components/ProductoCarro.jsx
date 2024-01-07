import { Typography, Avatar } from "@material-tailwind/react"
import { useState, useEffect } from "react";
import { useCarrito } from "../context/carritoContext";


function ProductoCarro({producto}) {

    const {agregarProducto, eliminarProducto} = useCarrito();


    const {_id, url_imagen, nombre, precio_actual, cantidad} = producto;

    const [cantidadEditable, setCantidadEditable] = useState(cantidad)

    useEffect(() => {
      

        //agregarProducto(producto, 1);

    }, [cantidadEditable])


    const editarCantidad = e => {

        const nuevaCantidad = e.target.value;
        nuevaCantidad <= 0 && eliminarProducto(_id);
        nuevaCantidad > cantidadEditable ? agregarProducto(producto, 1) : agregarProducto(producto, -1);
        setCantidadEditable(e.target.value)
    }

  return (
    <div className="flex justify-between items-center gap-4">
        <Avatar src={url_imagen} alt="avatar" variant="square" className="border border-gray-400 mr-2" />
        <div className="w-80">
            <Typography variant='p' color="black" className=''>
                {nombre}
            </Typography>
        </div>
        <Typography variant='p' color="black" className=''>
            ${precio_actual}
        </Typography>
       
        <input  
            className="w-14 border border-gray-800" type="number" 
            value={cantidadEditable} 
            onChange={ (e) => editarCantidad(e)  } 
            max={10}
            min={0}
        />
      
        <Typography variant='p' color="black" className=''>
            ${ parseInt(precio_actual)  * parseInt(cantidad) }
        </Typography>


    </div>
  )
}

export default ProductoCarro