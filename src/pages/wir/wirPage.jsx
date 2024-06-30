import { useNavigate } from "react-router-dom";
import bannerPrincipal from "../../assets/imagenes/conocenos.jpg";

const WirPage=()=>{
    const navigate = useNavigate();

    const handleClickHome=()=>{
        navigate("/");
    }
    return(
    <div>
        <div className="w-full h-96 bg-bg_favorite_1 relative">
            <img src={bannerPrincipal} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
            <div className="flex flex-col justify-end bg-bg_favorite_1 items-start h-96 z-20 relative space-y-4 p-4 sm:p-6 md:p-8">
                <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl font-bell text-start px-2">
                    Somos la empresa nacional de RRHH que más crece en Europa
                </h2>
            </div>
        </div>
        <div className="bg-white  h-auto mx-auto w-11/12">
            <div className="pt-10 px-10 pb-2 w-full">
                <p className="text-sm text-gray-400 ">
                    <span onClick={handleClickHome} className="hover:cursor-pointer text-blue-600 font-bold">
                        Roggero. M. Consulting
                    </span>
                    {' > '} 
                    wir
                </p>

            </div>
            
        </div>
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Montaner</h1>
                    <p className="text-lg text-gray-600">Un vistazo a la historia y logros de Montaner</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Historia</h2>
                    <p className="text-gray-700 mb-6">
                        Montaner es una de las empresas que más crecen en Europa según el prestigioso ránking de FT1000 de Financial Times y la que más crece a nivel nacional dentro del ámbito de los RRHH.
                    </p>
                    <p className="text-gray-700 mb-6">
                        En 1973, Ramón Montaner, comercial de una conocida empresa editorial en búsqueda de nuevas oportunidades profesionales, crea Montaner & Asociados junto a su esposa, Pilar Soldevila, para ayudar a las empresas a ser más competitivas ante la falta de profesionalización en los procesos de selección que ellos mismos habían experimentado.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Se propusieron crear un modelo nuevo de consultora de Recursos Humanos centrado en los principios de “Proximidad, Innovación y Servicio” que siguen hoy vigentes. Y decidieron abrir su proyecto a otros profesionales para que se asocien a ellos y puedan compartir conocimiento y enriquecer la experiencia de sus clientes.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Hoy día Montaner ha modernizado su marca para convertirse en Montaner. Con el objetivo de modernizar y adaptar la marca a las exigencias del siglo XXI, se elimina la coletilla “asociados” manteniendo la parte del nombre de marca. Así, no se pierde la huella histórica y profesional de Montaner en el sector de los Recursos Humanos y también se acerca más a los valores presentes y futuros de nuestro buyer persona.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Actualmente Montaner cuenta con 6 oficinas en España y Francia y está especializada en Consultoría y Gestión del cambio, Selección y Headhunting y HR Business Partner. Es la unidad de negocio ‘insignia’ de Grup Montaner, especialista en gestión del talento (consultoría, selección, trabajo temporal y outsourcing) y ha obtenido una facturación en 2021 de 78,5M€ y un crecimiento del 9%, respecto a 2020 y ampliando su gestión en 34 oficinas repartidas en 3 países.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conoce a Nuestro Fundador</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img
                            src="path/to/ramon-montaner.jpg"
                            alt="Ramón Montaner"
                            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Ramón Montaner</h3>
                            <p className="text-gray-700 mb-4">Fundador de Montaner</p>
                            <p className="text-gray-700">
                                Ramón Montaner, comercial de una conocida empresa editorial, fundó Montaner & Asociados en 1973 junto a su esposa, Pilar Soldevila. Con su experiencia y visión, transformó la empresa en una de las consultoras de Recursos Humanos más importantes de Europa.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestros Valores</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2"><strong>Estrategia centrada en las personas:</strong> Las personas son nuestro principal activo, nuestra seña de identidad y principal área de negocio.</li>
                        <li className="mb-2"><strong>Disfrutar:</strong> Sabemos que una de las claves del trabajo bien hecho es apasionarse por lo que se hace.</li>
                        <li className="mb-2"><strong>Calidad:</strong> El buen trabajo, el éxito y los resultados demostrables son nuestra motivación.</li>
                        <li className="mb-2"><strong>Superación:</strong> Afrontar nuevos retos y superar los nuevos obstáculos que presentan los recursos humanos nos permite crecer y desarrollarnos profesionalmente.</li>
                        <li className="mb-2"><strong>Efectividad:</strong> Nos orientamos a objetivos en el menor tiempo posible y atendiendo tanto a candidatos como a empresas.</li>
                        <li className="mb-2"><strong>Integridad:</strong> Somos firmes a nuestros valores y priorizamos a las personas por encima de todo.</li>
                        <li className="mb-2"><strong>Honestidad:</strong> No podemos entender una relación entre personas que no se base en la confianza mutua.</li>
                        <li className="mb-2"><strong>Transparencia:</strong> Ponemos toda la información y nuestros conocimientos al servicio de nuestros clientes y de los candidatos.</li>
                        <li className="mb-2"><strong>Implicación absoluta:</strong> Somos proactivos, no solo sabemos escuchar a las personas y a las empresas, sino que analizamos, proponemos y actuamos en base a nuestro amplio conocimiento.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WirPage;