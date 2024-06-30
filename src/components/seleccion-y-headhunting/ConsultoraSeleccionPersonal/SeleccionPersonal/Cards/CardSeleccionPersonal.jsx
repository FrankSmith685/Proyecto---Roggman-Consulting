import { useNavigate } from "react-router-dom";

const CardSeleccionPersonal = ({ navegator1,navegator2,navegator3,title, description, image,subTitle_1,description_1 }) => {
    
    const navigate = useNavigate();

    const handleClickHome=()=>{
        navigate("/");
    }
    const handleClickSeleccionPersonal=()=>{
        navigate("/seleccion-y-headhunting/consultora-seleccion-personal-y-reclutamiento");
    }

    return (
        <div className="bg-white shadow-md p-0 flex flex-nowrap w-full h-h_custom_1">
            <div className="w-full ">
                {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
            </div>
            <div className="p-4 w-full">
                <p className="text-sm text-gray-400 ">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-blue-600 font-bold">
                        {navegator1} 
                    </span>
                    {' > '} 
                    <span onClick={handleClickSeleccionPersonal} className="hover:cursor-pointer text-blue-600 font-bold">
                        {navegator2} 
                    </span>
                    {' > '} 
                    {navegator3}
                </p>
                <h2 className="text-3xl font-bold py-2 text-gray-700">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <h2 className="text-3xl font-bold py-2 text-red-700">
                Montaner es mucho más que una empresa de selección de directivos
                </h2>
                <p className="text-gray-600 ">Encontrar al talento que necesitas es una de nuestras especialidades cuando hablamos de selección de mandos intermedios y directivos competentes. Pero Montaner es mucho más. Nuestros servicios en consultoría, gestión del cambio, y formaciones para equipos y directivos, pueden ayudarte a satisfacer diversas necesidades que se dan en el día a día de las compañías. Somos especialistas en el encaje cultural entre directivos y empresas.</p>
            </div>
        </div>
    );
}

export default CardSeleccionPersonal;