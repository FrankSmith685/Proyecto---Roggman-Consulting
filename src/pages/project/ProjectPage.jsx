// ProjectPage.jsx
import React from 'react';
import ProjectCard from './Cards/ProjectCard';

const ProjectPage = () => {
    const projects = [
        {
            id: 1,
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            githubLink: 'https://github.com/tuusuario/proyecto1',
            imageUrl: 'https://via.placeholder.com/300', // URL de la imagen del proyecto
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            githubLink: 'https://github.com/tuusuario/proyecto2',
            imageUrl: 'https://via.placeholder.com/300', // URL de la imagen del proyecto
        },
        // Agregar más proyectos según sea necesario
    ];

    return (
        <div className="container mx-auto py-20">
            <h1 className="text-3xl font-semibold text-center text-white mb-2">Mis Proyectos</h1>
            <div className="flex flex-col items-center">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
