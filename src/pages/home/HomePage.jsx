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
      { title: "INNOVATION", description: "Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. Deshalb brauchen Unternehmen einen Partner, der den Markt versteht und über praktische Erfahrungen verfügt.",image: imagenesPreloader?.imagenInfo2?.src  },
      { title: "RECRUITING KOMPETENZ", description: "Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.",image: imagenesPreloader?.imagenInfo3?.src  },
      { title: "VISION", description: "Unser Ziel ist es, hochperformante Teams zu schaffen, die Unternehmensziele erreichen und zu einer positiven, inklusiven Arbeitskultur beitragen.",image: imagenesPreloader?.imagenInfo3?.src },
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
        <div className="bg-bg_favorite_1 flex flex-col justify-start items-center h-full z-20 relative space-y-4 p-4  md:pt-0 sm:p-6 md:p-8">
          <div className="w-full h-auto mt-52 font-bell ">
            <h2 className="text-white font-medium text-xl sm:text-3xl lg:text-4xl text-start px-2">
              KPMG. Make the Difference.
            </h2>
            <h2 className="text-customColor5 font-medium text-2xl text-start px-2">
              <span>Unsere Expert:innen für Ihre Transformationsprojekte</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-auto  py-8 px-4 ">
        <div className="grid grid-cols-3 gap-2">
          {infoItems2.map((item, index) => (
              <div key={index}  className="relative bg-white shadow-lg overflow-hidden">
              <div className="relative h-h_screen_80">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                  <div className="w-full h-60 absolute bottom-3 px-3">
                    <div className="bg-white w-full h-full">
                      <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                      <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                  </div>
              </div>
              </div>
          ))}
        </div>
      </div>



      <div className="w-11/12 mx-auto text-gray-700 flex flex-wrap py-5 px-2 md:py-20 md:px-10">
      <div className="w-full sm:w-1/2">
        <img src={imagenesPreloader?.fotoPerfil?.src} alt="not found" className="w-full h-full object-cover" />
      </div>
        <div
          className="w-full sm:w-1/2 h-full p-4 md:p-20 space-y-4 sm:space-y-6 md:space-y-8"
        >
        <div className='flex flex-col items-center justify-start'>
            <img src={logoPrincipal} alt="Logo Principal" className='h-20' />
            <div className="flex flex-col items-center">
                <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 text-gray-800`}>
                    SANDRA ROGGERO M.
                </h2>
                <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 text-violet-900`}>
                    BERATUNG
                </span>
            </div>
        </div>
        <p className="text-start text-sm sm:text-sm md:text-lg">
          Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen.
        </p>
        <p className="text-start text-sm sm:text-sm md:text-lg">
          Heute geht es um mehr als nur darum, "schnell" neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen.
        </p>
        <button
          className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
          onClick={handleClickSeleccionReclutamiento}
        >
          Kontaktaufnahme
        </button>
        </div>
    </div>
      <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
        <p className="w-11/12 m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center">
          DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN?
        </p>
      </div>
    <div className="min-h-screen bg-white py-8 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {infoItems2.map((item, index) => (
            <div key={index}  className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
            {/* <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div> */}
            </div>
        ))}
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