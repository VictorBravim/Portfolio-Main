'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    // Controle de animação do Framer Motion
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(false);

    // Detecta se a seção "Projects" está visível
    const { ref, inView } = useInView({
        triggerOnce: true,  // Anima apenas uma vez
        threshold: 0.1,     // Quando 10% da seção entra na tela
    });

    // Verifica se o dispositivo é mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Verifica no primeiro render
        window.addEventListener('resize', handleResize); // Atualiza ao redimensionar a janela

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Dispara a animação apenas quando a seção está em vista
    useEffect(() => {
        if (inView && !isMobile) {
            controls.start("visible");
        }
    }, [inView, controls, isMobile]);

    return (
        <section ref={ref} className="lg:py-12 px-4 sm:px-8 lg:px-[160px] bg-black">
            <h2 className="font-inter text-[25px] lg:text-[75px] font-bold text-center mb-8">
                Projetos <span className="text-[#0086B0]">Recentes</span>
            </h2>
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate={controls}  // Controla a animação com base no scroll
                variants={!isMobile ? {
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2
                        }
                    },
                    hidden: {
                        opacity: 0,
                        y: 20
                    }
                } : {}}  // Desativa as animações no mobile
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: { name: string; image: string; link: string } }> = ({ project }) => {
    const [transform, setTransform] = useState("rotateX(0deg) scale(1)");

    const onMouseEnter = () => {
        setTransform("rotateX(40deg) scale(0.9)");
    };
    const onMouseLeave = () => {
        setTransform("rotateX(0deg) scale(1)");
    };

    return (
        <motion.div
            className="group relative z-50 cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                style={{ perspective: "1000px" }}
                className="relative flex items-center justify-center"
            >
                <div
                    style={{ transform }}
                    className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg border border-white/[0.1] transition duration-700"
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                        priority={false}
                        draggable={false}
                    />
                </div>

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
        </motion.div>
    );
};

export default Projects;