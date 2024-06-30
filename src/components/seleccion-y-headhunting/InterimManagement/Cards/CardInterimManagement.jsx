import { useNavigate } from "react-router-dom";

const CardInterimManagement = ({ navegator1,navegator2,title, description, image }) => {

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
                <p className="text-gray-600 ">{description}</p>
                <h2 className="text-3xl font-bold py-2 text-red-700">
                Profesionales de dirección y gestión para Executive Interim Management
                </h2>
                <p className="text-gray-600 ">Los profesionales de interim management son expertos en la dirección y gestión de los procesos, los cuales se incorporan a la empresa de forma externa durante un período determinado de tiempo con la finalidad de cumplir unos objetivos previos establecidos. En Montaner te ayudamos y asesoramos en la búsqueda de perfiles de Interim Management más adecuados a tus necesidades y requerimientos. Encontramos a los profesionales capaces de asumir el liderazgo y la dirección durante el proceso de cambio que necesite tu organización en el tiempo que este proceso de transformación precise.</p>
                
            </div>
        </div>
    );
}

export default CardInterimManagement;