'use client';
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        // Verifica se o dispositivo é mobile com base no tamanho da tela
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Define como mobile se a largura for menor que 768px
        };

        handleResize(); // Verifica no primeiro render
        window.addEventListener('resize', handleResize); // Atualiza ao redimensionar a janela

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Define as animações para a entrada
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="pt-20 lg:pt-28 px-4 sm:px-8 lg:px-[160px] bg-black" ref={ref}>
            <h2 className="font-inter text-[25px] lg:text-[75px] font-bold text-center mb-8">
                Sobre <span className="text-[#0086B0]">Mim</span>
            </h2>
            <motion.div
                className="bg-gradient-to-b from-[#8c8c8c25] to-[#16161636] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg overflow-hidden w-full p-4 sm:p-8 flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={!isMobile ? fadeIn : {}} // Desativa animação no mobile
            >
                {/* Imagem à esquerda (aumentada) */}
                <div className="flex justify-center">
                    <img
                        src="/images/Perfil.jpg"
                        alt="Victor Bravim"
                        className="rounded-full w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] object-cover"
                    />
                </div>

                {/* Texto e conteúdo à direita */}
                <div className="flex-1 text-center lg:text-left pl-0 sm:pl-12 space-y-6">
                    <p className="text-[20px] lg:text-[22px] text-white leading-relaxed">
                        Olá, eu sou Victor Bravim, desenvolvedor front-end. Trabalho com desenvolvimento <br /> 
                        web, criando sites com programação e também cuidando do design UI/UX utilizando o <br /> 
                        Figma. Tenho experiência em criar sites usando também ferramentas no-code, como <br /> 
                        WordPress e Elementor, transformando ideias em projetos funcionais e atrativos.
                    </p>

                    {/* Seções de Experiência e Cursos lado a lado */}
                    <div className="hidden lg:flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-12">
                        {/* Experiência Profissional */}
                        <div className="flex-1">
                            <h3 className="font-inter text-[20px] sm:text-[24px] font-semibold mb-2">Cursos</h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong className="text-[#0086B0]">
                                        UX e UI Design - <span className="text-white">GGTE - UNICAMP</span>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="text-[#0086B0]">
                                        Desenvolvimento Web - <span className='text-white'>Udemy</span>
                                    </strong>
                                </li>
                            </ul>
                        </div>

                        {/* Cursos e Certificações */}
                        <div className="flex-1">
                            <h3 className="font-inter text-[20px] sm:text-[24px] font-semibold mb-2">Certificações</h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong className="text-[#0086B0]">Inglês - <span className='text-white'>Udemy</span></strong>
                                </li>
                                <li>
                                    <strong className="text-[#0086B0]">Python Profissional - <span className='text-white'>Udemy</span></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ícones sociais à direita */}
                <div className="flex flex-row lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-6">
                    <a href="https://www.instagram.com/victorbravim_/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/VictorBravim/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/VictorBravim" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaGithub />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default About;