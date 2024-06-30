import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg mt-32 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Datenschutzrichtlinie</h1>
            <p className="mb-6 text-lg leading-relaxed">
                Wir von Sandra Roggero M. Beratung verpflichten uns, Ihre Privatsphäre zu schützen. Wenn Sie Ihren Lebenslauf und Ihre persönlichen Daten über unser Formular übermitteln, werden die Informationen direkt an eine bestimmte E-Mail-Adresse gesendet und nicht in einer Datenbank gespeichert.
            </p>

            <div className="bg-gray-100 p-6 rounded-md shadow-inner mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">Erfasste Daten</h2>
                <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
                    <li>Name</li>
                    <li>Ihre E-Mail-Adresse</li>
                    <li>Telefonnummer</li>
                    <li>Lebenslauf und Angaben zum beruflichen Werdegang</li>
                </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-md shadow-inner mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">Verwendung der Daten</h2>
                <p className="mb-4 text-lg leading-relaxed">Wir verwenden Ihre persönlichen Daten für folgende Angelegenheiten:</p>
                <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
                    <li>um Ihre Eignung für eine Stelle zu beurteilen.</li>
                    <li>um mit Ihnen über Ihre Bewerbung zu kommunizieren.</li>
                </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-md shadow-inner">
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">Zum Schutz Ihrer Daten</h2>
                <p className="text-lg leading-relaxed">
                    Ihre Angaben werden sicher an unsere E-Mail-Adresse gesendet und nicht in einer Datenbank gespeichert. Wir ergreifen alle angemessenen Maßnahmen, um Ihre Daten vor unbefugtem Zugriff zu schützen.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
