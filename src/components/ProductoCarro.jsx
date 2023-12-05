import { Typography, Avatar } from "@material-tailwind/react"

function ProductoCarro({producto}) {

    const {url_imagen, nombre, precio_actual, cantidad} = producto;

  return (
    <div className="flex justify-between">
        <Avatar src={url_imagen} alt="avatar" variant="square" className="border border-gray-400 mr-2" />
        <div className="w-80">
            <Typography variant='p' color="black" className=''>
                {nombre}
            </Typography>
        </div>
        <Typography variant='p' color="black" className=''>
            ${precio_actual}
        </Typography>
        <Typography variant='p' color="black" className=''>
            {cantidad}
        </Typography>
        <Typography variant='p' color="black" className=''>
            ${ parseInt(precio_actual)  * parseInt(cantidad) }
        </Typography>

    </div>
  )
}

export default ProductoCarro