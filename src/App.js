// import React from 'react';
// import ParticleBackground from './assets/ParticleBackground';
// import { AppRoutes } from './routes/AppRoutes';
// import { FaWhatsapp } from 'react-icons/fa';

// const App = () => {
//     return (
//         <>
//             {/* <ParticleBackground /> */}
//             <AppRoutes />
//             {/* <a
//                 href="https://wa.me/51926749330?text=Hola,%20soy%20[Tu%20Nombre].%20Estoy%20interesado%20en%20discutir%20posibles%20proyectos%20o%20colaboraciones.%20Por%20favor,%20déjame%20saber%20cómo%20puedo%20ayudarte."
//                 className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <FaWhatsapp size={24} />
//             </a> */}
//         </>
//     );
// };

// export default App;

import { BrowserRouter as Router } from 'react-router-dom';
// import { AppRoutes } from './routes/AppRoutes';
// import { AppProvider } from './context/AppProvider';
import { AppRoutes } from './routes/AppRoutes';
import { AppProvider } from './context/AppProvider';


const App = () => {

    return (
        <>
            <AppProvider>
                {/* <Router> */}
                    <AppRoutes />
                {/* </Router> */}
            </AppProvider>
        </>
    )
}

export default App;
