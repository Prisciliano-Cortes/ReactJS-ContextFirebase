import React, { useContext } from 'react';
import { ChatContext } from './context/ChatProvider';
import NavbBar from './component/NavbBar';
import Chat from './component/Chat';

{
    /*
    import Navbar from './component/Navbar';
    import Principal from './component/Principal';
    import ThemeProvider from './context/ThemeProvider';
    import SaludoProvider from './context/SaludoProvider';
    */
}

function App() {

    const { usuario } = useContext(ChatContext)
    return usuario !== null ? 
    (
        <div>
            {
                /*
                <ThemeProvider>
                    <SaludoProvider>
                        <Navbar />
                        <Principal />
                    </SaludoProvider>
                </ThemeProvider>
                */
            }
            <NavbBar />
            {
                usuario.estado ? 
                (
                    <Chat />
                )
                :
                (
                    <div className="lead text-center mt-5">Debes iniciar sesión</div>
                )
            }
        </div>
    )
    :
    (
        <div>
            Cargando...
        </div>
    )
}

export default App;
