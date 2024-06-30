import React from "react";
// import portafolio from "../../assets/imagenes/portafolio.jpeg";
// import CardAbout from "./Cards/CardAbout";
// import CustomCalendar from "./CustomCalendar/CustomCalendar";

const AboutPage = () => {
  // const tecnologias = [
  //   'Javascript', 'Node.js', 'React', 'Redux', 'Html5', 'Css', 'tailwind css', 'Bootstrap',
  //   'scss', 'next.js', 'sequelize', 'Angular', 'PostgreSQL', 'TypeScript', 'Mysql',
  //   'SqlServer', 'C#', 'ASP.Net Core', 'React Native', 'Spring Boot', 'Java', 'Git'
  // ];

  return (
    <>
      {/* <div className="flex justify-center items-center w-full h-auto px-36 pt-32 pb-10 space-x-10"> */}
        {/* <div className="w-full h-full flex flex-col items-start justify-start relative overflow-y-auto space-y-3">
          <h2 className="text-4xl font-normal flex items-center justify-center w-full text-white">
            ¿Quién <strong className="pl-2 text-orange-500"> soy?</strong>
          </h2>
          <p className="text-white text-xl">
            ¡Hola a todos! Soy <strong className="text-orange-500 font-medium">Frank Smith Bocangelino Rojas</strong>
            de <strong className="text-orange-500 font-medium pr-2">Lima, Perú</strong>. Soy un apasionado Desarrollador
            FullStack con experiencia en resolver problemas y crear soluciones innovadoras. He trabajado en diversos
            proyectos donde he podido demostrar mis habilidades técnicas y mi capacidad para trabajar en equipo.
          </p>
          <h2 className="text-4xl font-normal flex items-center justify-center w-full text-white">
            ¿Por qué <strong className="pl-2 text-orange-500"> yo?</strong>
          </h2>
          <p className="text-white text-xl">
            Estoy constantemente buscando oportunidades para aprender y crecer profesionalmente. Mi experiencia incluye
            desarrollo de aplicaciones web y móviles, así como colaboración en equipos multidisciplinarios para alcanzar
            objetivos comunes. Además, me considero una persona colaborativa, creativa y orientada a resultados.
          </p>
          <p className="text-white text-xl">
            ¡Estoy emocionado de poder contribuir al éxito de su equipo y enfrentar nuevos desafíos juntos!
          </p>
          <h2 className="text-4xl font-normal flex items-center justify-center w-full text-white">
            Pasatiempos y Características
          </h2>
          <p className="text-white text-xl">
            En mi tiempo libre, disfruto de la lectura, la práctica de deportes y escuchar música para relajarme.
            También me gusta mantenerme en forma y frecuento el gimnasio para cuidar mi salud física.
          </p>
          <p className="text-white text-xl">
            Además, soy una persona tranquila con una actitud positiva. Me considero ordenado y disciplinado, lo que
            me permite abordar mis tareas con constancia y determinación hasta completarlas satisfactoriamente.
          </p>
          <p className="text-white text-xl">
            Si te interesa mi perfil no dudes en contactarme.
          </p>
        </div>
        <div className="w-1/2 h-full relative">
          <div className="w-full h-full">
            <img src={portafolio} alt="NOT FOUND" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-full h-full px-36 text-center">
        <h2 className="text-white text-4xl">
          Conjunto de habilidades <strong className="text-orange-500 font-medium pl-1">Profesionales</strong>
        </h2>
        <div className="flex flex-wrap justify-start my-5">
          {tecnologias.map((tecnologia, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
              <CardAbout tecnologia={tecnologia} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full px-36 text-center my-5">
        <h2 className="text-white text-4xl">
          Educación <strong className="text-orange-500 font-medium pl-1">Profesional</strong>
        </h2>
        <div className="flex flex-col items-start justify-start space-y-3 text-left my-5">
          <div className="bg-gray-800 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-2xl text-orange-500 font-medium">Cibertec</h3>
            <p className="text-white text-xl">
              Instituto de Educación Superior Tecnológica, Lima, Perú.
              <br />
              <strong>Carrera de Tecnología Informática.</strong>
              <br />
              Durante mi formación en Cibertec, adquirí conocimientos sólidos y habilidades prácticas en diversas áreas de la tecnología informática. Los cursos que completé incluyen:
              <ul className="list-disc list-inside mt-2">
                <li><strong>Programación:</strong> Dominio de lenguajes como Java, C#, y JavaScript, con énfasis en buenas prácticas de codificación y desarrollo ágil.</li>
                <li><strong>Bases de Datos:</strong> Diseño, implementación y administración de bases de datos relacionales usando MySQL y SQL Server.</li>
                <li><strong>Desarrollo Web:</strong> Creación de aplicaciones web dinámicas utilizando HTML5, CSS3, y frameworks como Bootstrap y React.</li>
                <li><strong>Redes y Seguridad:</strong> Conocimientos en configuración de redes, protocolos de comunicación y medidas de seguridad informática.</li>
                <li><strong>Gestión de Proyectos:</strong> Metodologías ágiles como Scrum y herramientas de gestión de proyectos para asegurar la entrega exitosa de proyectos tecnológicos.</li>
              </ul>
              Además, participé en proyectos colaborativos que me permitieron aplicar mis conocimientos en situaciones reales, mejorando mis habilidades de trabajo en equipo y resolución de problemas.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-md w-full">
            <h3 className="text-2xl text-orange-500 font-medium">Henry Bootcamp</h3>
            <p className="text-white text-xl">
              Bootcamp de Desarrollo FullStack.
              <br />
              En Henry, me especialicé en desarrollo web FullStack, obteniendo un profundo conocimiento y experiencia en tecnologías modernas. El programa incluyó:
              <ul className="list-disc list-inside mt-2">
                <li><strong>Frontend:</strong> Desarrollo de interfaces de usuario dinámicas y responsivas utilizando React, Redux, HTML5, CSS3, y frameworks como Bootstrap y Tailwind CSS.</li>
                <li><strong>Backend:</strong> Creación de API RESTful y servicios backend robustos usando Node.js, Express, y Sequelize para la gestión de bases de datos.</li>
                <li><strong>Bases de Datos:</strong> Diseño, implementación y manejo de bases de datos relacionales como PostgreSQL.</li>
                <li><strong>Control de Versiones:</strong> Uso avanzado de Git y GitHub para el control de versiones y colaboración en proyectos.</li>
                <li><strong>Metodologías Ágiles:</strong> Aplicación de metodologías ágiles como Scrum y Kanban para la gestión eficiente de proyectos en equipo.</li>
              </ul>
              Durante el bootcamp, participé en varios proyectos prácticos, donde desarrollé aplicaciones web completas desde cero. Estos proyectos me permitieron consolidar mis habilidades técnicas y trabajar efectivamente en equipos multidisciplinarios.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full px-36 text-center my-5">
        <CustomCalendar />
      </div> */}
    </>
  );
};

export default AboutPage;
