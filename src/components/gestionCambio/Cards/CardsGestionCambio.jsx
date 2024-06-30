import { useNavigate } from "react-router-dom";

const CardGestionCambio = ({ navegator1,navegator2,title, description, image }) => {

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
                <p className="text-gray-600 mt-2">{description}</p>
                <h2 className="text-3xl font-bold py-2 text-red-700">
                Montaner, mucho más que organizar y alinear equipos
                </h2>
                <p className="text-gray-600 ">En Montaner llevamos 50 años ayudando a directores/as a definir, diseñar e implementar su estrategia. Nos gusta ser el copiloto que ayuda a la Dirección a conducir su empresa. Estamos comprometidos en impulsar la excelencia y el crecimiento de las organizaciones.</p>
                <p className="text-gray-600 mt-2">Nuestro enfoque va más allá de la simple gestión del cambio; trabajamos en colaboración con nuestros clientes para entender sus necesidades únicas y diseñar soluciones a medida que impulsen la transformación y el logro de los mejores resultados posibles. Fomentamos la cultura de innovación, liderazgo efectivo y compromiso, proporcionando servicios de consultoría, capacitación y desarrollo de habilidades que promuevan la eficiencia operativa y el empoderamiento de los equipos.</p>
            
            </div>
        </div>
    );
}

export default CardGestionCambio;