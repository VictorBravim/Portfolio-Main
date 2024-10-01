import React from 'react';

const projects = [
    {
        name: 'Seton',
        image: '/images/Seton.png',
        link: 'https://seton.com'
    },
    {
        name: 'ArenaX',
        image: '/images/ArenaX.png',
        link: 'https://arenax.com'
    },
    {
        name: 'Norishi',
        image: '/images/Norishi.png',
        link: 'https://norishi.com'
    },
    {
        name: 'RedRoast',
        image: '/images/RedRoast.png',
        link: 'https://redroast.com'
    },
    {
        name: 'TrueVR',
        image: '/images/TrueVR.png',
        link: 'https://truevr.com'
    },
    {
        name: 'WebStore',
        image: '/images/WebStore.png',
        link: 'https://webstore.com'
    },
    {
        name: 'Exotics',
        image: '/images/Exotics.png',
        link: 'https://exotics.com'
    },
    {
        name: 'Cofty',
        image: '/images/Cofty.png',
        link: 'https://cofty.com'
    },
    {
        name: 'MeshWear',
        image: '/images/MeshWear.png',
        link: 'https://meshwear.com'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Projetos <span className="text-[#0086B0]">Recentes</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-2xl shadow-md overflow-hidden"
                    >
                        <img 
                            src={project.image} 
                            alt={`Projeto ${project.name}`} 
                            className="w-full object-cover"
                        />
                        <div 
                            className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center"
                        >
                            <h3 className="text-white text-2xl font-bold mb-4">{project.name}</h3>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#0086B0] text-white py-2 px-4 rounded-full"
                            >
                                Visualizar
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;