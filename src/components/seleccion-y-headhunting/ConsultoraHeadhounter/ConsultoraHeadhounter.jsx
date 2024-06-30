import { FaChartLine, FaSearch, FaUserCheck } from "react-icons/fa";
// import imagen1 from "../../assets/imagenes/imagen.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import service1 from "../../../assets/imagenes/imagen2.webp";
import service2 from "../../../assets/imagenes/consultoria/imagen4.jpg";
import service3 from "../../../assets/imagenes/consultoria/imagen7.webp";
import service4 from "../../../assets/imagenes/imagen5.webp";
import React, { useState } from "react";
import { HiOutlineChartBar, HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineEye, HiOutlineThumbUp, HiOutlineUsers } from "react-icons/hi";

// IMAGENES DE PERFIL ESPECIALIZADOS
import PE_imagen1 from "../../../assets/imagenes/perfiles_especializados/ingenieria.jpg";
import PE_imagen2 from "../../../assets/imagenes/perfiles_especializados/tag_y_legal.jpg";
import PE_imagen3 from "../../../assets/imagenes/perfiles_especializados/marketing_digital_y_ventas.webp";
import PE_imagen4 from "../../../assets/imagenes/perfiles_especializados/it.jpg";
import PE_imagen5 from "../../../assets/imagenes/perfiles_especializados/Life_Sciences_&_Healthcare.jpg";
import PE_imagen6 from "../../../assets/imagenes/perfiles_especializados/banca_y_seguros.jpg";
import ContactForm from "../../common/contactForm";
import CardConsultoraHeadhounter from "./Cards/CardConsultoraHeadhounter";
import { Link } from "react-scroll";




const ConsultoraHeadhounter = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Headhunter",
        title:"Consultora de Headhunter",
        description: "El servicio de Headhunting que ofrece Montaner se basa en la identificación y selección de perfiles profesionales con alto nivel técnico y competencial. Estos perfiles se caracterizan por tratarse de profesionales muy complejos de atraer por fuentes de reclutamiento y redes convencionales.",
        // subTitle_1:"Executive Search: búsqueda y selección de directivos",
        // description_1: `
        // Nuestros consultores de headhunting conocen el mercado y son capaces de atraer los perfiles más difíciles. Realizamos una preselección de candidatos exhaustiva y entrevistas con un alto nivel de confidencialidad, tanto para las empresas como para los candidatos.
        // El servicio de Headhunting para empresas garantiza el nivel de confidencialidad de datos de los solicitantes, así como la atracción del mejor talento activo que aporte expertise, enfoque y éxito en la misión y proyecto empresarial.
        // `,
        image: service1
    };

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();



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
          title: "Más de 50 años seleccionando altos cargos directivos",
          icon: HiOutlineEye,
        },
        {
          title: "Asesoría inicial en la definición del perfil y análisis del mercado",
          icon: HiOutlineUsers,
        },
        {
          title: "Mirada apreciativa en la Selección Executive",
          icon: HiOutlineThumbUp,
        },
        {
          title: "Acompañamiento del directivo/a seleccionada en todo el proceso",
          icon: HiOutlineChartBar,
        },
    ];

    const services = [
        { name: "Consultoría de Selección de Personal y reclutamiento" },
        { name: "Consultora de Recursos Humanos" },
        { name: "Interim Management" },
        { name: "Evaluaciones" },
    ];

    const backgrounds = [
        `url(${service1})`,
        `url(${service2})`,
        `url(${service3})`,
        `url(${service4})`,
    ];


    // PERFIL ESPECIALIZADOS
    const perfil_especializados = [
        "INGENIERÍA",
        "TAX & LEGAL",
        "MAKETING DIGITAL Y VENTAS",
        "IT",
        "LIFE SCIENCES & HEALTHCARE",
        "BANCA Y SEGUROS",
    ];
      
    const PE_backgrounds = [
        `url(${PE_imagen1})`,
        `url(${PE_imagen2})`,
        `url(${PE_imagen3})`,
        `url(${PE_imagen4})`,
        `url(${PE_imagen5})`,
        `url(${PE_imagen6})`,
    ];






    const [hoveredIndex, setHoveredIndex] = useState(null);

    const sections4 = [
        {
          title: "¿Qué diferencia hay entre un reclutador y un headhunter?",
          description: [
            "La principal diferencia entre un headhunter y un reclutador es el nivel de experiencia y responsabilidad en la búsqueda y selección de candidatos, y en saber entender y detectar las necesidades de cada cliente."
          ],
        },
        {
          title: "¿En cuánto tiempo pueden encontrar al candidato ideal?",
          description: ["Depende de muchos factores, como la dificultad en encontrar al candidato idóneo para la posición, cambio en las necesidades de la empresa, las condiciones que se ofertan, etc. Si todo esto sigue su curso habitual, un proceso de selección puede durar de uno a tres meses hasta la incorporación del candidato."]
        },
        {
            title: "¿Qué tipo de perfiles puede conseguir Montaner como Headhunter?",
            description: [
                "En Montaner somos expertos en la selección de perfiles directivos como dirección general, consejero delegado, director de unidad de negocio, director de área, jefe de equipo, managers."
            ],
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
            <CardConsultoraHeadhounter
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
            
            <div className="py-10 px-10 mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Consultoría Headhunting: metodología</h2>
                <p className="text-gray-700 text-start">Como consultora de headhunter, nuestro objetivo es enfocar la búsqueda de estos candidatos/as a un conjunto concreto de “candidatos/as diana” en las empresas recomendadas y prescritas por el cliente de manera conjunta con nuestro equipo de consultores/as especializados.</p>
                <h3 className="text-base text-gray-700 font-bold my-2">La metodología aplicada por Montaner en la selección headhunting se basa en:</h3>
                <ul className="list-disc pl-5">
                    <li>Foco en las personas.</li>
                    <li>Combinación de diferentes sistemas de búsqueda de candidatos (directa e indirecta).</li>
                    <li>Procesos de trabajo de executive.</li>
                    <li>Visión y captación global de candidatos.</li>
                    <li>Especialización en la captación de perfiles profesionales altamente cualificados.</li>
                    <li>Confidencialidad tanto de las empresas solicitantes como de los candidatos contactados.</li>
                    
                </ul>
            </div>

            

            <div className="px-10 mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-start mb-8 text-gray-700">Ventajas de confiar en una consultora de headhunter</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0">
                {ventajas.map((section, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300 ease-in-out">
                    <section.icon className="h-40 w-40 text-blue-600 mr-4" />
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-700">{section.title}</h3>
                        <p className="text-gray-700">{section.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="py-10 px-10 mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">¿Por qué elegir Montaner para búsqueda y selección de personal?</h2>
                <p className="text-gray-700 text-start">¿Por qué contratar una empresa de Headhunting? Gracias a la contratación de nuestra consultoría, podrás reducir riesgos y esfuerzo invertido en la atracción de este tipo de perfil profesional especializado. Además, gracias a selección executive de candidatos, maximizarás los resultados encontrando los perfiles adecuados al puesto basándonos en competencias, conocimientos, personalidad, expertise, etc. Además, aplicamos en todo momento la mirada apreciativa cuidando a los candidatos que participan en tu proceso.</p>
            </div>

            <div className="px-0  mx-auto w-11/12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
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

            <div className="p-10 mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-center text-gray-700">Especializados en los siguientes perfiles</h2>
                <p className="w-full text-normal my-4 text-gray-700">Tras 50 años dedicándonos a la captación de talento de alto nivel, estamos especializados en atraer perfiles directivos de los siguientes sectores:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {perfil_especializados.map((service, index) => (
                    <div
                    key={index}
                    className="relative bg-cover bg-center h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                    style={{ backgroundImage: PE_backgrounds[index] }}
                    >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center">
                        <div className="w-full bg-red-700 text-center">
                        <h3 className="text-base font-bold text-white">{service}</h3>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="px-10 mx-auto w-11/12 pb-10">
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
                    Más de 50 años seleccionando directivos
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
            <div className="w-full">
                <ContactForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                />
            </div>
        </div>
    );
}

export default ConsultoraHeadhounter;
