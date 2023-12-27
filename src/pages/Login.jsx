import {
    Card,
    Input,
    Button,
    Typography,
    Alert
  } from "@material-tailwind/react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import axios from "axios";
  import { useAuth } from "../context/authContext";
   
  export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [exito, setExito] = useState();

    const navigate = useNavigate();
    const {setToken} = useAuth();

    const loginUsuario = async (e) => {
      e.preventDefault();

      try {

        const respuesta = await axios.post('http://localhost:3000/auth/login', {
          email,
          password
        })

        const accessToken = respuesta.data.accessToken;
        localStorage.setItem('token', accessToken);
        await setToken(accessToken)
        setError(null);
        setExito("Inicio de sesion exitoso!")

        setTimeout(() => {
          navigate('/')
        }, 5000);


      } catch (error) {
        setExito(null);
        setError(error.response.data.message)
        
      }


    }

    return (
       <Card color="transparent" shadow={false} className="mt-6">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Ingresa tus datos para iniciar sesion
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={loginUsuario}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu email
            </Typography>
            <Input
              onChange={ (e) => setEmail(e.target.value)  }
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
              onChange={ (e) => setPassword(e.target.value)  }
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



          <Button className="mt-6" fullWidth type="submit">
            Iniciar Sesion
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            No tienes una cuenta?{" "}
            <NavLink to={'/registro'} className="font-medium text-gray-900">
              Registrate
            </NavLink>
          </Typography>
        </form>
      </Card>
    );
  }

export default Login