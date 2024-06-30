import { useNavigate } from "react-router-dom";

const CardHrBusinessPartner = ({ navegator1,navegator2,title, description, image }) => {

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
                {/* <p className="text-gray-600 ">{description}</p> */}
                {/* <h2 className="text-3xl font-bold py-2 text-red-700">
                    Executive Search: búsqueda y selección de directivos
                </h2> */}
                <p className="text-gray-600">En los últimos años, las compañías han ido cambiando a medida que surgían nuevas necesidades y retos que debían resolver. Aunque la gestión del cambio no siempre es fácil, la alineación de cada equipo y de cada persona con la estrategia de negocio debe ser una prioridad para conseguir los mejores resultados. Por ello, cada vez más empresas han decidido contar con la figura de HRBP o Human Resources Business Partner.</p>
                <p className="text-gray-600 mt-2">Human Resources Business Partner es una función dentro de la empresa que puede ser potenciada por una persona o por una línea de negocio de la propia empresa. Mediante HRBP unimos transversalmente los objetivos y políticas de la empresa con el buen funcionamiento del departamento de recursos humanos, permitiendo conseguir la implicación total de todas las áreas del negocio y una mejora en la productividad y eficiencia de la empresa.</p>
            </div>
        </div>
    );
}

export default CardHrBusinessPartner;