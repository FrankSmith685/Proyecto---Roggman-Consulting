import { FaBullseye, FaChartBar, FaComments, FaGlobe, FaHandshake, FaHeart, FaLightbulb, FaRegClock, FaSync } from "react-icons/fa";
// import imagen1 from "../../assets/imagenes/imagen.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import service1 from "../../assets/imagenes/imagen2.webp";
import imagenPrincipal from "../../assets/imagenes/imagen5.webp";
import service2 from "../../assets/imagenes/consultoria/imagen7.webp";
import service3 from "../../assets/imagenes/imagen.webp";
import service4 from "../../assets/imagenes/imagen4.jpg";
import React, { useState } from "react";
import {HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineEye, HiOutlineThumbUp, HiOutlineUsers } from "react-icons/hi";

import ContactForm from "../common/contactForm";
import { Link } from "react-scroll";
import CardHrBusinessPartner from "./Cards/CardHrBusinessPartner";




const HrBusinessPartner = () => {
    const cardData = {
        navegator1: "Sandra Roggero Beratung",
        navegator2: "HR Business Partner",
        title:"HRBP: El impulsor del cambio y la innovación en tu empresa",
        // description: "El servicio de Headhunting que ofrece Montaner se basa en la identificación y selección de perfiles profesionales con alto nivel técnico y competencial. Estos perfiles se caracterizan por tratarse de profesionales muy complejos de atraer por fuentes de reclutamiento y redes convencionales.",
        // subTitle_1:"Executive Search: búsqueda y selección de directivos",
        // description_1: `
        // Nuestros consultores de headhunting conocen el mercado y son capaces de atraer los perfiles más difíciles. Realizamos una preselección de candidatos exhaustiva y entrevistas con un alto nivel de confidencialidad, tanto para las empresas como para los candidatos.
        // El servicio de Headhunting para empresas garantiza el nivel de confidencialidad de datos de los solicitantes, así como la atracción del mejor talento activo que aporte expertise, enfoque y éxito en la misión y proyecto empresarial.
        // `,
        image: imagenPrincipal
    };

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();



    

    const C_section = [
        {
          title: "Alto conocimiento en proyectos HR Business Partner en el ámbito industrial",
          icon: HiOutlineEye,
        },
        {
          title: "Aportamos soluciones a medida en función de necesidades",
          icon: HiOutlineUsers,
        },
        {
          title: "Metodología y rigor en cada uno de los procesos",
          icon: HiOutlineThumbUp,
        }
    ];

    const services = [
        { name: "Consultora Headhunter" },
        { name: "Interim Management" },
        { name: "Consultoría de Selección" },
        { name: "Formación #humanBits" },
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
          title: "¿Cuáles son las diferencias entre un HRBP y un HR Mánager?",
          description: [
            "La diferencia principal es que un HRBP tiene un rol decisivo en cuestiones de la estrategia de RRHH y colabora estrechamente con todos los managers de todos los departamentos de la empresa. Por su parte, un HR Manager es un profesional de RRHH que gestiona a su propio equipo técnico y tiene responsabilidades solo en su propio departamento, no a nivel de orientación de resultados globales como el HRBP."
          ],
        },
        {
          title: "¿Cuál es la formación necesaria para trabajar como HRBP?",
          description: ["Formación universitaria en Psicología o Relaciones Laborales, pudiendo complementarlo con un Máster en Recursos Humanos o Relaciones Laborales.",
          "Dominio de herramientas y técnicas de evaluación, formación y desarrollo de personas."
            ]
        }
    ];

    const competencies = [
        { icon: FaGlobe, title: "Visión global e integradora", text: "Concebir la organización como un todo y entender el principal reto corporativo y la ruta a seguir. La empatía es una habilidad básica." },
        { icon: FaHandshake, title: "Capacidad de resolución de conflictos", text: "Identificar problemas y resolverlos eficazmente mediante análisis y negociación." },
        { icon: FaComments, title: "Comunicativo/a", text: "Comunicación constante con todos los departamentos y perfiles para lograr objetivos comunes." },
        { icon: FaRegClock, title: "Capacidad de organización", text: "Habilidad para gestionar tareas administrativas, recursos y el tiempo para cumplir objetivos." },
        { icon: FaChartBar, title: "Buena capacidad de análisis", text: "Capacidad de observación y análisis para diseñar objetivos alineados y planes eficaces." },
        { icon: FaHeart, title: "Inteligencia emocional", text: "Empatía y capacidad para reconocer méritos y potenciar cualidades del equipo." },
        { icon: FaLightbulb, title: "Iniciativa y proactividad", text: "Anticipar necesidades y crear soluciones innovadoras, liderando proyectos y siendo un motor de cambio." },
        { icon: FaSync, title: "Flexibilidad y adaptación", text: "Adaptarse a los cambios y gestionar situaciones diversas, ajustando estrategias según el contexto." },
        { icon: FaBullseye, title: "Orientación a resultados y visión estratégica", text: "Enfocar en alcanzar resultados concretos y planificar a largo plazo para alinear esfuerzos con la visión de la compañía." },
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
            <CardHrBusinessPartner
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
                    ¿Por qué elegir Montaner para liderar el cambio de tu empresa?
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
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700"> ¿Qué incluye el servicio de consultoría de HR Business Partner de Montaner?</h2>
                <p className="text-gray-700 text-start">El servicio de consultoría de recursos humanos business partner, es una de las muchas soluciones de hr que ofrece Montaner.</p>
                <p className="text-gray-700 text-start my-2">El business partner de recursos humanos o HRBP ejerce como responsable de proyecto del área de recursos humanos, vinculado directamente según las necesidades operativas del negocio. Además, debe tener visión estratégica de la compañía. El objetivo principal es que el área de rrhh sea un departamento referente dentro de las organizaciones y que actúe como agente de cambio y el HRBP ayuda a ello.</p>
                {/* <p className="text-gray-700 text-start my-2"></p> */}
                <h3 className="text-base text-gray-700 font-bold mb-2">Entre las tareas principales de un HRBP se encuentran:</h3>
                <ul className="list-disc pl-5">
                    <li>Entender la estrategia empresarial, el modelo de negocio, sus procesos productivos, sus empleados y las competencias y habilidades de los mismos.</li>
                    <li>Conocer el mercado y el sector en el que opera la empresa.</li>
                    <li>Analizar las tendencias del sector y los puestos de trabajo.</li>
                    <li>Detectar y desarrollar todos los aspectos de mejora, tanto de los procesos como de las personas.</li>
                    <li>Coordinar los distintos departamentos.</li>
                    <li>Potenciar y canalizar la comunicación interna.</li>
                    <li>Asesorar a empleados y directivos.</li>
                    
                </ul>
            </div>

            

            {/* <div className="px-10 mx-auto w-11/12">
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
            </div> */}

            <div className="px-10 mx-auto w-11/12">
                <h2 className="text-lg font-bold text-start mb-4 text-gray-700">Te ayudamos gracias a:</h2>
                {/* <p className="text-gray-700 text-start">¿Por qué contratar una empresa de Headhunting? Gracias a la contratación de nuestra consultoría, podrás reducir riesgos y esfuerzo invertido en la atracción de este tipo de perfil profesional especializado. Además, gracias a selección executive de candidatos, maximizarás los resultados encontrando los perfiles adecuados al puesto basándonos en competencias, conocimientos, personalidad, expertise, etc. Además, aplicamos en todo momento la mirada apreciativa cuidando a los candidatos que participan en tu proceso.</p> */}
            </div>

            <div className="px-0  mx-auto w-11/12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
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

            <div className="pb-10 pt-8 px-10 mx-auto w-11/12">
                <p className="text-gray-700 text-start pb-2">Confía en Montaner para ser tu HRBP. Somos expertos en Consultoría y gestión del cambio, Selección y Headhunting y servicios de HR Business Partner y contamos con 50 años de experiencia en estos servicios.</p>
                <p className="text-gray-700 text-start">Podemos seleccionar un HRBP para tu empresa, o ejercer nosotros mismos dicha figura con nuestro equipo experto de consultores, como hacemos ya con distintos clientes.</p>
            </div>

            <div className="px-10 mx-auto w-11/12">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700"> Alinea la estrategia de RRHH con tu desarrollo de negocio </h2>
                <p className="text-gray-700 text-start mb-4">El crecimiento de las organizaciones y, de forma natural, la expansión de las áreas de trabajo que las conforman, han generado multitud de perfiles profesionales con intereses, necesidades y preocupaciones diferentes. Ante tal variedad de perfiles profesionales dentro de las empresas, los departamentos orientados a la gestión del talento han cobrado vital importancia en el desarrollo y crecimiento de las organizaciones. La figura del HR Business Partner nace para dar respuesta a esas necesidades, como punto de unión entre los intereses individuales de cada profesional dentro de la organización con los objetivos de negocio inherentes a la actividad de las empresas.</p>
                
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700"> ¿Qué es un HRBP o HR Business Partner? </h2>
                <p className="text-gray-700 text-start mb-2">El significado de las siglas HRBP tiene su origen en las palabras en inglés Human Resources Business Partner. El HR Business Partner es uno de los nuevos roles clave en la dirección de la empresa. Forma parte del equipo de recursos humanos y su objetivo es alinear las estrategias del departamento de recursos humanos con los objetivos generales y de negocio de la compañía para contribuir al crecimiento de la empresa. Este profesional no solo actúa como un consultor estratégico para el consejo de administración o la dirección, sino que también tiene un enfoque dual, gestionando tanto aspectos de negocio como de recursos humanos. Además, el HRBP juega un papel crucial en la gestión del cambio, promoviendo una integración efectiva de los recursos humanos en las operativas y estrategias empresariales.</p>
                <p className="text-gray-700 text-start mb-2">Este concepto surgió en 1977 y fue popularizado por Dave Ulrich, quien en su obra «Human Resource Champions» destacó al HRBP como un profesional con profundo conocimiento de las políticas y estrategias de la empresa, capacitado para ser un referente interno y facilitar la descentralización y eficacia del departamento de RRHH.</p>
                <p className="text-gray-700 text-start mb-2">En conclusión, el HRBP es esencial para cualquier empresa que busque optimizar sus operaciones y organizar sus prácticas de recursos humanos para lograr las metas empresariales.</p>
                <p className="text-gray-700 text-start mb-2">Ahora bien, esta función puede desarrollarse en dos vías:</p>
                <h3 className="text-lg font-bold text-start mb-2 text-red-500"> HR Business Partner Interno </h3>
                <p className="text-gray-700 text-start mb-2">En Montaner, podemos actuar como un consultor interno, llevando a cabo un análisis detallado de las necesidades específicas de cada empresa para formar o seleccionar a los mejores candidatos para el rol de HR Business Partner. Estos profesionales, ya sean seleccionados internamente o a través de procesos de Executive Search o Headhunting, poseen un profundo conocimiento de las políticas y objetivos de la empresa, y cuentan con amplia experiencia en recursos humanos y gestión de personal. Este enfoque asegura que cada HR Business Partner trabaje para que los diferentes stakeholders avancen en la misma dirección para alcanzar la visión y estrategias de la organización para la que trabajan.</p>
                <h3 className="text-lg font-bold text-start mb-2 text-red-500"> HR Business Partner externo </h3>
                <p className="text-gray-700 text-start mb-2">En Montaner, entendemos que algunas empresas prefieren colaborar con un partner externo especializado en gestión de RRHH que cuente con las herramientas necesarias para analizar y resolver sus necesidades específicas. Para estos casos, ofrecemos servicios que pueden incluir desde la designación de recursos propios que actúen como un departamento de HR externo, hasta la selección de un Interim Manager. Esto permite a cada empresa elegir la opción más adecuada para alcanzar sus objetivos estratégicos, asegurando un conocimiento profundo de su realidad organizacional.</p>
            </div>

            <div ref={ref2} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                    ¿Por qué elegir Montaner para liderar el cambio de tu empresa?
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

            <div className="p-10 mx-auto w-11/12 space-y-4 text-gray-700">
                <h1 className="text-2xl font-bold text-gray-700">Funciones de un HRBP</h1>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones a nivel estratégico</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Estudiar e identificar necesidades del negocio</li>
                    <li>Entender la estrategia empresarial, el modelo de negocio, sus procesos productivos, sus empleados y sus competencias y habilidades.</li>
                    <li>Conocer bien el sector y el mercado en el que opera la compañía.</li>
                    <li>Analizar competencia y puestos de trabajo.</li>
                    <li>Alinear las estrategias y la operativa del departamento de RRHH con el desarrollo del negocio de la organización.</li>
                    <li>Liderar proyectos de innovación organizacional y cambios en la empresa, haciendo de conector entre el área de recursos humanos y las demás áreas del negocio.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones a nivel operativo</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Crear estrategias para el mejor desarrollo, productividad y bienestar de la empresa, creando un entorno de trabajo humano donde cada persona desee dar lo mejor de sí misma.</li>
                    <li>Gestionar el cambio, fomentar la diversidad y preocuparse por los intereses de las personas que componen la empresa.</li>
                    <li>Proporcionar feedback inmediato sobre todos los procesos, procedimientos e iniciativas de RRHH.</li>
                    <li>Ser el enlace entre los colaboradores externos y el área de RRHH.</li>
                    <li>Apoyar a los/as colaboradores/as internos para que logren sus objetivos de negocio.</li>
                    <li>Identificar procesos automatizables y áreas de mejora.</li>
                    <li>Fomentar la comunicación interna entre los/as empleados/as y las distintas áreas de negocio.</li>
                    <li>Detectar y desarrollar todos los aspectos de mejora: procesos y personas.</li>
                    <li>Diseñar un entorno de trabajo donde cada persona dé lo mejor de sí misma.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones de reclutamiento de profesionales y retención del talento</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Identificar talento, conocer y desarrollar el capital humano</li>
                    <li>Comprender el mercado laboral para poder detectar necesidades emergentes y prever los perfiles necesarios para la empresa a corto plazo. De manera que pueda buscar las mejores vías para incorporarlos a la empresa.</li>
                    <li>Incorporar a profesionales en las distintas áreas de la empresa.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones de desarrollo de personas</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Diseñar programas de formación y de desarrollo profesional, teniendo en cuenta las necesidades de los/as diferentes trabajadores/as y las de la empresa.</li>
                    <li>Identificar el talento y potenciar el desarrollo de las personas, procurando que tengan todas las facilidades para formarse y optimizar sus competencias dentro de la compañía.</li>
                    <li>Diseñar planes de sucesión para personas y puestos claves.</li>
                    <li>Conocer a todas las personas que gestiona, teniendo claras sus habilidades y cómo estas pueden aportar valor a la empresa.</li>
                    <li>Actuar como figura líder entre el equipo, convirtiéndose en una especie de coach, que asesorará y aconsejará al personal.</li>
                    <li>Evaluar el rendimiento de los/as trabajadores/as y desarrollar planes de mejora.</li>
                    <li>Crear una cultura corporativa o cultura empresarial robusta.</li>
                    </ul>
                </section>
            </div>


            <div className="px-10 mx-auto w-11/12 space-y-4 text-gray-700">
                <section>
                    <h2 className="text-xl font-semibold text-gray-700">El objetivo del Human Resources Business Partner dentro de la empresa</h2>
                    <p className="text-gray-700">
                    La misión principal de HR Business Partner es relacionar el área de Recursos Humanos de una empresa con el resto del tejido de áreas empresariales y asegurar sinergias eficientes. Para conseguir este resultado, debe cumplir una serie de funciones dentro de la compañía:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Ser un líder estratégico:</strong> Debe ayudar a la dirección a que el equipo humano de la empresa esté alineado con la estrategia. Para ello, debe conocer y entender bien el sector de la empresa de cara a plantear proyectos de innovación organizacional y cambios en la empresa.
                    </li>
                    <li>
                        <strong>Llevar una buena gestión operativa:</strong> No sólo debe entender la estrategia de recursos humanos para la consecución de los objetivos de la empresa, sino que será el responsable de la ejecución del plan de Recursos Humanos anual.
                    </li>
                    <li>
                        <strong>Fomentar el desarrollo personal:</strong> Debe identificar las necesidades formativas que presenta cada departamento y diseñar un plan de desarrollo que ayude a las personas, pero que asegure el cumplimiento de la estrategia.
                    </li>
                    <li>
                        <strong>Captación de talento:</strong> Debe comprender el mercado laboral para poder detectar necesidades emergentes y prever los perfiles clave para la empresa a corto plazo. Así, puede encontrar las mejores vías para incorporar a profesionales en las distintas áreas de la empresa.
                    </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones a nivel estratégico</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Estudiar e identificar necesidades del negocio</li>
                    <li>Entender la estrategia empresarial, el modelo de negocio, sus procesos productivos, sus empleados y sus competencias y habilidades.</li>
                    <li>Conocer bien el sector y el mercado en el que opera la compañía.</li>
                    <li>Analizar competencia y puestos de trabajo.</li>
                    <li>Alinear las estrategias y la operativa del departamento de RRHH con el desarrollo del negocio de la organización.</li>
                    <li>Liderar proyectos de innovación organizacional y cambios en la empresa, haciendo de conector entre el área de recursos humanos y las demás áreas del negocio.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones a nivel operativo</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Crear estrategias para el mejor desarrollo, productividad y bienestar de la empresa, creando un entorno de trabajo humano donde cada persona desee dar lo mejor de sí misma.</li>
                    <li>Gestionar el cambio, fomentar la diversidad y preocuparse por los intereses de las personas que componen la empresa.</li>
                    <li>Proporcionar feedback inmediato sobre todos los procesos, procedimientos e iniciativas de RRHH.</li>
                    <li>Ser el enlace entre los colaboradores externos y el área de RRHH.</li>
                    <li>Apoyar a los/as colaboradores/as internos para que logren sus objetivos de negocio.</li>
                    <li>Identificar procesos automatizables y áreas de mejora.</li>
                    <li>Fomentar la comunicación interna entre los/as empleados/as y las distintas áreas de negocio.</li>
                    <li>Detectar y desarrollar todos los aspectos de mejora: procesos y personas.</li>
                    <li>Diseñar un entorno de trabajo donde cada persona dé lo mejor de sí misma.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones de reclutamiento de profesionales y retención del talento</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Identificar talento, conocer y desarrollar el capital humano</li>
                    <li>Comprender el mercado laboral para poder detectar necesidades emergentes y prever los perfiles necesarios para la empresa a corto plazo. De manera que pueda buscar las mejores vías para incorporarlos a la empresa.</li>
                    <li>Incorporar a profesionales en las distintas áreas de la empresa.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700">Funciones de desarrollo de personas</h2>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Diseñar programas de formación y de desarrollo profesional, teniendo en cuenta las necesidades de los/as diferentes trabajadores/as y las de la empresa.</li>
                    <li>Identificar el talento y potenciar el desarrollo de las personas, procurando que tengan todas las facilidades para formarse y optimizar sus competencias dentro de la compañía.</li>
                    <li>Diseñar planes de sucesión para personas y puestos claves.</li>
                    <li>Conocer a todas las personas que gestiona, teniendo claras sus habilidades y cómo estas pueden aportar valor a la empresa.</li>
                    <li>Actuar como figura líder entre el equipo, convirtiéndose en una especie de coach, que asesorará y aconsejará al personal.</li>
                    <li>Evaluar el rendimiento de los/as trabajadores/as y desarrollar planes de mejora.</li>
                    <li>Crear una cultura corporativa o cultura empresarial robusta.</li>
                    </ul>
                </section>
            </div>

            <div ref={ref3} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                    
                        ¿Necesitas ayuda para gestionar el cambio de tu organización?
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
                        Contacta Ya
                    </Link>
                    </motion.div>
                </div>
            </div>



            <div className=" p-10 w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-start mb-4 text-gray-700">Competencias y habilidades necesarias de un HRBP o Human Resources Business Partner profesional</h2>
                <p className="text-gray-700 text-start">Todo HRBP, a rasgos generales, debe compartir unas habilidades y competencias conciliadoras e integradoras para guiar a todo el personal de la compañía hacia una misma misión y objetivo común.  </p>
            </div>

            <div className="mx-auto px-10 w-11/12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {competencies.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="p-6 bg-gradient-to-r from-blue-200 to-blue-100 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <Icon className="text-blue-600 text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
                    <p className="text-gray-700">{text}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className=" p-10 w-11/12 mx-auto">
                <p className="text-gray-700 text-start">Sin estas habilidades, es probable que las funciones del business partner no se realicen de manera exitosa. Pero, como sabrás, todas estas habilidades pueden desarrollarse con la formación y la dedicación adecuadas.  </p>
                <h2 className="text-2xl font-bold text-start mb-4 text-gray-700">Y en cuanto a la formación: ¿Cuál es el perfil de un HR Business Partner?</h2>
                <p className="text-gray-700 text-start">A continuación, te lo detallamos: </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Formación universitaria en Psicología o Relaciones Laborales, pudiendo complementarlo con un Máster en Recursos Humanos o Relaciones Laborales.</li>
                    <li>Dominio de herramientas y técnicas de evaluación, formación y desarrollo de personas.</li>
                    <li>Experiencia en selección de talento.</li>
                    <li>Conocimientos en materia del funcionamiento y la estructura de una empresa y relaciones laborales.</li>
                    <li>Conocimientos de leyes laborales.</li>
                    <li>Las habilidades que hemos visto más arriba.</li>
                </ul>
                <p className="text-gray-700 text-start mb-2">Cómo ves, el HRBP es una pieza clave en la gestión de una empresa. Ahora ya sabes qué habilidades y conocimientos debes potenciar para poder desarrollar las funciones de uno.</p>
                <p className="text-gray-700 text-start mb-2">Y si estás buscando tu oportunidad como HRBP, no dudes en inscribirte a nuestra bolsa de candidatos.</p>

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

            <div ref={ref4} className="bg-red-800 w-full h-auto flex items-center justify-center py-10 px-10">
                <div className={`w-full h-full flex justify-center items-center space-x-20`}>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-bold text-3xl"
                    >
                    ¿Necesitas ayuda para gestionar el cambio de tu organización?
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
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

export default HrBusinessPartner;
