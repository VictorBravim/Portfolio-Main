// src/components/about.tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-64 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">Sobre <span className='text-[#0086B0]'>Mim</span></h2>
            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#16161636] backdrop-blur-[4px] border border-white border-opacity-10 rounded-3xl overflow-hidden w-full p-3">
              <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#16161636] backdrop-blur-[4px] border border-white border-opacity-10 rounded-3xl overflow-hidden w-full py-24">
                <p className="text-[35px] text-center text-white">
                Olá, sou Victor Bravim, um desenvolvedor front-end de Lorena, SP. <br /> 
                Com experiência em desenvolvimento web e design UI/UX, busco <br /> 
                criar soluções eficientes e atraentes. Além disso, utilizo ferramentas <br />
                no-code como WordPress para transformar ideias em projetos <br /> 
                funcionais e impactantes.
                </p>
              </div>
            </div>
        </section>
    );
};

export default About;