import { Producto } from '../../components/Producto'
import { useState, useEffect } from 'react'



function Raquetas() {

  const [raquetas, setRaquetas] = useState([]);

  const consultarAPI = async () => {
    //simular consulta a api

    const productos = [
      {
        porcentajeDescuento: 10,
        nombre: "Wilson Pro Staff RF97 Autograph",
        descripcion: "Diseñada en colaboración con Roger Federer, la Wilson Pro Staff RF97 Autograph es una raqueta de tenis para jugadores avanzados. Ofrece potencia y control excepcionales.",
        url_imagen: "imagen1.jpg",
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
        url_imagen: "imagen2.jpg",
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
        url_imagen: "imagen3.jpg",
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
        url_imagen: "imagen4.jpg",
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
        url_imagen: "imagen5.jpg",
        precio_anterior: 199990,
        precio_actual: 179991,
        grip_size: "4 1/2",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
      {
        porcentajeDescuento: 30,
        nombre: "Dunlop CX 200 Tour 18x20",
        descripcion: "La Dunlop CX 200 Tour 18x20 es una raqueta de tenis de precisión con un patrón de encordado cerrado. Ofrece un control excepcional en golpes planos y topspin.",
        url_imagen: "imagen6.jpg",
        precio_anterior: 239990,
        precio_actual: 167993,
        grip_size: "4 3/8",
        head_size: "95 sq in",
        disponible_entrega: false,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 12,
        nombre: "Volkl V-Feel V8 Pro",
        descripcion: "La Volkl V-Feel V8 Pro es una raqueta versátil que proporciona una combinación única de potencia y control. Adecuada para jugadores de todos los niveles.",
        url_imagen: "imagen7.jpg",
        precio_anterior: 209990,
        precio_actual: 184792,
        grip_size: "4 1/4",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 18,
        nombre: "Pacific BX2 X Force Pro",
        descripcion: "La Pacific BX2 X Force Pro es una raqueta para jugadores agresivos que buscan potencia y control. Su diseño moderno la hace destacar en la cancha.",
        url_imagen: "imagen8.jpg",
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



  return (
    <div>
      <h1>Raquetas</h1>
      <Producto/>
      <Producto/>
      <Producto/>
      <Producto/>
    </div>
  )
}

export default Raquetas