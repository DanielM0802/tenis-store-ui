import { List, ListItem, Card, Typography, Avatar } from "@material-tailwind/react";
 
function Pedidos() {

  const pedidos = [
    {
      fecha: "22/11/2013",
      total: 179990,
      numeroPedido: 'TS1728372',
      productos: ["https://tenisygolf.cl/wp-content/uploads/2021/08/WILSON-CHAMPIONSHIP.jpg", "https://sursports.cl/wp-content/uploads/2022/08/Instinct-Mp-3-720x720.jpg"]
    },
    {
      fecha: "25/11/2013",
      total: 279990,
      numeroPedido: 'TS1724572',
      productos: ["https://sursports.cl/wp-content/uploads/2022/11/Raqueta-Yonex-Ezone-98-Plus-Sky-Azul-2022-720x720.jpg", "https://sursports.cl/wp-content/uploads/2022/08/Instinct-Mp-3-720x720.jpg", "https://www.deportescarlosmiguel.com/imagebyhash/91d32b77a383e5b28ef92ccfe59e5133869d3b86.jpg"]
    }
  ]

  return (
    <Card className=" ">
      <List>


        {
          pedidos.map(  pedido => ( 
            <ListItem key={pedido.numeroPedido}>

              <div className="flex flex-col">
                <Typography variant='p' color="blue-gray" className='font-bold'>
                        {pedido.fecha} | ${pedido.total}
                </Typography>
                <Typography variant='p' color="blue-gray" className=''>
                        Numero de pedido: {pedido.numeroPedido}
                </Typography>

                <div className="flex mt-5">
                  {
                    pedido.productos.map( producto => (
                      <Avatar src={producto} alt="avatar" variant="square" className="border border-gray-400 mr-2" />

                    ))
                  }
                </div>
              </div>

    
            </ListItem>
           ))
        }



      </List>
    </Card>
  );
}

export default Pedidos