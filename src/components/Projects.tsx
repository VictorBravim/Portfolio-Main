'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const projects = [
    {
        name: 'Seton',
        image: '/images/Seton.png',
        link: 'https://seton-eight.vercel.app/'
    },
    {
        name: 'ArenaX',
        image: '/images/ArenaX.png',
        link: 'https://arena-x-zeta.vercel.app'
    },
    {
        name: 'Norishi',
        image: '/images/Norishi.png',
        link: 'https://norishi.vercel.app'
    },
    {
        name: 'RedRoast',
        image: '/images/RedRoast.png',
        link: 'https://redroast.vercel.app'
    },
    {
        name: 'TrueVR',
        image: '/images/TrueVR.png',
        link: 'https://truevr.vercel.app'
    },
    {
        name: 'WebStore',
        image: '/images/WebStore.png',
        link: 'https://web-store-pi.vercel.app'
    },
    {
        name: 'Exotics',
        image: '/images/Exotics.png',
        link: 'https://exotics.vercel.app'
    },
    {
        name: 'Cofty',
        image: '/images/Cofty.png',
        link: 'https://cofty.vercel.app'
    },
    {
        name: 'MeshWear',
        image: '/images/MeshWear.png',
        link: 'https://meshwear.vercel.app'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Projetos <span className="text-[#0086B0]">Recentes</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: { image: string; link: string } }> = ({ project }) => {
    const [transform, setTransform] = useState("rotateX(0deg) scale(1)");

    const onMouseEnter = () => {
        setTransform("rotateX(40deg) scale(0.9)"); // Efeito de cair para trás
    };
    const onMouseLeave = () => {
        setTransform("rotateX(0deg) scale(1)");
    };

    return (
        <div
            className="group relative z-50 cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div
                style={{
                    perspective: "1000px", // Define profundidade 3D
                }}
                className="relative flex items-center justify-center"
            >
                <div
                    style={{ transform }}
                    className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700"
                >
                    <img
                        src={project.image}
                        alt="Project Image"
                        className="w-full h-full object-cover rounded-lg" // Garante que a imagem ocupe o espaço corretamente
                    />
                </div>

                {/* Botão de Ação em cima da imagem */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                >
                    <Link
                        href={project.link}
                        target="_blank"
                        className="relative z-20 flex items-center space-x-2 rounded-full bg-zinc-950 px-8 py-2 ring-1 ring-white/10"
                    >
                        <span className="relative inline-block py-1 text-lg font-bold text-white">
                            Visualizar
                        </span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;