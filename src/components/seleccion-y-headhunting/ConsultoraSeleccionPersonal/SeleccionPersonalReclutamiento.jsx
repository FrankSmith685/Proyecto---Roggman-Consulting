import { FaBullseye, FaChartBar, FaChartLine, FaChartPie, FaComments, FaEye, FaGlobe, FaHandsHelping, FaHandshake, FaHeart, FaLightbulb, FaRegClock, FaSearch, FaSync, FaUserCheck, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { BriefcaseIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/outline";


import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import ContactForm from "../../common/contactForm";

import imagenPerfil from "../../../assets/imagenes/imagen.webp";
import service1 from "../../../assets/imagenes/imagen2.webp";
import service2 from "../../../assets/imagenes/consultoria/imagen4.jpg";
import service3 from "../../../assets/imagenes/consultoria/imagen7.webp";
import service4 from "../../../assets/imagenes/imagen5.webp";
import CardSeleccionPersonalReclutamiento from "./Cards/CardSeleccionPersonalReclutamiento";
import { Link } from "react-scroll";


const SeleccionPersonalReclutamiento = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Selección Personal",
        title:"Consultora de Selección de personal y reclutamiento para empresas",
        description: "En Montaner somos una empresa líder en selección de personal y reclutamiento con más de 50 años de experiencia, lo que nos posiciona como expertos en captación de talento. Nos implicamos en cada proceso de selección como si fuera para nuestro propio grupo empresarial, poniendo foco en las personas y escuchándolas, sean candidatos o clientes, para asesorarles y detectar y satisfacer sus necesidades. Además, gracias a nuestro propio servicio de “Selección Onboarding” acompañamos y aseguramos la integración de los candidatos de la manera más efectiva posible en la empresa. Somos seleccionadores y coaches de la integración en la empresa.\n\nEl proceso de Onboarding no solo se centra en el seguimiento tras la selección, sino que damos orientación desde el inicio del proceso, y siempre alineados con la misión y propósito de la compañía. Cada proceso de selección es único, porque no hay dos personas o empresas iguales. Existe una solución para cada empresa, y en Montaner sabemos encontrarla.",
        image: imagenPerfil
    };

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();

    const services = [
        { name: "Consultoría de Headhunting", icon: <BriefcaseIcon className="h-10 w-10 text-white" /> },
        { name: "Selección de Personal", icon: <UserGroupIcon className="h-10 w-10 text-white" /> },
        { name: "Evaluaciones de Personal", icon: <LightBulbIcon className="h-10 w-10 text-white" /> },
        { name: "Interim Management", icon: <ShieldCheckIcon className="h-10 w-10 text-white" /> },
    ];

    const backgrounds = [
        `url(${service1})`,
        `url(${service2})`,
        `url(${service3})`,
        `url(${service4})`,
    ];


    const consultoria = [
        {
          title: "Foco en las personas",
          description: [
            "Situamos a las personas en el centro, sin ellas las empresas no existirían",
            "Impacto en el componente humano de las empresas"
          ],
        //   bgColor: "bg-blue-200"
        },
        {
          title: "Visión sistémica",
          description: [
            "Perspectiva múltiple",
            "Modelo High Performance Organizations",
            "DPV: Identificación del valor de un empleado"
          ],
        //   bgColor: "bg-green-200"
        },
        {
          title: "Mirada apreciativa",
          description: [
            "Cada persona merece su oportunidad. Empleados y directivos",
            "Identificamos el potencial profesional según logros"
          ],
        //   bgColor: "bg-yellow-200"
        },
        {
          title: "Orientación a resultados",
          description: [
            "Indicadores constantes del desempeño",
            "Aseguramos la integración más allá de la acogida tradicional"
          ],
        //   bgColor: "bg-purple-200"
        }
      ];

      const ventajas = [
        {
          title: "Recursos",
          description: "Gracias a la contratación de este servicio con Montaner, podrás acceder de forma confidencial y con todas las garantías a los perfiles altamente cualificados que tu empresa necesita",
          icon: FaSearch
        },
        {
          title: "Diferencia con un proceso de selección habitual",
          description: "En Montaner, previo a nuestro servicio de selección onboarding, realizamos un mapeo del mercado y de tu competencia directa.",
          icon: FaChartLine
        },
        {
          title: "Más allá del proceso de contratación",
          description: "El proceso de selección Onboarding de Montaner va más allá de la contratación y asegura que la incorporación de la persona finalista y su integración al equipo sean un éxito.",
          icon: FaUserCheck
        }
      ];
      
      const C_section = [
        {
            title: "Más de medio siglo eligiendo líderes de alto rango",
            icon: FaUserTie,
        },
        {
            title: "Consultoría inicial en la elaboración del perfil",
            icon: FaChartLine,
        },
        {
            title: "Mirada apreciativa en la Selección de Personal",
            icon: FaEye,
        },
        {
            title: "Acompañamiento del candidato/a en todo el proceso",
            icon: FaHandsHelping,
        },
        {
            title: "Integración gracias al Onboarding evitando rotación",
            icon: FaUserCheck,
        }
    ];



    const [hoveredIndex, setHoveredIndex] = useState(null);

    const sections4 = [
        {
          title: "¿Cuánto dura el proceso de reclutar personal para una empresa?",
          description: [
            "Depende del perfil y empresa. También depende del contexto y situación del mercado laboral en el momento de la búsqueda. Pero el 95 % de nuestros procesos se cierran en el tiempo pactado con el cliente.",
          ],
        },
        {
          title: "¿Para qué tipo de empresas se ofrece el servicio de selección y reclutamiento de personal?",
          description: ["Trabajamos para cualquier tipo de empresa, desde startups, a PYMES o empresas internacionales, personalizando en cada caso el proceso de selección a sus necesidades y expectativas."],  
        },
        {
            title: "¿Qué tener en cuenta al contar con una agencia de colocación?",
            description: ["Gracias a la contratación de nuestra consultoría de reclutamiento, podrás reducir riesgos y esfuerzo invertido en la atracción de talento humano especializado. Además, gracias a selección executive de candidatos, maximizarás los resultados encontrando los perfiles adecuados al puesto basándonos en competencias, conocimientos, personalidad, expertise, etc. Adicionalmente, aplicamos"],  
        },
        {
            title: "¿Cuánto dura el proceso de Onboarding?",
            description: ["Nuestro servicio de ‘Onboarding’ dura el tiempo necesario para acompañar a la empresa en el proceso de selección e integración del candidato/a. El proceso de onboarding online en la empresa dura hasta 45 días para técnicos/as senior y hasta 60 días para directivos/as."],  
        },
        {
            title: "¿A qué perfiles se orienta este servicio de Onboarding?",
            description: ["En Montaner estamos especializados en la selección de perfiles intermedios y de dirección."],  
        },
        {
            title: "¿Qué diferencia tiene el servicio de Onboarding de Montaner?",
            description: ["Nos hemos basado en nuestra experiencia para desarrollar esta metodología propia y ofrecer a nuestros clientes el mejor resultado. Ofrecemos el Onboarding en todos nuestros servicios de perfiles de alto cargo en selección online y presencial porque garantizamos el éxito."],  
        },
        {
            title: "¿Qué coste extra presenta el servicio de Selección Onboarding de Montaner?",
            description: ["Ninguno, porque toda nuestra selección de perfiles técnicos senior, mandos intermedios y directivos ya lleva implícito el onboarding. Es decir, nuestros fees de selección incluyen el Onboarding, porque no entendemos una selección sin una buena integración en la empresa. Es la mejor garantía de éxito para nosotros."],  
        },
        {
            title: "¿Qué diferencia el Onboarding de un Plan de Acogida?",
            description: ["El Onboarding no sustituye un Plan de Acogida, lo complementa. La empresa será quién transmita a esa nueva persona toda su historia, forma de trabajar, estrategia… En Montaner nos encargamos de acompañar al candidato/a y a la empresa para asegurarnos de que ambas partes cumplen sus expectativas en esta nueva oportunidad, comparten valores y cultura corporativa."],  
        },
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
            <CardSeleccionPersonalReclutamiento
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
                    className="text-white font-bold text-3xl"
                    >
                    ¿Necesitas ampliar tu equipo?
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
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Sandra Roggero Beratung mucho más que una agencia reclutadora de personal</h2>
                <p className="text-gray-700 text-start">Sandra Roggero Beratung trabajamos día a día de la mano de nuestros clientes y conocemos muy bien a nuestros candidatos. Somos una consultoría de selección de personal que trabaja con una metodología propia:</p>
            </div>

            <div className="p-8 bg-gray-100 w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {consultoria.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                        <h3 className="text-lg font-bold text-center text-white mb-2">{item.title}</h3>
                        </div>
                        <div className="p-6">
                        <ul className="list-disc pl-5">
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
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Ventajas de contratar una Consultora de Selección y Reclutamiento de personal</h2>
                <p className="text-gray-700 text-start">Gracias a la contratación de nuestra consultoría de reclutamiento, podrás reducir riesgos y esfuerzo invertido en la atracción de talento humano especializado. Además, gracias a selección executive de candidatos, maximizarás los resultados encontrando los perfiles adecuados al puesto basándonos en competencias, conocimientos, personalidad, expertise, etc. Adicionalmente, aplicamos en todo momento la mirada apreciativa cuidando a los candidatos que participan en tu proceso.</p>
            </div>

            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl px-10 font-bold mb-8 text-gray-700 text-start">Ventajas de confiar en una consultora de headhunter</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {ventajas.map((section, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300 ease-in-out">
                    <section.icon className="h-60 w-60 text-blue-600 mr-4" />
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-700">{section.title}</h3>
                        <p className="text-gray-700">{section.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="p-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">¿Por qué elegir Montaner para búsqueda y selección de personal?</h2>
                <p className="text-gray-700 text-start">En Montaner contamos con más de 50 años seleccionando al mejor talento. Además, trabajamos con nuestra propia metodología de selección basada en aplicar una visión sistémica, mirada apreciativa, ponemos siempre el foco en las personas y tenemos una alta orientación a resultados.</p>
            </div>

            <div className=" px-10 w-11/12 mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {C_section.map((section, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                        <section.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">{section.title}</h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>


            <div className="p-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Especializados en directivos y altos cargos</h2>
                <p className="text-gray-700 text-start">Estamos especializados en la selección de directivos, es decir, en la identificación y selección de perfiles profesionales con alto nivel técnico y competencial. Estos perfiles se caracterizan por tratarse de profesionales muy complejos de atraer por fuentes de reclutamiento y redes convencionales, pero nuestros equipos conocen el mercado y son capaces de atraer los perfiles más difíciles. </p>
            </div>

            <div className=" px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Metodología en nuestro proceso de búsqueda de personal:</h2>
                <p className="text-gray-700 text-start">Como empresa de selección de personal, aportamos una visión global y sistémica, respaldada por nuestra experiencia en diferentes sectores de mercado. Esto nos permite asesorar y acompañar a nuestros clientes en sus procesos de selección. </p>
                <p className="text-gray-700 text-start">Nuestro principal foco son las personas, trabajamos por y para ellas, por lo que entender sus necesidades para ofrecerles una oportunidad de éxito es nuestro principal objetivo en cualquier proceso. Además, en todo proceso de contratación apostamos por la mirada apreciativa para identificar el potencial de cada candidato no solo teniendo en cuenta su experiencia, sino sus logros, fortalezas y aspiraciones. </p>
            </div>

            

            <div className="container mx-auto py-10 w-11/12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <FaChartPie className="text-blue-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Análisis</h3>
                        <p className="text-gray-700">
                            Comenzamos con una consultoría previa a la selección con el cliente, lo que nos permite identificar y comprender las necesidades del cliente para encontrar a la persona idónea.
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <FaSearch className="text-blue-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Búsqueda de candidatos</h3>
                        <p className="text-gray-700">
                            Con el foco en la estrategia definida en la sesión de consultoría, empezamos la búsqueda de la persona que más se ajuste a las necesidades del cliente, siempre bajo la mirada apreciativa.
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <FaUserTie className="text-blue-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Presentación del finalista</h3>
                        <p className="text-gray-700">
                            Presentamos a los perfiles recomendados para el puesto y, durante el proceso de decisión, apoyamos en la decisión final al cliente. Así mismo, ayudamos a negociar con el candidato/a finalista.
                        </p>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <FaHandsHelping className="text-blue-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Onboarding en la empresa</h3>
                        <p className="text-gray-700">
                            Acompañamos al candidato durante el onboarding para cumplir las expectativas y lograr el éxito de su incorporación. Integración a 45 o 60 días, alineando expectativas de empresa y candidato/a.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Onboarding en la empresa</h2>
                <p className="text-gray-700 text-start">El acompañamiento del candidato/a ayuda a garantizar el éxito de la incorporación y evita la rotación en los primeros meses. Realizamos un plan de onboarding con coaching con el nuevo empleado y su jefe directo.</p>
            </div>

            <div className="w-11/12 mx-auto py-10 px-10">
                <h2 className="text-3xl font-bold text-start text-gray-700 mb-4">Beneficios del Onboarding</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center mb-4">
                            <BriefcaseIcon className="h-8 w-8 text-white mr-3" />
                            <h3 className="text-lg font-bold text-center text-white mb-2">Para la empresa</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 px-6">
                            <li>Aporta valor añadido a tu empresa, como un servicio disruptivo que ofreces a tus profesionales</li>
                            <li>Complementa el Plan de Bienvenida de tu empresa</li>
                            <li>Facilita el encaje con la misión, visión y valores y con las dinámicas empresariales</li>
                            <li>Incrementa la probabilidad de éxito, ya que el acompañamiento a esta nueva persona será en los primeros 45 o 60 días desde su incorporación</li>
                            <li>Genera buena reputación para tu empresa gracias a la satisfacción de las personas que se han incorporado</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center mb-4">
                            <UserGroupIcon className="h-8 w-8 text-white mr-3" />
                            <h3 className="text-lg font-bold text-center text-white mb-2">Para la persona que se incorpora</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 px-6">
                            <li>Conocer al equipo. Compañeros/as, directores/as y clientes son una prioridad cuando se inicia una nueva etapa profesional</li>
                            <li>Identificar los estilos de relación de cada una de esas personas de forma rápida para empezar a concretar objetivos y llevarlos a cabo</li>
                            <li>Abordar el día a día con más cercanía, de una forma más natural y tener desde el inicio una visión más global de toda la organización</li>
                            <li>Reconocer que es una persona importante por la que apuesta la compañía</li>
                            <li>Aportar confianza en la empresa y en el equipo de ‘Selección Onboarding’ porque los conoce desde la fase inicial en la que aplicó para esa plaza</li>
                            <li>Entender fácilmente los objetivos y propósitos de la empresa y ‘sumarse’ a ellos de forma eficiente</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-10 pb-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-700">Otros servicios que podrían ayudarte a crecer</h2>
                <p className="text-center mb-4">En Montaner, además del servicio de consultoría de headhunting, podemos ayudarte en otros ámbitos:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    ¿Necesitas ampliar tu equipo?
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

export default SeleccionPersonalReclutamiento;
