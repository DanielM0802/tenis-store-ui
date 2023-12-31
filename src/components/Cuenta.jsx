import { Typography } from "@material-tailwind/react"
import EditarDatos from "./EditarDatos"
import { useAuth } from "../context/authContext"

function Cuenta() {

    const { usuario } = useAuth();


  return (
    <div>
        
        <div>
            <Typography variant='h2' color="blue-gray" className='text-2xl my-5 uppercase font-bold'>
                Mis Datos
            </Typography>
            <Typography variant='p' color="blue-gray" className='my-5'>
                Modifica tus datos personales a continuación para que tu cuenta esté actualizada.
            </Typography>
        </div>

        <div>
            <Typography variant='h2' color="blue-gray" className='text-2xl my-5 uppercase font-bold'>
                Detalles
            </Typography>

            <Typography variant='p' color="blue-gray" className='my-5'>
                {usuario.nombre}
            </Typography>
            <Typography variant='p' color="blue-gray" className='my-5'>
                {usuario.email}
            </Typography>

            <Typography variant='p' color="blue-gray" className='my-5'>
                
            </Typography>

            <EditarDatos/>


        </div>




    </div>
  )
}

export default Cuenta