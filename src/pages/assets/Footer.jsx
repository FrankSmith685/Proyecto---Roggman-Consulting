import React from "react";
import { Link } from "react-router-dom";
import logoPrincipal from "../../assets/imagenes/logoPrincipal.png";

const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center ">
                        <Link to="/" onClick={handleLinkClick} className='flex flex-col items-center'>
                            <img src={logoPrincipal} alt="Logo Principal" className='h-20' />
                            <div className="flex flex-col items-center">
                                <h2 className="font-roboto-thin font-medium lg:text-xl md:text-lg transition-colors duration-300 text-white">
                                    SANDRA ROGGERO M.
                                </h2>
                                <span className="font-bell text-sm font-bold -mt-1 transition-colors duration-300 text-white">
                                    BERATUNG
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-between items-start px-0">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">Informationen</h2>
                        <ul className="text-white px-2">
                            <li className="mb-2"><Link to="/benutzerrechte" className="font-normal">Benutzerrechte</Link></li>
                            <li className="mb-2"><Link to="/datenschutzrichtlinie" className="font-normal">Datenschutzrichtlinie</Link></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">Nützliche Links</h2>
                        <ul className="text-white font-medium px-2">
                            <li className="mb-2"><Link to="/meine-dienstleistungen/studium-ausbildung-praktikum" className="font-normal">Studium - Ausbildung - Praktikum</Link></li>
                            <li className="mb-2"><Link to="/meine-dienstleistungen/arbeit-steuern" className="font-normal">Arbeit - Steuern</Link></li>
                            <li className="mb-2"><Link to="/meine-dienstleistungen/wohnen-transport" className="font-normal">Wohnen - Beförderung</Link></li>
                            <li className="mb-2"><Link to="/meine-dienstleistungen/visum-sprache" className="font-normal">Visum - Sprache</Link></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
                        <ul className="text-white px-2">
                            <li className="mb-2">Email: kontakt@sandra-roggero.de</li>
                            <li className="mb-2">Telefon: +49 123 456 789</li>
                            <li className="mb-2">Adresse: Musterstraße 1, 12345 Musterstadt, Deutschland</li>
                            <li className="mb-2">Öffnungszeiten: Mo-Fr, 9:00 - 18:00 Uhr</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
                        <form>
                            <input
                                type="email"
                                placeholder="Ihre Email"
                                className="w-full px-3 py-2 mb-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button type="submit" className="w-full py-2 bg-gray-800 text-white font-bold rounded transition duration-200 hover:bg-gray-700">
                                Abonnieren
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="my-8 border-white" />

                <div className="text-center">
                    <p className="font-medium">&copy; 2024 Alle Rechte vorbehalten</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
