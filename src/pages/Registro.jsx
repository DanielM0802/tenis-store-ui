import {
    Card,
    Input,
    Button,
    Typography,
    Alert
  } from "@material-tailwind/react";
  import { NavLink } from "react-router-dom";
  import { useState } from "react"; 

  export function Registro() {

    const [usuario, setUsuario] = useState({
        nombre: "",
        correo: "",
        password: ""
    })

    const [error, setError] = useState();

    const actualizarUsuario = (e) => {
        const propiedad = e.target.name;
        const valor = e.target.value;
        //{ ...obj, key: 'value' }
        setUsuario({ ...usuario,  [propiedad] : valor  })
    }

    const registrarUsuario = (e) => {
        e.preventDefault();

        console.log('tenemos que validar el objeto user: ')
        console.log(usuario);

        const {nombre, correo, password} = usuario;

        if ( !nombre || !correo || !password ) {
            setError("Todos los campos son obligatorios")
            return;
        }


        console.log('registrando usuario...')
        //llamar a ruta encargada de registrar usuarios

    }

    


    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Registro
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Ingresa tus datos para registrarte
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={registrarUsuario} >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu nombre
            </Typography>
            <Input
              name="nombre"
              onChange={actualizarUsuario}    
              size="lg"
              placeholder="tu nombre"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu correo
            </Typography>
            <Input
              name="correo"
              onChange={actualizarUsuario}    
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              name="password"
              onChange={actualizarUsuario}    
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          {
            error && 
            <Alert color="red" className="my-4" variant="gradient">
                <span>{error}</span>
            </Alert>

          }    

          <Button type="submit" className="mt-6" fullWidth>
            Registrarse
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Ya tienes una cuenta?{" "}
            <NavLink to={'/login'} className="font-medium text-gray-900">
              Inicia Sesion
            </NavLink>
          </Typography>
        </form>
      </Card>
    );
  }

export default Registro