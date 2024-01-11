import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {
    const [token, setToken] = useState( localStorage.getItem('token') || null  )
    const [usuario, setUsuario] = useState(null);

    //funcion para guardar datos de inicio de sesion
    const guardarDatos = async () => {
        try {
            
            const respuesta = await axios.get('https://tenis-store-api-production.up.railway.app/usuarios/detalles', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            } )
            setUsuario(respuesta.data);    
        } catch (error) {
            console.error(error)
        }
 
    }

    useEffect( () => {
      
        async function getData() {
            console.log('cambio en state de token')
            if(token){
                await guardarDatos();
            }
          }

        getData();

    }, [token])

    //funcion para cerrar sesion
    const logout = () => {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem('token')
    }

    return(
        <AuthContext.Provider
            value={{token, usuario, setToken, setUsuario, logout}}
        >
        {children}
        </AuthContext.Provider>
    )


} 

export const useAuth = () => {
    return useContext(AuthContext);
}