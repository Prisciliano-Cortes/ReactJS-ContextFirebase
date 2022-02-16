import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {

    const {theme, cambiarColor} = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme.background,
                color: theme.color
            }}
        >
            <h1>Navbar</h1>
            <label>Color texto</label>
            <input
                type="color"
                onChange={ e => cambiarColor({...theme, color: e.target.value})}
            />

            <br />
            <label>Color fondo</label>
            <input
                type="color"
                onChange={ e => cambiarColor({...theme, background: e.target.value})}
            />
        </div>
    )
}

export default Navbar