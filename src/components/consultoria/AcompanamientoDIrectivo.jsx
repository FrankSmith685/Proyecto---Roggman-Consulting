import { FaChartLine, FaChartPie, FaEye, FaGavel, FaHandsHelping, FaHandshake, FaMoneyBillWave, FaSearch, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { BriefcaseIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/outline";


import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
// import ContactForm from "../../common/contactForm";
import imagenPerfil from "../../assets/imagenes/consultoria/imagen2.webp";   
import service1 from "../../assets/imagenes/imagen.webp";
import service2 from "../../assets/imagenes/imagen2.webp";
import service3 from "../../assets/imagenes/consultoria/imagen2.webp";
import { Link } from "react-scroll";
// import CardGestionCambio from "./Cards/CardsGestionCambio";
import ContactForm from "../common/contactForm";
import CardAcompanamientoDirectivo from "./Cards/CardAcompanamientoDirectivo"; 


const AcompanamientoDIrectivo = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Coaching Directivo",
        title:"Coaching para empresas y acompañamiento directivo",
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

    const consultoriaData = [
        {
          title: "Crea vínculos laborales eficientes que impulsen la productividad",
          description: [
            "Al brindar a los líderes las herramientas necesarias para comunicarse de manera efectiva a su equipo y promover un ambiente de trabajo colaborativo, se impulsa la productividad y el éxito organizacional."
          ]
        },
        {
          title: "Facilita el desarrollo de las habilidades profesionales de tus líderes",
          description: [
            "Al ofrecer un enfoque individualizado, retroalimentación valiosa y estrategias efectivas garantizamos el desarrollo de nuevas habilidades profesionales."
          ]
        },
        {
          title: "Mejora el desempeño y la actitud de los equipos",
          description: [
            "La actitud de los equipos al capacitar a los líderes con las habilidades y herramientas necesarias para motivar, inspirar y gestionar de manera óptima garantiza un entorno de trabajo colaborativo y promueve un mejor desempeño del equipo."
          ]
        },
        {
          title: "Cultiva una cultura de asesoramiento y capacitación",
          description: [
            "Gracias a promover la mentalidad de crecimiento, la búsqueda constante de mejora y el intercambio de conocimientos entre los líderes y su equipo."
          ]
        },
        {
          title: "Detecta y aborda problemas relacionados con el desempeño y el comportamiento",
          description: [
            "Se detectar y mejoran problemas relacionados con el desempeño y el comportamiento al proporcionar un espacio seguro y confidencial para analizar y explorar desafíos."
          ]
        },
        {
          title: "Fomenta la práctica del autocoaching para el crecimiento individual y colectivo",
          description: [
            "La práctica del autocoaching empodera a líderes, fomentando así el crecimiento individual y colectivo a través de la reflexión, el autoanálisis y el establecimiento de metas."
          ]
        }
    ];      

    const ventajasData = [
        {
          title: "Mejora el liderazgo y fortalece el impacto positivo en toda la organización.",
          icon: <FaUserTie />
        },
        {
          title: "Brinda una perspectiva externa y objetiva para identificar y superar desafíos.",
          icon: <FaEye />
        },
        {
          title: "Crea un entorno laboral motivador aumentando la productividad y el éxito a largo plazo.",
          icon: <FaChartLine />
        }
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
          title: "¿Cómo analizar fortalezas y oportunidades con el método FOAR?",
          description: [
            "El análisis FOAR nos ayuda a evaluar una situación o proyecto en términos de coaching y liderazgo empresarial. A través de: -Identificar las fortalezas internas y las ventajas competitivas, buscar oportunidades externas, como tendencias del mercado y colaboraciones potenciales, identificar las oportunidades y priorizar las más relevantes, desarrollar las estrategias óptimas para aprovechar las fortalezas y oportunidades, adaptar la situación específica, las circunstancias y los recursos disponibles en cada caso y finalmente considerar amenazas y restricciones para obtener una visión completa.",
          ],
        },
        {
          title: "¿El acompañamiento directivo se puede aplicar también a mandos intermedios?",
          description: ["Sí, el acompañamiento directivo también se aplica a los mandos intermedios. Les brinda apoyo, orientación y desarrollo para que mejoren su desempeño. Esto incluye el progreso de habilidades de liderazgo empresarial, la gestión de conflictos y la toma de decisiones estratégicas. Como empresa de coaching, estamos comprometidos en proporcionar a los mandos intermedios las herramientas y técnicas necesarias para potenciar su liderazgo y alcanzar resultados efectivos en el entorno empresarial."],  
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
            <CardAcompanamientoDirectivo
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
                    className="text-white font-bold text-3xl w-3/5"
                    >
                        Contáctanos y descubre qué podemos hacer por tu empresa

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

            <div className="p-10 w-11/12 mx-auto text-gray-700">
                <h2 className="text-2xl font-bold mb-4">Dos formas de acompañarte como líder</h2>
                <p className="mb-6">
                    Ofrecemos dos tipos de asesoramiento totalmente personalizados para poder ayudarte a alcanzar las metas y superar los obstáculos tanto en lo profesional como en lo personal. Mientras que el primero se enfoca en habilidades específicas de liderazgo y coordinación para directivos, el segundo se centra en el desarrollo integral de la persona, resaltando sus fortalezas individuales en momentos de cambio.
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Asesoramiento continuo de coaching y liderazgo empresarial</h3>
                    <p className="mb-2">
                    Con este acompañamiento continuo, nos enfocamos en habilidades específicas de liderazgo y coordinación para directivos brindando apoyo, orientación y herramientas prácticas para el crecimiento y el éxito profesional. Cada persona puede precisar un servicio distinto; desde “counseling” hasta un proceso de “coaching” o entrenamiento personal. Nos ceñimos al cliente, tanto en formato (presencial, videoconferencia) como en duración y seguimiento. Orientándo sobre los equipos y entrenando competencias (hablar en público, negociación, liderazgo, etc.) adaptandonos a sesiones semanales, quincenales o mensuales.
                    </p>
                    <p className="font-bold">→ Formato ideal para: directivos/as y mandos intermedios que coordinan equipos y deben liderarlos personal y profesionalmente.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Método ‘FOAR personal & profesional’ de Montaner</h3>
                    <p className="mb-2">
                    Su principal característica es conseguir la máxima evolución personal partiendo de lo que se hace bien. En esta ‘mirada apreciativa’ que haremos contigo lo más importante no es darle vueltas a un problema, sino analizar cómo lo abordamos y qué fortalezas poseemos para hacerle frente. Sencillez y agilidad a través de dos sesiones por videoconferencia, de una duración aproximada de 90 minutos cada una. Analizamos y contrastamos contigo si este servicio es el que te conviene o precisas de otra asesoría específica o proceso de acompañamiento a través de coaching. Estas sesiones parten de un cuestionario y entrevista previa, constan de tiempo de trabajo conjunto con el consultor, ejercicios de reflexión personal y una hoja de ruta que busca resultados a corto plazo.
                    </p>
                    <p className="font-bold">→ Formato ideal para: Si como director/a acabas de desvincularte de tu empresa o estás pensando hacerlo, o incluso si te estás planteando un cambio de sector o emprender tu propia empresa.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Servicio de Coaching Ejecutivo: 6 razones para aplicarlo en tu empresa</h3>
                    <p className="mb-2">
                    El Servicio de Coaching Ejecutivo es importante porque proporciona un enfoque personalizado y orientado a ayudar a los líderes y ejecutivos a alcanzar su máximo potencial, desarrollar habilidades clave y superar desafíos, impulsando el crecimiento tanto a nivel profesional como personal.
                    </p>
                    <blockquote className="italic border-l-4 border-blue-500 pl-4">
                    Según un estudio de Universia Business Review, “los directivos asesorados mediante esta técnica se encontraban más motivados con el proceso realizado y lograron una mayor comprensión de las medidas a aplicar gracias al asesoramiento personalizado”.
                    </blockquote>
                </div>
            </div>

            <div className="px-10 w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {consultoriaData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                        <h3 className="text-base font-bold h-12 text-center text-white mb-2">{item.title}</h3>
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
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Ventajas de contratar una empresa de coaching y acompañamiento directivo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ventajasData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex flex-col justify-center items-center">
                        <div className="text-white text-5xl mb-4">{item.icon}</div>
                        </div>
                        <div className="p-6">
                        <h3 className="text-lg text-center text-gray-700 mb-2">{item.title}</h3>
                        </div>
                    </div>
                    ))}
                </div>
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
                        ¿Cómo progresará tu empresa gestionando el cambio adecuadamente?
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

export default AcompanamientoDIrectivo;
