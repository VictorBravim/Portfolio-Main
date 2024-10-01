import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <section className="py-64 px-[160px] bg-black">
            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#16161636] backdrop-blur-[4px] border border-white border-opacity-10 rounded-3xl overflow-hidden w-full p-8 flex justify-between items-center">
                {/* Imagem à esquerda */}
                <div className="flex justify-center">
                    <img
                        src="/images/Perfil.jpg"
                        alt="Victor Bravim"
                        className="rounded-full w-[300px] h-[300px] object-cover border-4 border-[#0086B0]"
                    />
                </div>

                {/* Texto centralizado à esquerda */}
                <div className="w-1/1 text-left pl-8">
                <h2 className="font-inter text-[55px] font-bold text-left mb-2">
                Sobre <span className="text-[#0086B0]">Mim</span>
                 </h2>
                    <p className="text-[25px] text-white leading-relaxed">
                    Olá, sou Victor Bravim, um desenvolvedor front-end de Lorena, SP. <br />
                        Com experiência em desenvolvimento web e design UI/UX, busco <br />
                        criar soluções eficientes e atraentes. Além disso, utilizo ferramentas <br />
                        no-code como WordPress para transformar ideias em projetos <br />
                        funcionais e impactantes.
                    </p>
                </div>

                {/* Ícones em coluna à direita */}
                <div className="flex flex-col justify-center items-center space-y-8">
                    <a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#0086B0] flex justify-center items-center text-white text-3xl">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#0086B0] flex justify-center items-center text-white text-3xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#0086B0] flex justify-center items-center text-white text-3xl">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;