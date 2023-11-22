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
 
function EditarDatos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
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
            <Input label="nombre" size="lg" />

            <Typography className="-mb-2" variant="h6">
              Rut
            </Typography>
            <Input label="rut" size="lg" />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Actualizar datos
            </Button>
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