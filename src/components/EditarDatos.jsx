import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { useState } from "react";
 

function EditarDatos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const { token, usuario, setUsuario } = useAuth();

  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();

  const actualizarUsuario = async () => {

    try {
      console.log(usuario._id)

      const data =   {
        nombre,
        password
      }
      

      const headers = {
        Authorization: `Bearer ${token}`
      }

      const respuesta = await axios.put(`https://tenis-store-api-production.up.railway.app/usuarios/${usuario._id}`, data, {headers},)
      setUsuario(respuesta.data)
    } catch (error) {
      console.log(error)
    }

  }

 
  return (
    <>
      <Button onClick={handleOpen}>Editar</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Edita tus datos personales
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Nombre
            </Typography>
            <Input 
              onChange={ (e) => setNombre(e.target.value)  }
              label="nombre" size="lg" 
            />

            <Typography className="-mb-2" variant="h6">
              Contraseña
            </Typography>
            <Input 
              onChange={ (e) => setPassword(e.target.value)  }
              label="password" size="lg" type="password" 
            />

          </CardBody>
          <CardFooter className="pt-0">
            <div onClick={actualizarUsuario}>
              <Button variant="gradient" onClick={handleOpen} fullWidth>
                Actualizar datos
              </Button>
            </div>
            <Button variant="text" color="gray" onClick={handleOpen} fullWidth>
                Cancelar
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default EditarDatos