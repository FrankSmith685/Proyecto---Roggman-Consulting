import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 


import { useState } from "react";
import ContactForm from "../../common/contactForm.jsx";

//Imagen Principal
import imagenPrincipal from "../../../assets/imagenes/consultoria/imagen1.jpg";

// Imagen Servicio
import service1 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen1.jpg";
import service2 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen2.jpg";
import service3 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen3.jpg";
import service4 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen4.jpg";
import CardEvaluaciones from "./Cards/CardEvaluaciones.jsx";
import { Link } from "react-scroll";
// import CardEvaluacion from "../Cards/CardEvaluacion.jsx";

const Evaluaciones = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Evaluaciones",
        title:"Evaluaciones de personal",
        image: imagenPrincipal
    };

    const [ref1, inView1] = useInView();


    // Servicios
    const services = [
        { name: "Evaluación del personal", description:"Evaluaciones del desempeño personal para incrementar la productividad." },
        { name: "Interim Management", description: "Externalización de cargos directivos y de gestión con duración determinada y por objetivos." },
        { name: "Selección 'Onboarding' ",description: "Integración de mandos intermedios y directivos/as."},
        { name: "Headhunting", description: "Evaluación y contratación personalizada para puestos directivos y gerencia."},
    ];

    const backgrounds = [
        `url(${service1})`,
        `url(${service2})`,
        `url(${service3})`,
        `url(${service4})`,
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        company: '',
        interest: '',
        phone: '',
        province: '',
        referral: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log(formData);
      };

    return (
        <div className="p-0"> 
            <CardEvaluaciones
                navegator1={cardData.navegator1} 
                navegator2={cardData.navegator2}
                title={cardData.title}
                image={cardData.image}
            />

            <div ref={ref1} className="bg-red-800 w-full h-auto flex items-center justify-center py-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                       Te ayudamos a encontrar talento de alto nivel
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className=""
                    >
                    <Link
                        to="scroll-target"
                        smooth={true}
                        duration={500}
                        className="hover:cursor-pointer bg-transparent border-white border-2 px-10 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                        Quiero informarme
                    </Link>
                    </motion.div>
                </div>
            </div>

            <div className="mx-auto px-10 py-10 w-11/12">
                <h3 className="text-lg font-semibold text-start mb-4 text-gray-700">Las mejores herramientas en evaluación de personal.</h3>
                <p className="text-base text-gray-700 mb-4">
                    En Montaner & Asociados contamos con herramientas propias para realizar eficientes evaluaciones de personal.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Assessment Center: evaluación del rendimiento de tus empleados</h3>
                <p className="text-base text-gray-700 mb-4">
                    Realizamos pruebas propias para medir las competencias y potencial de las personas, tanto a nivel individual como en grupo de trabajo, creando planes de desarrollo y hojas de ruta. En Montaner & Asociados aplicamos procesos de evaluación propio para calcular el rendimiento de tus empleados en un proceso de promoción interna o de selección.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-4">Test competencial BSM©: Toma decisiones más seguras</h3>
                <p className="text-base text-gray-700 mb-4">
                    BSM es un servicio único de Montaner & Asociados usado en más de 50.000 evaluaciones. Este servicio te permitirá medir las competencias de una persona para tomar mejores decisiones internas referentes a planes de formación, promociones internas, reorganización de equipos o retribución.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-4">Las características del BSM que lo convierten en un servicio de identificación y evaluación del talento son:</h4>
                <ul className="list-disc list-inside text-base text-gray-700 mb-4">
                    <li className="mb-2">Modelo online</li>
                    <li className="mb-2">Fácil aplicación</li>
                    <li className="mb-2">Flexible para elegir factores, personas y rango de evaluación (autoevaluación, 90º, 180º o 360º)</li>
                    <li className="mb-2">Hasta 5 niveles de evaluación y 36 factores competenciales</li>
                    <li className="mb-2">Permite incluir evaluaciones de externos como clientes, partners o proveedores</li>
                </ul>
            </div>

            <div className="mx-auto px-10 w-11/12">
                <h2 className="text-lg font-semibold text-start mb-2 text-gray-700">Especialidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                            style={{ backgroundImage: backgrounds[index] }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`absolute inset-0 flex items-center justify-center transition duration-300 ${hoveredIndex === index ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-50'}`}>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mt-2">{service.name}</h3>
                                    <p className="text-base font-normal text-white px-5">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-1 bg-gray-100" id="scroll-target"></div> 
            
            <div className="w-full ">
                <ContactForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
            </div>
        </div>
    );
}

export default Evaluaciones;