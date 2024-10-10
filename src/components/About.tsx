import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <section className="pt-20 lg:pt-28 px-4 sm:px-8 lg:px-[160px] bg-black">
            <h2 className="font-inter text-[25px] lg:text-[85px] font-bold text-center mb-8">
                Sobre <span className="text-[#0086B0]">Mim</span>
            </h2>
            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#16161636] backdrop-blur-[4px] border border-white border-opacity-10 rounded-3xl overflow-hidden w-full p-4 sm:p-8 flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12">
                
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
                        Olá, sou Victor Bravim, um desenvolvedor front-end de Lorena, SP.
                        Com experiência <br /> em desenvolvimento web e design UI/UX, busco
                        criar soluções eficientes e atraentes. <br /> Além disso, utilizo ferramentas
                        no-code como WordPress para transformar ideias <br /> em projetos
                        funcionais e impactantes.
                    </p>

                    {/* Seções de Experiência e Cursos lado a lado */}
                    <div className="hidden lg:flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-12">
                        {/* Experiência Profissional */}
                        <div className="flex-1">
                            <h3 className="font-inter text-[20px] sm:text-[24px] font-semibold mb-2">Cursos</h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong className="text-[#0086B0]">Desenvolvedor Front-end</strong>
                                </li>
                                <li>
                                    <strong className="text-[#0086B0]">Estagiário de Desenvolvimento Web</strong>
                                </li>
                            </ul>
                        </div>

                        {/* Cursos e Certificações */}
                        <div className="flex-1">
                            <h3 className="font-inter text-[20px] sm:text-[24px] font-semibold mb-2">Certificações</h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong className="text-[#0086B0]">Full-Stack Web Development</strong>
                                </li>
                                <li>
                                    <strong className="text-[#0086B0]">Certificação em React e Next.js</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ícones sociais à direita */}
                <div className="flex flex-row lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-6">
                    <a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;