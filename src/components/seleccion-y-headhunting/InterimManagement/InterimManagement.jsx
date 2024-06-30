import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 


import { useState } from "react";
import { HiOutlineAcademicCap, HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineClock, HiOutlineRefresh, HiOutlineTrendingUp } from "react-icons/hi";

//Imagen Principal
import imagenPrincipal from "../../../assets/imagenes/consultoria/imagen7.webp";

// Imagen Servicio
import service1 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen1.jpg";
import service2 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen2.jpg";
import service3 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen3.jpg";
import service4 from "../../../assets/imagenes/directivo_mandos_intermedios/imagen4.jpg";
import ContactForm from "../../common/contactForm.jsx";
import CardInterimManagement from "./Cards/CardInterimManagement.jsx";
import { Link } from "react-scroll";

const InterimManagement = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Interim Management",
        title:"Interim Management: Alta cualificación para conseguir alta rentabilidad",
        description: "En un entorno tan cambiante como el que vivimos, es fundamental la creación de nuevos modelos de interrelación profesional para que cualquier compañía pueda adaptarse a los nuevos retos que se le presentan. La figura del Interim Manager cubre justo el papel de ‘directivo cualificado’ para acompañar a la organización en un proceso determinado, aportando valor, durante un periodo concreto de tiempo, desvinculándose una vez alcanzados los objetivos.",
        subTitle_1:"Profesionales de dirección y gestión para Executive Interim Management",
        description_1:"Los profesionales de interim management son expertos en la dirección y gestión de los procesos, los cuales se incorporan a la empresa de forma externa durante un período determinado de tiempo con la finalidad de cumplir unos objetivos previos establecidos. En Montaner te ayudamos y asesoramos en la búsqueda de perfiles de Interim Management más adecuados a tus necesidades y requerimientos. Encontramos a los profesionales capaces de asumir el liderazgo y la dirección durante el proceso de cambio que necesite tu organización en el tiempo que este proceso de transformación precise.",
        image: imagenPrincipal
    };

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    // Interiment
    const Interiment = [
        {
          title: "Situación temporal",
          description: "La incorporación del profesional externo a la empresa se realiza por un período de tiempo limitado, como por ejemplo ceses, dimisiones o lapsos de tiempo hasta la incorporación definitiva de los sustitutos.",
          icon: HiOutlineClock,
        },
        {
          title: "Expertos en cambios relevantes",
          description: "Los profesionales de Interim Management están enfocados a lidiar con grandes cambios organizacionales, como por ejemplo reestructuraciones departamentales o sucesiones en empresas familiares.",
          icon: HiOutlineRefresh,
        },
        {
          title: "Expansiones empresariales",
          description: "El crecimiento empresarial hacia nuevos mercados o negocios puede requerir de perfiles profesionales que ayuden a esta transición.",
          icon: HiOutlineTrendingUp,
        },
        {
          title: "Profesionalización de empresas emergentes",
          description: "En ocasiones, el nacimiento de nuevas empresas requiere de ayuda profesional para afrontar procesos de maduración.",
          icon: HiOutlineAcademicCap,
        },
      ];
      

    //
    // const D_section = [
    //     {
    //       title: "Más de 50 años seleccionando altos cargos",
    //       icon: HiOutlineEye,
    //     },
    //     {
    //       title: "Definición del perfil y análisis del mercado",
    //       icon: HiOutlineUsers,
    //     },
    //     {
    //       title: "Mirada apreciativa en la Selección ",
    //       icon: HiOutlineThumbUp,
    //     },
    //     {
    //       title: "Acompañamiento del directivo/a seleccionada en todo el proceso",
    //       icon: HiOutlineChartBar,
    //     },
    // ];

    // Servicios
    const services = [
        { name: "Consultoría de Selección de Personal y reclutamiento" },
        { name: "Selección Onboarding para empresas" },
        { name: "Interim Management"},
        { name: "Evaluaciones"},
    ];

    const backgrounds = [
        `url(${service1})`,
        `url(${service2})`,
        `url(${service3})`,
        `url(${service4})`,
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const sections4 = [
        {
          title: "¿Cómo se establecen los objetivos y el plan de trabajo para el Interim Manager?",
          description: [
            "Un Interim Manager se contrata para ejercer una tarea en un determinado tiempo. Esta figura estudia el estado actual de la compañía, las necesidades para las qué ha sido contratado, establece unos objetivos en un timing concreto, aportándole la empresa las herramientas necesarias para su ejecución. Normalmente, estos perfiles son contratados en situaciones como cambios estratégicos, procesos de gestión del cambio y procesos de transformación digital.",
          ],
        },
        {
          title: "¿Qué responsabilidades tiene el interim management en la empresa?",
          description: [
            "Su principal responsabilidad es la de aportar valor y conocimiento a la compañía mediante sus habilidades y experiencia para cumplir unos objetivos marcados. Suele responsabilizarse de un proyecto clave o área estratégica de la compañía, donde son fundamentales sus conocimientos técnicos y el valor añadido que aporta su perfil."],  
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
            <CardInterimManagement
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


            <div className="py-10 px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">Executive Interim Management : ¿qué es y a qué aporta?</h2>
                <p className="text-gray-700">El Interim Management (o ‘gestión temporal’) se define como una herramienta estratégica para abordar la gestión del cambio y el desarrollo de la organización durante un plazo de tiempo determinado y con unos objetivos previamente definidos. Mediante la fijación de objetivos esta figura crea, agiliza y mejora el rendimiento de los proyectos de las compañías.</p>
                <p className="text-gray-700">Estas posiciones están cubiertas normalmente por profesionales senior (más de 15 años de experiencia), que aportan valor y soluciones desde el primer día de la contratación de sus servicios. Pero también se pueden dar casos de interim managers más juniors, que por su especialización técnica, resultan figuras clave en proyectos concretos aunque no acumulen tanta experiencia. Son guías expertos en procesos de cambios en las empresas como la transformación digital, gestión de crisis empresarial, fusiones de empresa, reestructuraciones internas, creación de un departamento nuevo, etc.</p>
            </div>

            <div className="px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Principios del Interim Management</h2>
                <p className="text-gray-700 text-start mb-4">El concepto de Executive Interim Management se asienta en cuatro principios de actuación, sobre los cuales se realiza la búsqueda de los mejores perfiles profesionales. Estos principios son:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Interiment.map((section, index) => (
                        <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                        >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex justify-center items-center">
                            <section.icon className="h-16 w-16 text-white" />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-medium mb-4 text-gray-700">{section.title}</h3>
                            <p className="text-gray-700">{section.description}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-10 px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Metodología de selección Interim Management de Montaner</h2>
                <p className="text-gray-700 text-start">Montaner es tu partner para proyectos interim. Ante los procesos de cambio organizacional, apostamos por minimizar sus efectos, seleccionando aquellos profesionales con las excelentes aptitudes y capacidades que mejor se adapten al reto planteado, buscando transformar las dificultades en oportunidades.</p>
                <p className="text-gray-700 text-start py-4">Nuestra metodología se basa en establecer el foco en las personas:</p>
                <ul className="list-disc list-inside mb-8 text-gray-700">
                    <li className="mb-2">
                        <strong>Motivamos a los profesionales</strong>  más adecuados en cada proyecto para asegurar el éxito en la gestión del cambio.
                    </li>
                    <li className="mb-2">
                         Ponemos a tu disposición <strong>profesionales con variedad de perfiles</strong> (funcionales, sectoriales o relacionales) que ofrezcan una visión estratégica y global para el negocio.
                    </li>
                    <li className="mb-2">
                        Aportamos <strong>especialización y experiencia</strong> en procesos de cambios de distintas áreas funcionales de la industria y servicios; como por ejemplo sectores de ingeniería, IT y digital, project management, finanzas o RRHH.
                    </li>
                </ul>
            </div>

            <div ref={ref2} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                   ¿Cómo crecería tu empresa con Interim Management?
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
            
            <div className="px-10 pb-10">
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
                                    {service.icon}
                                    <h3 className="text-xl font-bold text-white mt-2">{service.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={ref3} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10 mb-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                   Te ayudamos a encontrar talento de alto nivel
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
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

            <div className="px-10  bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl font-bold text-gray-500 py-10">Preguntas frecuentes sobre Interim Management</h2>
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
                            <p className="text-gray-700">{section.description}</p>
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

export default InterimManagement;