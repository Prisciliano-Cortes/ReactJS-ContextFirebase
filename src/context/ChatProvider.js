import React, { createContext, useEffect, useState } from 'react';
import {provider, db, auth} from '../firebase';

export const ChatContext = createContext()

const ChatProvider = (props) => {

    const dataUsuario = { uid: null, email: null, estado: null }
    const [usuario , setUsuario] = useState(dataUsuario);
    const [mensaje, setMensaje] = useState([]);

    useEffect(() => {
        detectarUsuario();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged( user => {
            if (user) {
                setUsuario({ uid: user.uid, email: user.email, estado: true })
                cargarMensajes()
            } else {
                setUsuario({ uid: null, email: null, estado: false })
            }
        })
    }

    const ingresoUsuario = async() => {

        try {
            await auth.signInWithPopup(provider)

        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    const cargarMensajes = () => {
        db.collection('chat').orderBy('fecha')
        .onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            setMensaje(arrayMensajes)
        })
    }

    const agregarMensajes = async(uidChat, textoInput) => {

        try {

            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidChat
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ChatContext.Provider 
            value={{
                usuario, 
                ingresoUsuario, 
                cerrarSesion, 
                mensaje,
                agregarMensajes
            }}
        >
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider