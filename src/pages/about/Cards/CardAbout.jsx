import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faJs, faNodeJs, faReact, faHtml5, faCss3Alt, 
    faBootstrap, faSass, faAngular, faJsSquare, 
    faMicrosoft, faGitAlt, faReacteurope, faJava 
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { TbBrandRedux } from "react-icons/tb";
import { SiCsharp, SiMysql, SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";

const getIcon = (tecnologia) => {
    switch (tecnologia) {
        case "Javascript":
            return <FontAwesomeIcon icon={faJs} className="text-white" />;
        case "Node.js":
            return <FontAwesomeIcon icon={faNodeJs} className="text-white" />;
        case "React":
            return <FontAwesomeIcon icon={faReact} className="text-white" />;
        case "Html5":
            return <FontAwesomeIcon icon={faHtml5} className="text-white" />;
        case "Css":
            return <FontAwesomeIcon icon={faCss3Alt} className="text-white" />;
        case "tailwind css":
            return <FontAwesomeIcon icon={faCss3Alt} className="text-white" />;
        case "Bootstrap":
            return <FontAwesomeIcon icon={faBootstrap} className="text-white" />;
        case "scss":
            return <FontAwesomeIcon icon={faSass} className="text-white" />;
        case "next.js":
            return <FontAwesomeIcon icon={faReact} className="text-white" />;
        case "sequelize":
            return <FontAwesomeIcon icon={faDatabase} className="text-white" />;
        case "Angular":
            return <FontAwesomeIcon icon={faAngular} className="text-white" />;
        case "PostgreSQL":
            return <SiPostgresql className="text-white"/>
        case "Redux":
            return <TbBrandRedux className="text-white" />;
        case "TypeScript":
            return <FontAwesomeIcon icon={faJsSquare} className="text-white" />;
        case "Mysql":
            return <SiMysql className="text-white"/>
        case "SqlServer":
            return <DiMsqlServer className="text-white"/>
        case "C#":
            return <SiCsharp className="text-white"/>;
        case "ASP.Net Core":
            return <FontAwesomeIcon icon={faMicrosoft} className="text-white" />;
        case "React Native":
            return <FontAwesomeIcon icon={faReacteurope} className="text-white" />;
        case "Spring Boot":
            return <BiLogoSpringBoot className="text-white"/>
        case "Java":
            return <FontAwesomeIcon icon={faJava} className="text-white" />;
        case "Git":
            return <FontAwesomeIcon icon={faGitAlt} className="text-white" />;
        default:
            return null;
    }
};

const CardAbout = ({ tecnologia }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-orange-600 rounded-lg shadow-lg p-4 transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            {/* <div className="text-5xl animate-pulse">{getIcon(tecnologia)}</div>
            <p className="mt-4 text-xl font-extrabold text-white">{tecnologia}</p> */}
        </div>
    );
};

export default CardAbout;
