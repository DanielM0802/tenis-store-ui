import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0);

    const agregarProducto = (producto, cantidad) => {
        //verificar si el producto ya esta en el carro
        const productoEncontrado = carrito.find(  item => item._id === producto._id  );

        if(productoEncontrado){
            setCarrito( prevCarrito =>    prevCarrito.map( item =>
                item._id === producto._id ?  {...item, cantidad: item.cantidad + cantidad } : item  
             ) );
        }else{
            //como se esta agregando por primera vez lo iniciamos con cantidad 1
            setCarrito( prevCarrito => [...prevCarrito, {...producto, cantidad: 1 }] );
        }

    }

    const eliminarProducto = productoId => {
        setCarrito( prevCarrito => prevCarrito.filter( item => item._id !== productoId  )  )
    }

    const vaciarCarrito = () => setCarrito([]);


    useEffect(() => {
        setTotalCarrito( calcularTotal()) ;

    }, [carrito])

    const calcularTotal = () => {
        return carrito.reduce( (total, producto) =>  total + producto.precio_actual * producto.cantidad, 0 )
    }



    return(
        <CarritoContext.Provider
            value={{
                carrito,
                agregarProducto,
                eliminarProducto,
                vaciarCarrito,
                calcularTotal,
                totalCarrito
            }}
        >{children}</CarritoContext.Provider>
    )

}

export const useCarrito = () => {
    return useContext(CarritoContext);
}
