import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { SaludoContext } from '../context/SaludoProvider';

const Principal = () => {

    const {theme} = useContext(ThemeContext);
    const {hola} = useContext(SaludoContext);

    return (
        <div
            style={{
                background: theme.background,
                color: theme.color
            }}
        >
            <h4>Saludos desde principal</h4>
            <p>{hola}</p>
        </div>
    )
}

export default Principal