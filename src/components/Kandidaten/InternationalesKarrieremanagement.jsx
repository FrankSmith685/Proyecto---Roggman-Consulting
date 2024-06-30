
import { useNavigate } from "react-router-dom";
import bannerPrincipal from "../../assets/imagenes/home/imagen12.jpg";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const InternationalesKarrieremanagement=()=>{
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome=()=>{
        navigate("/");
    }

    const beneficios = [
        "Fügt einen einzigartigen Wert zum Lebenslauf hinzu",
        "Erweitert Ihr berufliches Netzwerk",
        "Beherrscht neue Sprachen",
        "Verbessert soziale Fähigkeiten",
        "Passt sich schnell an",
        "Fördert Führungsqualitäten",
        "Erkundet neue Kulturen",
        "Übernimmt innovative Arbeitsmethoden"
      ];
      

    return(
        <>
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                src="" 
                alt="Internationales Karrieremanagement " 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                        Internationales Karrieremanagement 
                    </h2>
                </div>
                </div>
            </div>
            <div className="w-11/12 px-2 sm:px-10 pb-10 mx-auto">
                <p className="text-lg text-gray-400 py-10 font-bell">
                <span onClick={handleClickHome} className="hover:cursor-pointer  text-gray-800 font-medium">
                    Sandra Roggero <span className="text-gray-500 font-medium text-base">Beratung</span>
                </span>
                {' > '}
                    Internationales Karrieremanagement
                </p>
                <h2 className="text-gray-700 text-start w-full pb-1 font-semibold text-2xl">Ihre Karriere hat keine Grenzen</h2>
                <p className="text-gray-700 text-start w-full pb-1">
                Bereit für den nächsten Schritt? Deutschland wartet auf Dich!
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                    
                    Wenn Ihr Ziel darin besteht, Ihre berufliche Laufbahn in Deutschland voranzutreiben, steht Ihnen unser spezialisiertes 
                    Team für internationale Karriereberatung zur Seite, Ihr Talent sehr weit zu bringen.

                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                Bei Sandra Roggero M. Beratung sehen wir über Ihren Lebenslauf hinaus, wir schätzen die einzigartige Geschichte, die Sie in
                deutsche Unternehmen einbringen können, Wir werde Ihnen zuhören und wir wissen, wie man die Qualitäten erkennt, die Sie auszeichnen, und die Eigenschaften, die Sie zum Strahlen bringen können.
                </p>
                <p className="text-gray-700 text-start w-full pb-1">
                Aufgrund unseres aktiven internationalen Engagements und der ständigen Zusammenarbeit mit Unternehmen können wir Sie mit Unternehmen 
                in Verbindung bringen, die ihre Teams mit unterschiedlichen Profilen und den einzigartigen Fähigkeiten von Fachleuten mit internationaler 
                Erfahrung bereichern möchten.
                </p>
            </div>
            <div className="w-full bg-gray-800">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col items-center justify-center p-4 md:p-8">
                        <div className="w-full p-6 rounded-lg bg-white shadow-lg">
                            <h1 className="text-2xl font-semibold text-center pb-4 text-gray-700">Vorteile des Arbeitens im Ausland</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-lg">
                                {beneficios.map((beneficio, index) => (
                                    <div key={index} className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-2" />
                                        <span className="text-sm text-gray-700">{beneficio}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto p-4 md:p-10">
                <h2 className="text-2xl font-semibold text-start pb-4 text-gray-700">Bereit, den Schritt zu wagen?</h2>
                <p className="text-start pb-4 text-gray-700">Senden Sie uns Ihren Lebenslauf und Ihre beruflichen Erwartungen an <span className="font-bold">example@gmail.com</span> und einer unserer Experten für internationales Karrieremanagement wird sich mit Ihnen in Verbindung setzen.</p>
                <button
                    className="border-gray-800 border-2 px-4 py-2 sm:px-6 sm:py-3 font-medium bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                >
                    Senden Sie Ihren Lebenslauf
                </button>                
            </div>

        </>
    )
}
export default InternationalesKarrieremanagement;