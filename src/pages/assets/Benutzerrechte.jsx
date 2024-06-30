import React, { useEffect } from 'react';

const Benutzerrechte = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="p-8 bg-white text-gray-900 mt-32 max-w-4xl mx-auto shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Benutzerrechte</h1>
            <p className="mb-6 text-lg leading-relaxed">
                Sie haben das Recht, Zugang zu Ihren Daten sowie deren Berichtigung oder Löschung zu verlangen. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter:
            </p>
            <address className="mb-6 text-lg leading-relaxed">
                <strong>Name Ihres Unternehmens:</strong> <span>[Name Ihres Unternehmens]</span><br />
                <strong>Adresse:</strong> <span>[Adresse]</span><br />
                <strong>E-Mail Adresse:</strong> <a href="mailto:[E-Mail Adresse]" className="text-blue-600">[E-Mail Adresse]</a><br />
                <strong>Telefon:</strong> <a href="tel:[Telefon]" className="text-blue-600">[Telefon]</a><br />
            </address>
            <p className="mb-6 text-lg leading-relaxed">
                Weitere Einzelheiten finden Sie in unserer vollständigen Datenschutzrichtlinie auf unserer Webseite.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Rechtlicher Hinweis</h2>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Allgemeine Informationen</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Diese rechtlichen Hinweise regeln die Nutzung der Website [Name der Website], die Eigentum von Sandra Roggero M. Beratung ist:
                </p>
                <address className="mb-4 text-lg leading-relaxed">
                    <strong>Firmenname:</strong> Sandra Roggero M. Beratung<br />
                    <strong>Adresse:</strong> <span>[Ihre Firmenadresse]</span><br />
                    <strong>E-Mail:</strong> <a href="mailto:[Kontakt-E-Mail-Adresse]" className="text-blue-600">[Kontakt-E-Mail-Adresse]</a><br />
                    <strong>Telefon:</strong> <a href="tel:[Kontakttelefonnummer]" className="text-blue-600">[Kontakttelefonnummer]</a><br />
                    <strong>Gesetzlicher Vertreter:</strong> <span>[Name des gesetzlichen Vertreters]</span><br />
                    <strong>Steueridentifikationsnummer:</strong> <span>[Steueridentifikationsnummer]</span>
                </address>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Nutzungsbestimmungen und -bedingungen</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Durch den Zugriff auf diese Website und deren Nutzung erklären Sie sich mit den in diesem rechtlichen Hinweis aufgeführten Bedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, müssen Sie von der Nutzung der Website absehen.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Geistiges Eigentum</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Alle Inhalte dieser Website, einschließlich der Texte, Grafiken, Logos, Bilder und Software, sind Eigentum von Sandra Roggero M. Beratung oder deren Lizenzgebern und sind urheberrechtlich geschützt. Die unerlaubte Vervielfältigung, Verbreitung oder Veränderung dieser Inhalte ist untersagt.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">4. Beschränkung der Haftung</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Die Informationen und Dienstleistungen, die auf dieser Website enthalten sind, oder über sie verfügbar sind, können Ungenauigkeiten oder typografische Fehler enthalten. Sandra Roggero M. Beratung übernimmt keine Garantie für die Richtigkeit oder die Zuverlässigkeit der auf dieser Website enthaltenen Informationen. Die Nutzung der Website erfolgt auf eigene Gefahr.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">5. Links zu Drittparteien</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Diese Website kann Links zu anderen Websites enthalten, die von Dritten betrieben werden. Sandra Roggero M. Beratung ist nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser externen Seiten. Die Aufnahme solcher Links bedeutet nicht, dass die verlinkten Seiten gebilligt werden.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">6. Schutz der Daten</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Alle persönlichen Daten, die über diese Website gesammelt werden, werden in Übereinstimmung mit unserer Datenschutzrichtlinie behandelt.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">7. Änderungen des rechtlichen Hinweises</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Sandra Roggero M. Beratung behält sich das Recht vor, diese Hinweise jederzeit zu ändern. Die Änderungen werden mit der Veröffentlichung auf der Website wirksam. Wir empfehlen Ihnen, diese rechtlichen Hinweise regelmäßig zu überprüfen, um sich über etwaige Änderungen zu informieren.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">8. Anwendbares Recht und Gerichtsbarkeit</h3>
                <p className="mb-4 text-lg leading-relaxed">
                    Dieser rechtliche Hinweis unterliegt dem deutschen Recht. Für alle Streitigkeiten, die im Zusammenhang mit dieser Website entstehen, sind ausschließlich die Gerichte von [Stadt/Region] zuständig.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">9. Kontakt</h3>
                <address className="text-lg leading-relaxed">
                    <strong>Name Ihres Unternehmens:</strong> <span>[Name Ihres Unternehmens]</span><br />
                    <strong>Adresse:</strong> <span>[Adresse]</span><br />
                    <strong>E-Mail Adresse:</strong> <a href="mailto:[E-Mail Adresse]" className="text-blue-600">[E-Mail Adresse]</a><br />
                    <strong>Telefon:</strong> <a href="tel:[Telefon]" className="text-blue-600">[Telefon]</a><br />
                </address>
            </div>
        </div>
    );
};

export default Benutzerrechte;
