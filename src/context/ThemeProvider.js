import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext()

const ThemeProvider = (props) => {

    const themes = {
        color: '#000',
        background: '#eee'
    }

    const [theme, setTheme] = useState(themes);

    useEffect(() => {
        if(localStorage.getItem('LocalTheme')){
            const LocalTheme = JSON.parse(localStorage.getItem('LocalTheme'))
            setTheme(LocalTheme)
        }
    }, [])
    
    const cambiarColor = (valor) => {
        setTheme(valor)
        localStorage.setItem('LocalTheme', JSON.stringify(valor))
        console.log(valor)
        console.log('color guardado')
    }
    
    return (
        <ThemeContext.Provider value={{theme, cambiarColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider