import { Producto } from '../../components/Producto'
import { useState, useEffect } from 'react'



function Raquetas() {

  const [raquetas, setRaquetas] = useState();

  const consultarAPI = async () => {
    //simular consulta a api

    const productos = [
      {
        porcentajeDescuento: 10,
        nombre: "Wilson Pro Staff RF97 Autograph",
        descripcion: "Diseñada en colaboración con Roger Federer, la Wilson Pro Staff RF97 Autograph es una raqueta de tenis para jugadores avanzados. Ofrece potencia y control excepcionales.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2023/05/Raqueta-Wilson-Pro-Staff-97-V14.0-315gr-1-1-1024x1024.png",
        precio_anterior: 259990,
        precio_actual: 233991,
        grip_size: "4 3/8",
        head_size: "97 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
      {
        porcentajeDescuento: 20,
        nombre: "Babolat Pure Aero",
        descripcion: "La Babolat Pure Aero es conocida por su potencia y efecto. Utilizada por Rafael Nadal, esta raqueta es ideal para jugadores que buscan un juego agresivo y con mucho giro.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/07/Pure-Aero-Lite.jpg",
        precio_anterior: 299990,
        precio_actual: 239992,
        grip_size: "4 1/4",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 15,
        nombre: "Head Graphene 360+ Speed Pro",
        descripcion: "La Head Graphene 360+ Speed Pro es la elección de Novak Djokovic. Ofrece una combinación perfecta de velocidad y control para jugadores avanzados.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/08/Instinct-Mp-3-720x720.jpg",
        precio_anterior: 279990,
        precio_actual: 237991,
        grip_size: "4 3/8",
        head_size: "100 sq in",
        disponible_entrega: false,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 25,
        nombre: "Yonex EZONE 98",
        descripcion: "La Yonex EZONE 98 es conocida por su sensación cómoda y su capacidad para brindar potencia y control. Ideal para jugadores intermedios y avanzados.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/11/Raqueta-Yonex-Ezone-98-Plus-Sky-Azul-2022-720x720.jpg",
        precio_anterior: 229990,
        precio_actual: 172493,
        grip_size: "4 1/4",
        head_size: "98 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 10,
        nombre: "Prince Textreme Tour 100P",
        descripcion: "La Prince Textreme Tour 100P ofrece un equilibrio perfecto entre potencia y control. Su diseño aerodinámico la hace ideal para jugadores de nivel intermedio.",
        url_imagen: "https://www.tradeinn.com/f/13699/136996818/prince-raqueta-tenis-textreme-tour-100p.jpg",
        precio_anterior: 199990,
        precio_actual: 179991,
        grip_size: "4 1/2",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
      {
        porcentajeDescuento: 30,
        nombre: "INSTINCT MP Graphene 360+",
        descripcion: "El INSTINCT MP, ahora con la innovadora tecnología Graphene 360+, es perfecto para el jugador de torneo avanzado que necesita potencia sin esfuerzo y un nivel muy alto de comodidad.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/08/Instinct-Mp-3.jpg",
        precio_anterior: 239990,
        precio_actual: 167993,
        grip_size: "4 3/8",
        head_size: "95 sq in",
        disponible_entrega: false,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 12,
        nombre: "Babolat Pure Strike 100",
        descripcion: "Nada puede compararse con la sensación de pegarle a la bola exactamente en el punto preciso que querías. Siente el riguroso control de la Raqueta Babolat Pure Strike 100 cuando golpeas con fuerza y pleno de confianza",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/07/Raqueta-Babolat-Pure-Strike-100-7.jpg",
        precio_anterior: 209990,
        precio_actual: 184792,
        grip_size: "4 1/4",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 18,
        nombre: "Yonex Percept 100",
        descripcion: "La Yonex Percept 100 esta creada para jugadores de nivel intermedio a avanzado que buscan una raqueta flexible, con precisión y sensaciones.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2023/10/Raqueta-Yonex-Percept-100-300gr-1.jpg",
        precio_anterior: 269990,
        precio_actual: 221393,
        grip_size: "4 3/8",
        head_size: "97 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
    ];

    setRaquetas(productos);
    console.log(productos)
  }

  useEffect(() => {
      consultarAPI();
  }, [])
  

  if (!raquetas) {
    return(
      <p>Cargando....</p>
    )
  }


  const nombres = raquetas.map( raqueta => raqueta.nombre  )

  return (
    <div>
      <h1>Raquetas</h1>

      {
        raquetas.map( raqueta => (
          <Producto producto={raqueta} />
        ))
      }

      

    </div>
  )
}

export default Raquetas