import { useNavigate } from "react-router-dom";

const CardFormaciones = ({ navegator1,navegator2,title, description, image }) => {

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
                <p className="text-gray-600 mt-2">En Montaner tenemos un programa de formación ‘ready to go’ propio, los #humanBits: unidades mínimas de información entre personas. Nos centramos en tres temáticas básicas para el buen funcionamiento de cualquier equipo: liderazgo, trabajo en equipo y comunicación.</p>
                <p className="text-gray-600 mt-2">Los #humanBits son formaciones para empresas basadas en entrenamientos que desarrollan habilidades concretas que consiguen cambios reales y evidentes a corto plazo. Conseguimos desarrollar la mejor versión de las personas.

</p>
                <h2 className="text-3xl font-bold py-2 text-red-700">
                Formaciones con alto impacto en las personas
                </h2>
                <p className="text-gray-600 ">Estas nuevas formaciones nacen para ayudar a las empresas a liderar, comunicar y mejorar el trabajar en equipo de forma efectiva, y con alta orientación a resultados. Buscamos desarrollar la mejor versión de cada persona, sea empleado, mando intermedio o director.</p>
                <p className="text-gray-600 mt-2">Los #humanBits nacen con el objetivo de capacitar a las personas con herramientas efectivas que aporten valor inmediato a las organizaciones y sus personas, tanto a nivel profesional como personal.</p>
            
            </div>
        </div>
    );
}

export default CardFormaciones;