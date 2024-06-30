import { useNavigate } from "react-router-dom";

const CardEvaluaciones = ({ navegator1,navegator2,title, description, image }) => {

    const navigate = useNavigate();

    const handleClickHome=()=>{
        navigate("/");
    }

    return (
        <div className="bg-white shadow-md p-0 flex flex-nowrap w-full h-auto ">
            <div className="w-full ">
                {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
            </div>
            <div className="p-4 w-full">
                <p className="text-sm text-gray-400 ">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-blue-600 font-bold">
                        {navegator1} 
                    </span>
                    {' > '} 
                    {navegator2}
                </p>
                <h2 className="text-3xl font-bold py-2 text-gray-700">{title}</h2>
                <div className="container mx-auto">
                    <h3 className="text-lg font-semibold text-start text-red-800">Conoce el talento de tu empresa.</h3>
                    <h3 className="text-lg font-semibold text-start text-red-800">Potencia sus habilidades.</h3>
                    <h3 className="text-lg font-semibold text-start text-red-800">Mejora tu organización.</h3>
                    <p className="text-base text-gray-700 my-6">
                        Las evaluaciones de desempeño profesional son una herramienta clave para alcanzar una mayor productividad de las personas. 
                        Conocer las capacidades de tus equipos y lo que pueden aportar a la organización es la mejor vía para equiparlos con las herramientas necesarias para fomentar tanto el crecimiento profesional como el de la propia organización.
                    </p>
                    <p className="text-base text-gray-700 mb-6">
                        En Montaner & Asociados te ayudamos a evaluar a tus equipos de trabajo aplicando el foco en las personas que los forman:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 mb-6">
                        <li className="mb-2">Detectar y desarrollar el talento exclusivo de tu empresa.</li>
                        <li className="mb-2">Realizar evaluaciones a medida de tus retos y tu equipo.</li>
                        <li className="mb-2">Premiar la productividad y el rendimiento de los empleados en proceso de promoción interna o de selección.</li>
                        <li className="mb-2">Medir las competencias personales, el potencial y los intereses de las personas contrastándolo con la estrategia empresarial y los objetivos de negocio.</li>
                        <li className="mb-2">Incorporar planes de desarrollo de competencias adaptados a cada persona y puesto.</li>
                    </ul>
                </div>    
                
            </div>
        </div>
    );
}

export default CardEvaluaciones;



// const CardEvaluacion = ({ navegator1,navegator2,title, description, image,subTitle_1,description_1 }) => {
//     return (
//         <div className="bg-white shadow-md p-0 flex flex-nowrap w-full h-auto ">
//             <div className="w-full ">
//                 {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
//             </div>
//             <div className="p-4 w-full">
//                 <p className="text-sm text-gray-400 ">{navegator1} {'>'} {navegator2}</p>
//                 <h2 className="text-3xl font-bold py-2">{title}</h2>
//                 <div className="container mx-auto">
//                     <h3 className="text-lg font-semibold text-start text-red-800">Conoce el talento de tu empresa.</h3>
//                     <h3 className="text-lg font-semibold text-start text-red-800">Potencia sus habilidades.</h3>
//                     <h3 className="text-lg font-semibold text-start text-red-800">Mejora tu organización.</h3>
//                     <p className="text-base text-gray-700 my-6">
//                         Las evaluaciones de desempeño profesional son una herramienta clave para alcanzar una mayor productividad de las personas. 
//                         Conocer las capacidades de tus equipos y lo que pueden aportar a la organización es la mejor vía para equiparlos con las herramientas necesarias para fomentar tanto el crecimiento profesional como el de la propia organización.
//                     </p>
//                     <p className="text-base text-gray-700 mb-6">
//                         En Montaner & Asociados te ayudamos a evaluar a tus equipos de trabajo aplicando el foco en las personas que los forman:
//                     </p>
//                     <ul className="list-disc list-inside text-base text-gray-700 mb-6">
//                         <li className="mb-2">Detectar y desarrollar el talento exclusivo de tu empresa.</li>
//                         <li className="mb-2">Realizar evaluaciones a medida de tus retos y tu equipo.</li>
//                         <li className="mb-2">Premiar la productividad y el rendimiento de los empleados en proceso de promoción interna o de selección.</li>
//                         <li className="mb-2">Medir las competencias personales, el potencial y los intereses de las personas contrastándolo con la estrategia empresarial y los objetivos de negocio.</li>
//                         <li className="mb-2">Incorporar planes de desarrollo de competencias adaptados a cada persona y puesto.</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CardEvaluacion;