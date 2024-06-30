// ProjectCard.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-red-500 overflow-hidden my-2 w-full h-96">
            <div className="flex flex-col lg:flex-row py-0">
                <div className="w-1/2 p-0 flex flex-col justify-center">
                    {/* <h2 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h2>
                    <p className="text-gray-600 mb-6 lg:text-lg">{project.description}</p>
                    <div className="flex justify-center lg:justify-start">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-8 py-4 rounded-md transition-colors hover:bg-gray-700 text-lg mr-4"
                        >
                            <FaGithub className="inline-block mr-2" />
                            Ver en GitHub
                        </a>
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-8 py-4 rounded-md transition-colors hover:bg-blue-700 text-lg"
                        >
                            Demo
                        </a>
                    </div> */}
                </div>
                
                <div className="lg:w-1/2 h-auto relative overflow-hidden">
                    <img className="w-full h-96 object-cover transition-transform transform hover:scale-105" src={project.imageUrl} alt={project.title} />
                    {/* <div className=" h-2/3 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white flex items-center justify-center"
                        >
                            <FaGithub className="mr-2" />
                            Ver en GitHub
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
