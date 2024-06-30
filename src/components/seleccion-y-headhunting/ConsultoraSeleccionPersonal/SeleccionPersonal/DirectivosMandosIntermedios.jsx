import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 


import { useState } from "react";
import { HiOutlineChartBar, HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineCog, HiOutlineEye, HiOutlineHeart, HiOutlineLightBulb, HiOutlineThumbUp, HiOutlineUsers } from "react-icons/hi";

import CardSeleccionPersonal from "./Cards/CardSeleccionPersonal.jsx";

//Imagen Principal
import imagenPrincipal from "../../../../assets/imagenes/consultoria/imagen4.jpg";

// Imagen Servicio
import service1 from "../../../../assets/imagenes/directivo_mandos_intermedios/imagen1.jpg";
import service2 from "../../../../assets/imagenes/directivo_mandos_intermedios/imagen2.jpg";
import service3 from "../../../../assets/imagenes/directivo_mandos_intermedios/imagen3.jpg";
import service4 from "../../../../assets/imagenes/directivo_mandos_intermedios/imagen4.jpg";
import ContactForm from "../../../common/contactForm.jsx";
import { Link } from "react-scroll";

const DirectivosMandosIntermedios = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "Selección Personal",
        navegator3: "Directivos",
        title:"Empresa de Selección de directivos y mandos intermedios",
        description: "En Montaner contamos con más de 50 años trabajando con y para las personas. Ponemos la mirada en las personas cuando realizamos un proceso de selección de directivos y mandos intermedios. Es vital para conocer bien a los candidatos/as, entender sus motivaciones y sus objetivos. Poner el foco en qué va a aportar a la empresa y viceversa, nos permite trabajar mejor en esta nueva incorporación y asegurar el éxito de la oportunidad.",
        // subTitle_1:"Montaner es mucho más que una empresa de selección de directivos",
        // description_1:"Encontrar al talento que necesitas es una de nuestras especialidades cuando hablamos de selección de mandos intermedios y directivos competentes. Pero Montaner es mucho más. Nuestros servicios en consultoría, gestión del cambio, y formaciones para equipos y directivos, pueden ayudarte a satisfacer diversas necesidades que se dan en el día a día de las compañías. Somos especialistas en el encaje cultural entre directivos y empresas.",
        image: imagenPrincipal
    };

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();

    // SKILLS
    const skills = [
        {
            title: "Liderazgo e Inteligencia Emocional",
            icon: HiOutlineHeart,
        },
        {
            title: "Gestión de Crisis y Empatía",
            icon: HiOutlineLightBulb,
        },
        {
            title: "Capacidad Analítica, control operativo y conocimientos técnicos",
            icon: HiOutlineCog,
        },
    ];

    //
    const D_section = [
        {
          title: "Más de 50 años seleccionando altos cargos",
          icon: HiOutlineEye,
        },
        {
          title: "Definición del perfil y análisis del mercado",
          icon: HiOutlineUsers,
        },
        {
          title: "Mirada apreciativa en la Selección ",
          icon: HiOutlineThumbUp,
        },
        {
          title: "Acompañamiento del directivo/a seleccionada en todo el proceso",
          icon: HiOutlineChartBar,
        },
    ];

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
          title: "¿Qué son los mandos intermedios?",
          description: [
            "El mando intermedio es el encargado de liderar y supervisar cada área funcional de una empresa. Se posiciona en un nivel jerárquico intermedio, actuando como vínculo clave entre la alta dirección y los colaboradores, desempeñando un papel fundamental en la implementación de la estrategia corporativa.",
          ],
        },
        {
          title: "Diferencia entre un directivo y un mando intermedio",
          description: [
            "La diferencia entre un directivo y un mando intermedio es que el primero, tiene la misión de coordinar a los diferentes equipos en vista a lograr un objetivo común y es quién ayuda a definir y crear la estrategia que seguirá la compañía. Mientras que el mando intermedio se encargará de implementar esta estrategia organizando a los equipos. Es importante tener en cuenta que un alto directivo puede generar las mejores estrategias, pero, sin mandos intermedios adecuados y comprometidos para implementarlas, es probable que no se cumplan los objetivos marcados."],  
        },
        {
            title: "Pero, ¿qué es un directivo?",
            description: ["Un directivo es el profesional que “asume la responsabilidad de facilitar que el conjunto de personas que forman la empresa alcance de forma satisfactoria los objetivos establecidos”. Dicho con otras palabras, es un profesional cuya misión consiste en «hacer-hacer» para conseguir unos objetivos empresariales. Solo puede realizar su trabajo con el apoyo de un equipo al que debe inspirar y con el que debe colaborar para conseguir los objetivos empresariales previamente definidos."],  
        },
        {
            title: "¿Cómo llegar a ser directivo de una empresa?",
            description: ["Los directivos parten de unos conocimientos especializados a nivel técnico o profesional, ya que ocupan un puesto de máxima responsabilidad. Además, dentro de los requisitos para ser directivo de una empresa también tienen peso la experiencia y las técnicas de dirección adquiridas previamente y que se convierten en indispensables para poder desempeñar sus funciones. Para ser director en una empresa también es necesario disponer de habilidades directivas y de capacidad de liderazgo empresarial para conocer y controlar el ambiente en el que desenvuelve la organización y en el que influyen cambios en la empresa, conflictos, motivación, poder y política. Para profundizar en ello, vamos a ver con detalle qué habilidades directivas debe tener un perfil de este tipo en cualquier empresa."],  
        },
        {
            title: "¿Cuáles son las habilidades directivas más valoradas por las empresas?",
            description: "Liderazgo:\nSaber ser un ejemplo y referente para los demás es una de las habilidades directivas más destacadas. Un buen directivo desarrolla una mirada apreciativa sobre el talento de su equipo y contribuye a que éste lo desarrolle generando la mejor versión del equipo.\n\nToma de decisiones:\nDiariamente tomamos decisiones y es uno de los procesos más difíciles a los que nos enfrentamos. En un puesto directivo, la decisión no solo te afecta a ti, sino también a todo tu equipo, por lo que la responsabilidad de analizar todas las consecuencias que ésta pueda derivar es imprescindible.\n\nMotivación:\nConsigue alinear expectativas personales y de equipo, favoreciendo el disfrutar y crecer con el trabajo y las tareas concretas. Facilita que emerjan los anhelos profesionales y favorece la trayectoria y el desarrollo de los colaboradores, consiguiendo de una manera un alto grado de motivación e implicación. La motivación es pues, otra de las habilidades directivas esenciales en un puesto de responsabilidad.\n\nEstrategia:\nSaber establecer prioridades y generar planes de acción a fin de alcanzar objetivos y resultados propuestos conforme la visión y misión empresarial. Un buen líder debe tener en cuenta esta habilidad directiva para gestionar su equipo.\n\nTrabajo en equipo:\nGenera equipo, favorece la unidad contando con la diversidad. Lleva al equipo más allá de los límites individuales y favorece las sinergias. Los equipos que aprenden desde su propia experiencia de éxito y error logran mejores resultados.",
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
            <CardSeleccionPersonal
                navegator1={cardData.navegator1} 
                navegator2={cardData.navegator2} 
                navegator3={cardData.navegator3} 
                title={cardData.title}
                description={cardData.description}
                subTitle_1={cardData.subTitle_1}
                description_1={cardData.description_1}
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
                        Más de 50 años uniendo a profesionales y empresas
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


            <div className="py-10 px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">¿Qué debes tener en cuenta para encontrar talento para tu empresa?</h2>
                <p className="text-gray-700">Algunos aspectos destacados que tu empresa debería tener en cuenta si está en búsqueda de directivos y mandos intermedios, seducir y cuidar el talento son:</p>
                <ul className="text-gray-700 py-5 list-disc pl-5 text-left inline-block">
                    <li>Tener un buen plan de acogida y de onboarding (no confundirlos, pues son herramientas distintas).</li>
                    <li>Desarrollar un buen employee journey.</li>
                    <li>Trabajar su marca empleadora (employer branding) Compromiso social y RSC.</li>
                    <li>Reforzar y transmitir los valores y el propósito de la empresa.</li>
                    <li>Flexibilidad y conciliación.</li>
                    <li>Planes formativos para asegurar el desarrollo profesional.</li>
                    <li>Liderazgo con foco en la igualdad de oportunidades y respeto cultural, de género, etc.</li>
                </ul>
                <p className="text-gray-700">En resumen, los/las trabajadores/as buscan medidas de conciliación y flexibilidad, además de crecer en la empresa, un buen ambiente de trabajo y poder aportar sus ideas.</p>
            </div>

            <div className="px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Skills y competencias que deben tener los directivos y mandos intermedios</h2>
                <p className="text-gray-700 text-start">Los mandos intermedios son figuras con un papel clave en cualquier empresa. Hacen de nexo entre la estrategia marcada por la alta dirección y los planes de acción que deben ejecutar los perfiles técnicos.</p>
                <p className="text-gray-700 text-start py-5">Para identificar un buen perfil de management, recomendamos candidatos con habilidades como:</p>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((section, index) => (
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

            <div className="py-10 px-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Partner de confianza en selección de directivos</h2>
                <p className="text-gray-700 text-start">La selección de mandos intermedios forma parte de Montaner desde hace más de 50 años. No solo ofrecemos el servicio de reclutamiento, sino que acompañamos y asesoramos a clientes y candidatos durante todo el proceso de selección y hasta la integración de la persona finalista a la empresa, favoreciendo así una relación transparente y de confianza por las tres partes.</p>
                
                <div className="p-8 bg-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {D_section.map((section, index) => (
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
            </div>

            <div className="px-10 w-11/12 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">¿Por qué elegir Montaner como Consultora de Selección de Mandos Intermedios?</h2>
                <p className="text-gray-700 text-start pb-5">Elegir a Montaner para la selección de directivos y mandos intermedios te ofrece garantías, sobre todo, por nuestra dilatada experiencia y conocimiento del mercado.</p>
                <p className="text-gray-700 text-start">Gracias a la contratación de nuestra consultoría, podrás reducir riesgos y esfuerzo invertido en la atracción de este tipo de perfil profesional especializado. Además, maximizarás los resultados encontrando los perfiles adecuados al puesto basándonos en competencias, conocimientos, personalidad, expertise, etc. Siempre aplicamos en todo momento la mirada apreciativa cuidando a los candidatos que participan en tu proceso.</p>
            </div>

            <div className="py-10 px-10 w-11/12 mx-auto text-start">
                <h2 className="text-3xl font-bold mb-4 text-gray-700">Funciones de los directivos de una empresa</h2>
                <p className="text-gray-700 text-start pb-5">El director general es la persona encargada “formalmente” de la unidad organizacional. Esta autoridad formal le confiere un estatus especial dentro en la estructura de la empresa ante funciones interpersonales, informativas y de decisión.</p>
            
                <div className="text-start text-gray-700">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-4">Funciones interpersonales</h1>
                        <p className="mb-4">
                        Ser director de una empresa está íntimamente relacionado con el establecimiento y mantenimiento de relaciones interpersonales dentro y fuera de la organización. Entre las funciones directivas de una empresa a este nivel destacan:
                        </p>
                        <ul className="list-disc list-inside mb-8">
                        <li className="mb-2">
                            <strong>El directivo como cabeza visible y enlace.</strong> Como consecuencia de su actividad formal, debe representar a la organización en actos o formalidades de naturaleza “ceremonial”. Como gerente administrador conecta a su organización con el entorno y reúne una amplísima gama de contactos con miras a mejorar la posición de la organización.
                        </li>
                        <li className="mb-2">
                            <strong>El directivo como líder.</strong> Entre todos los objetivos ejecutivos de una empresa siempre destaca uno sobre el resto: integrar las necesidades individuales y los objetivos de la organización, poniendo el foco en los equipos de trabajo. La autoridad dota al director del poder y del liderazgo empresarial necesario para liderar este cambio eficientemente.
                        </li>
                        </ul>

                        <h1 className="text-2xl font-bold mb-4">Funciones informativas</h1>
                        <p className="mb-4">
                        Las funciones del director general de una empresa a nivel informativo van encaminadas a la adquisición, recuperación y transmisión de información positiva y útil. Dentro de estas funciones directivas, distinguimos tres niveles:
                        </p>
                        <ul className="list-disc list-inside mb-8">
                        <li className="mb-2">
                            <strong>El directivo como detector de información.</strong> Es fundamental para cada departamento buscar información para provocar cambios, identificar problemas y oportunidades, y ampliar conocimientos. Además, el director debe disponer de esta información externa e interna para su difusión y para la toma de decisiones.
                        </li>
                        <li className="mb-2">
                            <strong>El directivo como difusor de información.</strong> Su acceso especial a la información permite al administrador de la empresa desempeñar la difícil función de difusor de la información externa al interior de la empresa.
                        </li>
                        <li className="mb-2">
                            <strong>El directivo como portavoz de información.</strong> En su condición de autoridad formal, el director es el encargado de administrar la información y hablar en nombre de la organización.
                        </li>
                        </ul>

                        <h1 className="text-2xl font-bold mb-4">Funciones y habilidades directivas en la toma de decisiones</h1>
                        <p className="mb-4">
                        Uno de los trabajos más importantes que hace un gerente es participar en el proceso de determinación de estrategias y en la toma de decisiones para la empresa.
                        </p>
                        <ul className="list-disc list-inside mb-8">
                        <li className="mb-2">
                            <strong>El directivo como promotor.</strong> Puesto que el directivo dispone de información privilegiada interna y externa, ante un problema o una oportunidad decide lo que es mejor para que su organización emprenda una acción a fin de mejorar la situación existente.
                        </li>
                        <li className="mb-2">
                            <strong>El directivo como gestor de anomalías.</strong> Un acontecimiento imprevisto puede precipitar una anomalía que, si no se soluciona durante largo tiempo, puede desembocar en una crisis. Ser el máximo responsable de una empresa implica actuar antes de que la situación sea crítica y prever las consecuencias de cada acción emprendida por su organización.
                        </li>
                        <li className="mb-2">
                            <strong>El directivo como asignador de recursos.</strong> Otra de sus funciones es la supervisión del sistema por el que se asignan los recursos de la organización. La asignación de recursos implica dos elementos esenciales: la programación del tiempo (priorizar según los intereses de la organización) y la programación del trabajo (es decir, determinar lo que hay que hacer, quién lo hará y a qué estructura deberá recurrirse).
                        </li>
                        <li className="mb-2">
                            <strong>El directivo como negociador.</strong> Puesto que sólo él dispone de la información central que las negociaciones importantes exigen, el directivo es la única figura de la empresa que puede comprometer y negociar “en tiempo real” los recursos de la organización.
                        </li>
                        </ul>

                        <p className="mb-4">
                        En resumen, el objetivo primordial del directivo de la empresa es siempre asegurar que la organización cumpla con sus objetivos, concebir y mantener la estabilidad de las operaciones, hacerse cargo de determinar estrategias, y controlar los cambios producidos en su entorno. Para poder realizar este trabajo, el directivo debe tener claras cuáles son sus funciones.
                        </p>
                    </div>
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

            <div ref={ref2} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                   Encontramos tu próximo directivo por ti
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
                    <h2 className="text-center text-3xl font-bold text-gray-500 py-10">Preguntas frecuentes sobre selección de directivos</h2>
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

export default DirectivosMandosIntermedios;