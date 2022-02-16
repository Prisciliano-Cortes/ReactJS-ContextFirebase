import React, { useContext, useState } from 'react';

import { ChatContext } from '../context/ChatProvider';

const Agregar = () => {

    const {agregarMensajes, usuario} = useContext(ChatContext);
    const [ms, setMs] = useState()

    const agregar = (e) => {
        e.preventDefault();

        if(!ms.trim()) {
            console.log('Viene vacío');
            return;
        }

        agregarMensajes(usuario.uid, ms);
        setMs('');
    }

    return (
        <form 
            className="fixed-bottom input-group p-3 bg-dark"
            onClick={ agregar }
        >
            <input 
                type="text"
                className="form-control"
                value={ms}
                onChange={ e => setMs(e.target.value)}
            />

            <div className="input-group-append">
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Enviar
                </button>
            </div>

        </form>
    )
}

export default Agregar