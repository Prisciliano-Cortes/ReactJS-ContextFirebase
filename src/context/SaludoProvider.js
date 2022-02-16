import React, { createContext } from 'react';

export const SaludoContext = createContext();

const SaludoProvider = (props) => {

    const hola = 'Hola desde global';

    return (
        <SaludoContext.Provider value={{hola}}>
            {props.children}
        </SaludoContext.Provider>
    )
}

export default SaludoProvider