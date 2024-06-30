import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
import HeaderNav from "../pages/assets/HeaderNav";
import Footer from "../pages/assets/Footer";

import useImagePreloading from "../hooks/useImagenesPreLoader";
import { useAppState } from "../hooks/useAppState";
// Importa los componentes de las páginas
const HomePage = lazy(() => import("../pages/home/HomePage"));

const PersonalauswahlUndRekrutierung = lazy(() => import("../components/Unternehmen/PersonalauswahlUndRekrutierung"));
const Personalbewertungen = lazy(() => import("../components/Unternehmen/Personalbewertungen"));
const International = lazy(() => import("../components/Unternehmen/International"));
const Funktionen = lazy(() => import("../components/Unternehmen/funktionen"));
const FachspezifischeSuche = lazy(() => import("../components/Unternehmen/FachspezifischeSuche"));
const Inklusionsaudit = lazy(() => import("../components/Unternehmen/Inklusionsaudit"));

const RegistrierenSieIhrenLebenslauf = lazy(() => import("../components/Kandidaten/RegistrierenSieIhrenLebenslauf"));
const InternationalesKarrieremanagement = lazy(() => import("../components/Kandidaten/InternationalesKarrieremanagement"));

const UnserePhilosophie = lazy(() => import("../components/Wir/UnserePhilosophie"));
const WerWirSind = lazy(() => import("../components/Wir/WerWirSind"));

const StudiumAusbildungPraktikum = lazy(() => import("../components/Meine-Dienstleistungen/StudiumAusbildungPraktikum")); 
const ArbeitSteuern = lazy(() => import("../components/Meine-Dienstleistungen/ArbeitSteuern"));
const WohnenTransport = lazy(() => import("../components/Meine-Dienstleistungen/WohnenTransport"));
const VisumSprache = lazy(() => import("../components/Meine-Dienstleistungen/VisumSprache"));

const Kontakt = lazy(() => import("../components/Kontakt/kontakt"));

const PrivacyPolicy = lazy(() => import("../pages/assets/PrivacyPolicy"));
const Benutzerrechte = lazy(() => import("../pages/assets/Benutzerrechte"));

export const AppRoutes = () => {
  const {activeCarga} = useAppState();
  // Cargamos las imagenes
  useImagePreloading();

  return (
    <>
      <Router>
        <div>
        {!activeCarga ? (<div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
                <FaSpinner className="animate-spin text-9xl text-gray-500" />
              </div>) : (
          <>
            <HeaderNav />
            <Suspense fallback={(
              <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
                <FaSpinner className="animate-spin text-9xl text-gray-500" />
              </div>
            )}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/unternehmen/personalauswahl-und-rekrutierung" element={<PersonalauswahlUndRekrutierung/>} />
                <Route path="/unternehmen/personalbewertungen" element={<Personalbewertungen/>} />
                <Route path="/unternehmen/international" element={<International/>} />
                <Route path="/unternehmen/funktionen" element={<Funktionen/>} />
                <Route path="/unternehmen/fachspezifische-suche" element={<FachspezifischeSuche/>} />
                <Route path="/unternehmen/inklusionsaudit" element={<Inklusionsaudit/>} />

                <Route path="/kandidaten/registrieren-sie-ihren-lebenslauf" element={<RegistrierenSieIhrenLebenslauf/>} />
                <Route path="/kandidaten/internationales-karrieremanagement" element={<InternationalesKarrieremanagement/>} />

                <Route path="/wir/unsere-philosophie" element={<UnserePhilosophie/>} />
                <Route path="/wir/wer-wir-sind" element={<WerWirSind/>} />
                
                {/*Meine-Dienstleistungen*/}
                <Route path="/meine-dienstleistungen/studium-ausbildung-praktikum" element={<StudiumAusbildungPraktikum />} />
                <Route path="/meine-dienstleistungen/arbeit-steuern" element={<ArbeitSteuern />} />
                <Route path="/meine-dienstleistungen/wohnen-beförderung" element={<WohnenTransport />} />
                <Route path="/meine-dienstleistungen/visum-sprache" element={<VisumSprache />} />

                <Route path="/kontakt" element={<Kontakt />} />
            
                <Route path="/datenschutzrichtlinie" element={<PrivacyPolicy />} />
                <Route path="/benutzerrechte" element={<Benutzerrechte />} />
                
              </Routes>
            </Suspense>
            <Footer />
          </>
        )}
        </div>
      </Router>
    </>
  );
};
