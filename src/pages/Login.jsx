import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { NavLink } from "react-router-dom";
   
  export function Login() {
    return (
       <Card color="transparent" shadow={false} className="mt-6">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Ingresa tus datos para iniciar sesion
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu correo
            </Typography>
            <Input
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
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>
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