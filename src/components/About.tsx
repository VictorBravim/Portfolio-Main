import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <section className="pt-40 px-[160px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Sobre <span className="text-[#0086B0]">Mim</span>
            </h2>
            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#16161636] backdrop-blur-[4px] border border-white border-opacity-10 rounded-3xl overflow-hidden w-full p-8 flex items-center space-x-12">
                
                {/* Imagem à esquerda (aumentada) */}
                <div className="flex justify-center">
                    <img
                        src="/images/Perfil.jpeg"
                        alt="Victor Bravim"
                        className="rounded-full w-[340px] h-[340px] object-cover border-4 border-[#0086B0]"
                    />
                </div>

                {/* Texto e conteúdo à direita */}
                <div className="flex-1 text-left pl-12 space-y-6">
                    <p className="text-[22px] text-white leading-relaxed">
                        Olá, sou Victor Bravim, um desenvolvedor front-end de Lorena, SP.
                        Com experiência <br /> em desenvolvimento web e design UI/UX, busco
                        criar soluções eficientes e atraentes. <br /> Além disso, utilizo ferramentas
                        no-code como WordPress para transformar ideias <br /> em projetos
                        funcionais e impactantes.
                    </p>

                    {/* Seções de Experiência e Cursos lado a lado */}
                    <div className="flex justify-between space-x-12">
                        {/* Experiência Profissional */}
                        <div className="flex-1">
                            <h3 className="font-inter text-[24px] font-semibold mb-2">Experiência Profissional</h3>
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
                            <h3 className="font-inter text-[24px] font-semibold mb-2">Cursos e Certificações</h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong className="text-[#0086B0]">Full-Stack Web Development</strong> – Rocketseat (2023)
                                </li>
                                <li>
                                    <strong className="text-[#0086B0]">Certificação em React e Next.js</strong> – Alura (2022)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ícones sociais à direita */}
                <div className="flex flex-col justify-center items-center space-y-6">
                    <a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-xl flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110">
                        <FaInstagram/>
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