import { useNavigate } from "react-router-dom";

const CardAcompanamientoDirectivo = ({ navegator1,navegator2,title, description, image }) => {

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
                <p className="text-gray-600 mt-2">En Montaner te ofrecemos nuestro servicio de coaching para empresas. Contamos con un gran equipo profesional que te brinda la ayuda que necesitas para liderar a tus equipos y reevaluar la carrera profesional en momentos de cambio. En situaciones en las que se necesite una perspectiva innovadora en cuanto a coaching y liderazgo empresarial, nosotros marcamos la diferencia.</p>
                <p className="text-gray-600 mt-2">En Montaner te ofrecemos nuestro servicio de coaching para empresas. Contamos con un gran equipo profesional que te brinda la ayuda que necesitas para liderar a tus equipos y reevaluar la carrera profesional en momentos de cambio. En situaciones en las que se necesite una perspectiva innovadora en cuanto a coaching y liderazgo empresarial, nosotros marcamos la diferencia.</p>
                <p className="text-gray-600 mt-2">En Montaner te ayudamos a dirigir tu equipo, pero también a repensar tu futuro profesional como director/a y líder. Más aún en situaciones de cambio como el momento actual, donde puede que tus principios dejen de estar alineados con tu empresa o se esté afrontando un cambio imprevisto que no has elegido tú mismo/a.</p>
                <h2 className="text-3xl font-bold py-2 text-red-700">
                    Asesoramiento profesional y desarrollo personal con el método FOAR
                </h2>
                <p className="text-gray-600 ">La metodología FOAR de Montaner (Fortalezas, Oportunidades, Aspiraciones y Resultados) es un asesoramiento personal sobre tu futuro profesional mediante el cúal nos centramos en las fortalezas y aspectos positivos de tu perfil para ayudarte a conseguir tus objetivos.</p>
                <p className="text-gray-600 mt-2">En Montaner nos apoyamos en este método para ayudar a los equipos a lograr a desarrollar su máximo potencial. Con este enfoque tan común en el coaching para empresas, las personas pueden recibir comentarios constructivos, desarrollar una mayor conciencia de sí mismas y explorar diferentes opciones  de crecimiento y desarrollo. </p>
            
            </div>
        </div>
    );
}

export default CardAcompanamientoDirectivo;