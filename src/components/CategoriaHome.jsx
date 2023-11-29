import {
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
function CategoriaHome({categoria}) {

    const { nombre, ruta, urlImagen } = categoria;

    return (
        <Link to={ruta}>
            <div className='h-64 w-52 rounded-xl'>
                <div className={`h-full bg-[url('${urlImagen}')] bg-cover bg-no-repeat bg-center`}>

                    <div className='h-full flex flex-col justify-center items-center bg-black/40 rounded-xl'>
                        <Typography variant='p' color="white" className=''>
                        🔥{nombre}🔥
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
  }

  export default CategoriaHome