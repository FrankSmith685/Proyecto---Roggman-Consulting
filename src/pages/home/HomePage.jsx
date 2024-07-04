import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";

// Logo principal
import logoPrincipal from "../../assets/imagenes/LogoPrincipal_1.png"; 
import { useAppState } from "../../hooks/useAppState";



const HomePage = () => {
  const {imagenesPreloader,videosPreloader } = useAppState();
  const navigate = useNavigate();

  const handleClickSeleccionReclutamiento = () => {
    navigate("/kontakt");
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const texts = [
            "INNOVATIVEN LÖSUNGEN?",
            "QUALIFIZIERTEN KANDIDATEN?",
            "EINER PROFESSIONELLEN VERBESSERUNG?"
        ];

        let typingSpeed = 150;

        if (isDeleting) {
            typingSpeed = 75;
        }

        const handleTyping = () => {
            const fullText = texts[currentTextIndex];

            if (isDeleting) {
                setDisplayText((prev) => prev.substring(0, prev.length - 1));
                setCurrentCharIndex((prev) => prev - 1);

                if (currentCharIndex === 0) {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setDisplayText((prev) => prev + fullText.charAt(currentCharIndex));
                setCurrentCharIndex((prev) => prev + 1);

                if (currentCharIndex === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const typingInterval = setInterval(handleTyping, typingSpeed);

        return () => clearInterval(typingInterval);
    }, [currentCharIndex, isDeleting, currentTextIndex]);

    const infoItems = [
      { title: "Personalauswahl und Rekrutierung", description: "Wir bieten individuelle Unterstützung in Auswahlverfahren und Integration für Bewerber und Kunden.", path: "/unternehmen/personalauswahl-und-rekrutierung" },
      { title: "Personalbewertungen", description: "Unterstützung bei der Talentidentifizierung, Humankapitalentwicklung, Einbindung von Fachkräften und Schaffung einer starken Unternehmenskultur.", path: "/unternehmen/personalbewertungen" },
      { title: "International", description: "Sandra Roggero-Beratung hilft bei der Teambewertung und -Entwicklung durch maßgeschneiderte Evaluierungen und individuelle Kompetenzpläne.", path: "/unternehmen/international" },
      { title: "Funktionen", description: "Die Auswahl passender Mitarbeiter ist entscheidend. Sandra Roggero hilft, Talente anzuziehen, die Ihre Geschichte teilen und Ihr Unternehmen formen können.", path: "/unternehmen/funktionen" },
      { title: "Fachspezifische Suche", description: "Sandra Roggero-Beratung unterstützt Unternehmen weltweit bei der Rekrutierung von Fachkräften durch Talentmanagement und Auswahlprozesse.", path: "/unternehmen/fachspezifische-suche" },
      { title: "Inklusionsaudit", description: "Wir überwinden Vorurteile im Auswahlprozess durch ein Inklusionsaudit, das jeden Schritt von der Stellenbeschreibung bis zum Onboarding analysiert.", path: "/unternehmen/inklusionsaudit" },
    ];
    

    const [activeIndex, setActiveIndex] = useState(null);

    const infoItems2 = [
      {
          title: "INNOVACIÓN",
          description: "En Roggman Consulting, la innovación es clave. No se trata solo de encontrar nuevos empleados rápidamente, sino de construir equipos de trabajo óptimos que se alineen con los objetivos de la empresa. Por eso, las empresas necesitan un socio que entienda el mercado y tenga experiencia práctica.",
          image: imagenesPreloader?.imagenInfo2?.src
      },
      {
          title: "RECLUTAMIENTO",
          description: "Realizamos una evaluación exhaustiva de nuestros candidatos para que nuestros clientes empresariales puedan formar equipos de trabajo óptimos, compuestos por personas jóvenes y/o adultos comprometidos, disciplinados y bien estructurados que se alineen con los objetivos de la empresa.",
          image: imagenesPreloader?.imagenInfo3?.src
      },
      {
          title: "VISIÓN",
          description: "Nuestro objetivo es crear equipos de alto rendimiento que alcancen los objetivos empresariales y contribuyan a una cultura laboral positiva e inclusiva.",
          image: imagenesPreloader?.imagenInfo3?.src
      }
  ];
  

    const services = [
      {title:"STUDIUM"},
      {title:"AUSBILDUNG"},
      {title:"PARKTIKUM"},
      {title:"ARBEIT"},
      {title:"STEUERN"},
      {title:"WOHNEN"},
      {title:"TRANSPORT"},
      {title:"VISUM"},
      {title:"SPRACHE"},
  ];
      
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
    };

    const prevCard = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    };
    
    const getCardPosition = (index, currentIndex, length) => {
        if (index === currentIndex) return 'translate-x-0 opacity-100';
        if (index === (currentIndex + 1) % length) return 'translate-x-full opacity-50';
        if (index === (currentIndex - 1 + length) % length) return '-translate-x-full opacity-50';
        return 'hidden';
      };

  return (
    <>
       <div className="w-full h-h_screen_80 bg-bg_favorite_1 relative overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src={videosPreloader?.bannerPrincipal} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="bg-bg_favorite_1 flex flex-col justify-start items-center h-full z-20 relative space-y-4 p-4 md:pt-0 sm:p-6 md:p-8">
          <div className="w-full h-auto mt-52 font-bell">
            <h2 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl text-start px-2">
              Bienvenido a Roggman Consulting
            </h2>
            <h2 className="text-customColor2 font-medium text-2xl text-start px-2">
              <span>Soluciones empresariales personalizadas para su éxito</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoItems2.map((item, index) => (
            <div key={index} className="relative bg-white shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80 lg:h-96">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md">
                  <h3 className="font-bold text-xl text-gray-800 text-center">{item.title}</h3>
                  <p className="text-gray-700 mt-2 text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Sección adicional de servicios detallados */}
       <div className="w-full py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              ¿Qué ofrecemos?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              En Roggman Consulting ofrecemos una variedad de servicios para apoyar a su empresa en cada paso del camino.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaAngleRight />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Consultoría Estratégica</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Proveemos consultoría estratégica para mejorar los procesos de su empresa y alcanzar sus objetivos.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaAngleRight />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Desarrollo de Talento</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Ayudamos en la identificación y desarrollo del talento humano dentro de su organización.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaAngleRight />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Análisis de Mercado</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Realizamos análisis de mercado para identificar oportunidades y mejorar la competitividad de su empresa.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* Sección de nuestro equipo */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nuestro Equipo</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Conozca a nuestros expertos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Nuestro equipo de profesionales está aquí para ayudarlo a alcanzar el éxito.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-lg p-4">
                <img src={imagenesPreloader?.equipo1} alt="Equipo 1" className="w-full h-48 object-cover" />
                <h3 className="mt-4 text-xl font-bold text-gray-800">Jane Doe</h3>
                <p className="text-gray-600">Especialista en Consultoría</p>
              </div>
              <div className="bg-white shadow-lg p-4">
                <img src={imagenesPreloader?.equipo2} alt="Equipo 2" className="w-full h-48 object-cover" />
                <h3 className="mt-4 text-xl font-bold text-gray-800">John Smith</h3>
                <p className="text-gray-600">Experto en Desarrollo de Talento</p>
              </div>
              <div className="bg-white shadow-lg p-4">
                <img src={imagenesPreloader?.equipo3} alt="Equipo 3" className="w-full h-48 object-cover" />
                <h3 className="mt-4 text-xl font-bold text-gray-800">Alice Johnson</h3>
                <p className="text-gray-600">Analista de Mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sección de testimonios */}
      <div className="w-full py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Lo que dicen nuestros clientes
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              No solo nos tome la palabra. Vea lo que nuestros clientes tienen que decir.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-lg p-4">
                <p className="text-gray-700">"Roggman Consulting nos ayudó a transformar nuestro equipo y alcanzar nuestros objetivos de negocio. ¡Recomendado!"</p>
                <h4 className="mt-4 font-bold text-gray-800">Maria Perez</h4>
                <p className="text-gray-600">CEO, Empresa XYZ</p>
              </div>
              <div className="bg-white shadow-lg p-4">
                <p className="text-gray-700">"La consultoría estratégica que recibimos fue invaluable. Nos ayudaron a mejorar nuestros procesos y ser más competitivos."</p>
                <h4 className="mt-4 font-bold text-gray-800">Carlos Sanchez</h4>
                <p className="text-gray-600">Director de Operaciones, Empresa ABC</p>
              </div>
              <div className="bg-white shadow-lg p-4">
                <p className="text-gray-700">"El equipo de Roggman Consulting es profesional y experto. Sus servicios de reclutamiento fueron excepcionales."</p>
                <h4 className="mt-4 font-bold text-gray-800">Ana Lopez</h4>
                <p className="text-gray-600">Gerente de Recursos Humanos, Empresa 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 w-full h-full">
  <h2 className="md:text-3xl text-xl sm:text-2xl font-bold text-center py-10 text-white">Als HR-Beratung können wir Ihnen auch bei Folgendem helfen:</h2>
  <div className="relative w-full h-auto overflow-hidden ">
      <div className="flex justify-center items-center  w-full h-96 p-20">
          {services.map((service, index) => (
          <div key={index} className={`absolute w-full md:w-1/2  transition-transform duration-500 ease-in-out ${getCardPosition(index, currentIndex, services.length)}`}>
              <div className="w-full h-full ">
              <img src={service.image} alt={service.title} className="w-full h-96 object-cover"/>
              </div>
              
              <div className="absolute inset-0 w-full flex items-end justify-center">
                <div className="w-full  bg-bg_favorite_4 text-center p-4">
                    <h3 className="text-base font-bold text-white">{service.title}</h3>
                </div>
              </div>
          </div>
          ))}
      </div>
  </div>
    <div className="flex items-center justify-center py-5 w-1/2 mx-auto">
        <div className="flex items-center justify-center w-12 text-3xl  bg-opacity-50 text-white cursor-pointer" onClick={prevCard}>
        <FaAngleLeft />
        </div>
        <div className="relative w-full mx-4 h-1 bg-gray-700 rounded">
        <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out"
            style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
        ></div>
        </div>
        <div className="flex items-center justify-center w-12 text-3xl  bg-opacity-50 text-white cursor-pointer" onClick={nextCard}>
        <FaAngleRight />
        </div>
    </div>
  </div>
  <div className="w-full bg-gray-200 flex flex-col sm:flex-row flex-nowrap">
    <div className="w-full flex justify-center items-center">
      <div className="w-full text-center p-4">
        <h2 className="font-semibold text-gray-800 my-2 text-2xl md:text-3xl">MÖCHTEN SIE WEITERE INFORMATIONEN?</h2>
        <button
          className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
          onClick={handleClickSeleccionReclutamiento}
        >
          Kontaktaufnahme
        </button>
      </div>
    </div>
  </div>
    </>
  );
};

export default HomePage;








// {/* <div className="w-11/12 mx-auto text-gray-700 flex flex-wrap py-5 px-2 md:py-20 md:px-10">
// <div className="w-full sm:w-1/2">
//   <img src={imagenesPreloader?.fotoPerfil?.src} alt="not found" className="w-full h-full object-cover" />
// </div>
//   <div
//     className="w-full sm:w-1/2 h-full p-4 md:p-20 space-y-4 sm:space-y-6 md:space-y-8"
//   >
//   <div className='flex flex-col items-center justify-start'>
//       <img src={logoPrincipal} alt="Logo Principal" className='h-20' />
//       <div className="flex flex-col items-center">
//           <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 text-gray-800`}>
//               SANDRA ROGGERO M.
//           </h2>
//           <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 text-violet-900`}>
//               BERATUNG
//           </span>
//       </div>
//   </div>
//   <p className="text-start text-sm sm:text-sm md:text-lg">
//     Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen.
//   </p>
//   <p className="text-start text-sm sm:text-sm md:text-lg">
//     Heute geht es um mehr als nur darum, "schnell" neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen.
//   </p>
//   <button
//     className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
//     onClick={handleClickSeleccionReclutamiento}
//   >
//     Kontaktaufnahme
//   </button>
//   </div>
// </div>
// <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
//   <p className="w-11/12 m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">
//     DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN?
//   </p>
// </div>
// <div className="min-h-screen bg-white py-8 px-4 sm:px-8 lg:px-16">
// <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//   {infoItems2.map((item, index) => (
//       <div key={index}  className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//       <div className="relative h-full">
//         <img 
//           src={item.image} 
//           alt={item.title} 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//       </div>
//       {/* <div className="p-6">
//         <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
//         <p className="text-gray-700 mt-2">{item.description}</p>
//       </div> */}
//       </div>
//   ))}
// </div>
// </div>



//  */}