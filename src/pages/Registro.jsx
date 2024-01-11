import {
    Card,
    Input,
    Button,
    Typography,
    Alert
  } from "@material-tailwind/react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { useState } from "react"; 
  import axios from 'axios';
  import { useAuth } from "../context/authContext";

  export function Registro() {

    const {setToken} = useAuth();

    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();


    const [error, setError] = useState();

    const [exito, setExito] = useState();

    const actualizarUsuario = (e) => {
        const propiedad = e.target.name;
        const valor = e.target.value;
        //{ ...obj, key: 'value' }
        setUsuario({ ...usuario,  [propiedad] : valor  })
    }

    const registrarUsuario = async (e) => {
        e.preventDefault();


        const {nombre, email, password} = usuario;

        if ( !nombre || !email || !password ) {
            setError("Todos los campos son obligatorios")
            return;
        }

        //validar fuerza de la password
        const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

        if( !passwordRegex.test( password ) ){
          setError("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.")
          //Hola12345
          return;
        }
        
        console.log('registrando usuario...')

        try {

          // Llamar a API para registrar al usuario
          const respuesta = await axios.post('https://tenis-store-api-production.up.railway.app/auth/register', {
            nombre, 
            email, 
            password
          })

          const accessToken = respuesta.data.accessToken;
          localStorage.setItem('token', accessToken);
          setToken(accessToken)
          setError(null)
          setExito("Cuenta creada exitosamente!")

        } catch (error) {
          setError(error.response.data.message)
          setExito(null);
        }

        setTimeout(() => {
          navigate('/')
        }, 5000);


    }
    


    return (
       <Card color="transparent" shadow={false} className="mt-6">
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
              Tu email
            </Typography>
            <Input
              name="email"
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
          {
            exito && 
            <Alert color="green" className="my-4" variant="gradient">
                <span>{exito}</span>
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