import { useNavigate } from "react-router-dom";

const CardConsultoraHeadhounter = ({ navegator1,navegator2,title, description, image }) => {

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
                    Executive Search: búsqueda y selección de directivos
                </h2>
                <p className="text-gray-600 ">Nuestros consultores de headhunting conocen el mercado y son capaces de atraer los perfiles más difíciles. Realizamos una preselección de candidatos exhaustiva y entrevistas con un alto nivel de confidencialidad, tanto para las empresas como para los candidatos.</p>
                <p className="text-gray-600 mt-2">El servicio de Headhunting para empresas garantiza el nivel de confidencialidad de datos de los solicitantes, así como la atracción del mejor talento activo que aporte expertise, enfoque y éxito en la misión y proyecto empresarial.</p>
            </div>
        </div>
    );
}

export default CardConsultoraHeadhounter;