import { FaChartPie, FaGavel, FaHandsHelping, FaHandshake, FaMoneyBillWave, FaSearch, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { BriefcaseIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/outline";


import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
// import ContactForm from "../../common/contactForm";

import imagenPerfil from "../../assets/imagenes/imagen3.webp";
import service1 from "../../assets/imagenes/imagen.webp";
import service2 from "../../assets/imagenes/imagen2.webp";
import service3 from "../../assets/imagenes/consultoria/imagen2.webp";
import { Link } from "react-scroll";
import CardGestionCambio from "./Cards/CardsGestionCambio";
import ContactForm from "../common/contactForm";


const GestionCambio = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Gestión del Cambio",
        title:"Consultora de Gestión del Cambio Organizacional",
        description: "Como consultora de Gestión del Cambio Organizacional nuestro objetivo es dar apoyo a nuestros clientes para gestionar eficazmente los cambios a los que se enfrentan en el entorno empresarial, ayudando a diseñar una estrategia para conseguir el cambio que la empresa necesite, y para ello antes auditamos la situación de partida y marcamos los KPIs que debemos conseguir al final de dicho cambio.",
        image: imagenPerfil
    };

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();

    const services = [
        { name: "Consultoría de Selección de Personal y reclutamiento", icon: <BriefcaseIcon className="h-10 w-10 text-white" /> },
        { name: "Consultora Headhunter", icon: <UserGroupIcon className="h-10 w-10 text-white" /> },
        { name: "Coaching para empresas", icon: <LightBulbIcon className="h-10 w-10 text-white" /> },
    ];

    const backgrounds = [
        `url(${service1})`,
        `url(${service2})`,
        `url(${service3})`,
    ];


    const consultoria = [
        {
          title: "Proceso estructurado paso a paso",
          description: [
            "Nuestra consultoría de gestión del cambio incluye: análisis exhaustivo de la organización, establecimiento de objetivos alineados con la estrategia, diseño de estrategia personalizada, planificación y ejecución detallada, evaluación y ajustes continuos, y consolidación para asegurar la sostenibilidad a largo plazo."
          ],
        },
        {
          title: "Nos adaptamos a la cultura organizacional de tu empresa",
          description: [
            "Tras 50 años de experiencia, en Montaner reconocemos que cada organización es única y tiene su propia identidad y valores.",
            "Garantizamos estrategias, enfoques y soluciones coherentes con los valores y la forma de trabajar de tu organización, implementando el cambio de manera más fluida y exitosa."
          ],
        },
        {
          title: "El talento humano de tu empresa como epicentro del cambio",
          description: [
            "En Montaner sabemos que las personas en la organización son las que impulsan y ejecutan el cambio.",
            "Valoramos el conocimiento y la experiencia de los empleados/as, y escuchamos las necesidades y preocupaciones de las personas del equipo para diseñar estrategias y acciones que impulsen su desarrollo y crecimiento profesional."
          ],
        }
    ];    
        // 
        
        const sections = [
            {
              title: "Mejora de la gestión",
              description: [
                "Ayudamos a identificar y eliminar ineficiencias en los procesos de trabajo, optimizando la utilización de recursos y reduciendo los tiempos de entrega."
              ],
              icon: FaChartPie,
            },
            {
              title: "Mayor calidad en los procesos de tu empresa",
              description: [
                "Identificamos áreas de mejora al implementar estándares de calidad, mejorar la eficiencia, proporcionar capacitación y desarrollo de habilidades, y promover una cultura de calidad."
              ],
              icon: FaSearch,
            },
            {
              title: "Estudio de la viabilidad del proyecto",
              description: [
                "Realizamos análisis objetivos con el fin de identificar factores críticos, mitigar riesgos, evaluar la viabilidad financiera y ofrecer recomendaciones y alternativas."
              ],
              icon: FaUserTie,
            },
            {
              title: "Soluciones a corto plazo",
              description: [
                "Proporcionamos un análisis eficiente, propuestas prácticas, implementación ágil y mejora organizacional. Mejoramos el desempeño empresarial en el corto plazo que se acabará traduciendo a largo plazo."
              ],
              icon: FaHandsHelping,
            },
            {
              title: "Foco en la legalidad de cada uno de los procesos",
              description: [
                "Evaluamos el cumplimiento legal identificando riesgos, diseñando procedimientos, brindando capacitación, realizando auditorías y revisiones periódicas, protegiendo su reputación y cumplimiento normativo."
              ],
              icon: FaGavel,
            },
            {
              title: "Ahorro de costes en tareas sin impacto",
              description: [
                "Identificamos oportunidades y ayudamos a la empresa a utilizar sus recursos de manera más eficiente, y enfocarse en las tareas que generan un mayor impacto y valor agregado."
              ],
              icon: FaMoneyBillWave,
            },
            {
              title: "Generación de confianza en tus clientes",
              description: [
                "Al mejorar la calidad y eficiencia y promover la transparencia contribuimos a construir relaciones sólidas y duraderas con tus clientes, generando confianza en la calidad y la integridad de tu empresa."
              ],
              icon: FaHandshake,
            }
          ];

        // 

        const consultoria1 = [
            {
              title: "Mejora del rendimiento",
              description: [
                "Ayudamos a identificar áreas de mejora y optimizar los procesos, estructuras y prácticas de trabajo para lograr un desempeño más efectivo."
              ],
            },
            {
              title: "Gestión del cambio",
              description: [
                "Ofrecemos asesoramiento y apoyo experto para gestionar los procesos de cambio, minimizando la resistencia y maximizando las oportunidades de éxito en un entorno en constante evolución."
              ],
            },
            {
              title: "Desarrollo y seducción del talento",
              description: [
                "Identificamos las necesidades de desarrollo de los empleados, diseñamos programas de capacitación, y creamos un entorno que promueva el crecimiento profesional."
              ],
            }
          ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const sections4 = [
        {
          title: "¿Para qué tipo de empresas va orientada la consultoría organizativa?",
          description: [
            "La consultoría organizativa puede ser útil para una amplia variedad de empresas que buscan mejorar su funcionamiento, adaptarse a cambios, resolver problemas y alcanzar sus objetivos de manera más efectiva.",
          ],
        },
        {
          title: "¿En cuánto tiempo se despliega una consultoría organizacional para gestionar el cambio de una empresa?",
          description: ["La duración de una consultoría organizacional para gestionar el cambio de una empresa puede variar considerablemente según diversos factores, como la magnitud del cambio, la complejidad de los problemas a abordar, el tamaño de la empresa y la disponibilidad de recursos."],  
        }
    ];

    const [openIndex1, setOpenIndex1] = useState(null);

    const handleToggle1 = (index) => {
        setOpenIndex1(openIndex1 === index ? null : index);
    };

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
            <CardGestionCambio
                navegator1={cardData.navegator1} 
                navegator2={cardData.navegator2} 
                title={cardData.title}
                description={cardData.description}
                image={cardData.image}
            />

            <div ref={ref1} className="bg-red-800 w-full h-auto flex items-center justify-center py-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl w-1/2"
                    >
                    Quiero acelerar el crecimiento de mi empresa con una Consultoría Organizacional
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
                            Contacta Ya
                        </Link>
                    </motion.div>
                </div>
            </div>
            
            <div className="p-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">¿En qué consiste una Consultoría Organizacional para la Gestión del Cambio?</h2>
                <p className="text-gray-700 text-start pb-4">Nuestro compromiso en Montaner es brindar un respaldo y un asesoramiento cercano a las organizaciones que se encuentran en momentos de cambio. Escuchamos, analizamos y detectamos problemas, ineficiencias o disfunciones reales en las organizaciones desde la perspectiva de las personas, y las prácticas de recursos humanos que se llevan a cabo.</p>
                <p className="text-gray-700 text-start">Nuestra consultoría organizacional para la gestión del cambio está diseñada para acompañar a las empresas en cada etapa de este proceso crucial. Esto implica realizar un análisis de la organización, diseñar un plan de cambio, establecer una comunicación efectiva y realizar evaluaciones continuas. Gracias a este proceso de consultoría, acompañamos a las empresas en la gestión del cambio a la vez que facilitamos la transición de las personas para asumirlo.</p>
            </div>

            <div className="px-10  w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {consultoria.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                        <h3 className="text-lg font-bold h-12 text-center text-white mb-2">{item.title}</h3>
                        </div>
                        <div className="p-6">
                        <ul className="pl-5">
                            {item.description.map((desc, idx) => (
                            <li key={idx} className="text-gray-700">{desc}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className=" mx-auto p-10 w-11/12">

            <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">¿Qué impacto tendría una Consultoría Organizacional en tu empresa?</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">

                    {sections.map((section, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center">
                        <section.icon className="text-blue-600 text-5xl mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">{section.title}</h3>
                        {section.description.map((desc, idx) => (
                        <p key={idx} className="text-gray-700">{desc}</p>
                        ))}
                    </div>
                    ))}
                </div>
            </div>

            <div className="px-10  w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700"><span className="text-red-600">3 motivos :</span> Por los que tu organización puede necesitar una empresa de desarrollo organizacional</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {consultoria1.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                        <h3 className="text-lg font-bold  text-center text-white mb-2">{item.title}</h3>
                        </div>
                        <div className="p-6">
                        <ul className="pl-5">
                            {item.description.map((desc, idx) => (
                            <li key={idx} className="text-gray-700">{desc}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </div>



            <div className="p-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Ventajas de una implementación efectiva de Gestión del Cambio para tu empresa</h2>
                <p className="text-gray-700 text-start">Desde Montaner creemos que la gestión del cambio brinda beneficios como la satisfacción y compromiso del personal al involucrarse en el proceso, reducción de costes al mejorar la eficiencia, fomento de la innovación mediante una cultura empresarial flexible, y minimización de riesgos al implementar cambios de manera planificada y estructurada. Además con nuestro proceso de Onboarding aseguramos una transición fluida y exitosa, brindando el apoyo necesario para que los empleados se adapten rápidamente y asuman con confianza las nuevas responsabilidades y enfoques.</p>
            </div>

            <div className="px-10 pb-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-700">Otros servicios para acelerar el crecimiento de tu empresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-cover bg-center h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                            style={{ backgroundImage: backgrounds[index] }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`absolute inset-0 flex items-center justify-center transition duration-300 ${hoveredIndex === index ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-50'}`}>
                                <div className="text-center">
                                    {/* {service.icon} */}
                                    <h3 className="text-xl font-bold text-white mt-2">{service.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={ref2} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                   Confía en los más de 50 años de experiencia de Montaner
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className=""
                    >
                        <Link
                                to="scroll-target"
                                smooth={true}
                                duration={500}
                                className="hover:cursor-pointer bg-transparent border-white border-2 px-10 py-3 font-medium text-white hover:bg-white hover:text-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            >
                                Contacta Ya
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="px-10  bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl font-bold text-gray-500 py-10">Preguntas frecuentes sobre el Servicio de Selección de Personal</h2>
                {sections4.map((section, index) => (
                    <div key={index} className="mb-0">
                    <div
                        className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-t-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => handleToggle1(index)}
                    >
                        <h3 className="text-xl font-bold text-white">{section.title}</h3>
                        {openIndex1 === index ? (
                        <HiOutlineChevronUp className="text-white h-6 w-6" />
                        ) : (
                        <HiOutlineChevronDown className="text-white h-6 w-6" />
                        )}
                    </div>
                    <div
                        className={`${
                            openIndex1 === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden bg-white p-2 rounded-b-lg shadow-lg transition-all duration-500 ease-in-out`}
                    >
                        <ul className="list-disc pl-6">
                        {section.description.map((item, i) => (
                            <li key={i} className="text-gray-700 mb-2">{item}</li>
                        ))}
                        </ul>
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

export default GestionCambio;
