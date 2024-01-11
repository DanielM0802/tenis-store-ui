import { useLocation } from "react-router-dom"
import { useState } from "react"
import { Typography } from "@material-tailwind/react";

function OrdenConfirmada() {

    const { state } = useLocation();

    const [orden, setOrden] = useState(state.data)



    return (
    <div>

        <Typography variant='h1' color="black" className='my-5 text-center'>
            Tu pago ha sido confirmado!
        </Typography>
        <div className="w-3/4 mx-auto">
            <Typography variant='p' color="black" className=''>
                ID de Orden: {orden.id}
            </Typography>
            <Typography variant='p' color="black" className=''>
                Estado: {orden.status}
            </Typography>

            <div className="my-8">
                <Typography variant='h4' color="black" className=''>
                    Informacion del pago
                </Typography>
                
                <Typography variant='paragraph' color="black" className=''>
                    Email: {orden.payment_source.paypal.email_address}
                </Typography>
                <Typography variant='paragraph' color="black" className=''>
                    Nombre: {orden.payment_source.paypal.name.given_name} {orden.payment_source.paypal.name.surname}
                </Typography>
            </div>


            <div className="my-8">
                <Typography variant='h4' color="black" className=''>
                    Detalles del pago
                </Typography>
                
                <Typography variant='paragraph' color="black" className=''>
                    Total: {orden.purchase_units[0].payments.captures[0].amount.value }
                </Typography>
                <Typography variant='paragraph' color="black" className=''>
                    Nombre: {orden.payment_source.paypal.name.given_name} {orden.payment_source.paypal.name.surname}
                </Typography>
            </div>
        </div>




    </div>
    )
}

export default OrdenConfirmada