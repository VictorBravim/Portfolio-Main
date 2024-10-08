'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: { name: string; image: string; link: string } }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-2xl shadow-md overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                perspective: '1000px',
            }}
        >
            {/* Card inteiro agora faz a animação 3D */}
            <motion.div
                className="w-full h-full"
                style={{
                    transform: isHovered ? 'rotateX(15deg)' : 'rotateX(0deg)', // Efeito 3D
                    transition: 'transform 0.4s ease',
                }}
            >
                <img 
                    src={project.image} 
                    alt={`Projeto ${project.name}`} 
                    className="w-full h-64 object-cover"
                />
            </motion.div>

            {/* Botão visível apenas no hover */}
            <motion.div 
                className="absolute inset-0 flex justify-center items-center"
                style={{
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo do botão
                    borderRadius: '16px',
                    pointerEvents: isHovered ? 'auto' : 'none', // Impede interações quando invisível
                }}
            >
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0086B0] text-white py-2 px-4 rounded-full"
                >
                    Visualizar
                </a>
            </motion.div>
        </motion.div>
    );
};

export default Projects;