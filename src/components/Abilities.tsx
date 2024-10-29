'use client';
import React from 'react';
import { 
    SiJavascript, SiReact, SiNextdotjs, SiCss3, SiTailwindcss, 
    SiTypescript, SiVuedotjs, SiFirebase, SiAngular, SiGit, 
    SiHtml5, SiBootstrap, SiPhp, SiFigma, SiGraphql, 
    SiNodedotjs, SiAmazon, SiCanva, SiGithub, SiAdobephotoshop
} from 'react-icons/si';
import { motion } from 'framer-motion';

const abilitiesData = [
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#fff' },
    { icon: SiTypescript, name: 'TypeScript', color: '#0000CD' },
    { icon: SiTailwindcss, name: 'TailwindCSS', color: '#38B2AC' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
    { icon: SiAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiAdobephotoshop, name: 'Adobe (Photoshop)', color: '#00C4CC' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
    { icon: SiGraphql, name: 'GraphQL', color: '#E10098' }, 
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
    { icon: SiCanva, name: 'Canva', color: '#00C4CC' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', color: '#fff' },
];

const Abilities: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    // Definindo a quantidade de ícones a serem mostrados no mobile
    const mobileIconCount = Math.ceil(abilitiesData.length / 2);

    return (
        <section className="pt-20 lg:pt-40 px-4 sm:px-8 lg:px-[160px] bg-black">
            <h2 className="font-inter text-[32px] lg:text-[75px] font-bold text-center mb-8">
                Habilidades <span className="text-[#0086B0]">Técnicas</span>
            </h2>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 gap-4 sm:gap-8 lg:gap-12`}>
                {abilitiesData.map(({ icon: Icon, name, color }, index) => (
                    <motion.div 
                        key={index} 
                        className="group bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg flex items-center justify-center h-24 transition-transform duration-300 transform hover:rotate-3 hover:-translate-y-2 hover:shadow-lg p-2"
                        style={{ perspective: '1000px' }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div className="group bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg w-full h-full flex items-center justify-center transition-transform duration-300 transform hover:rotate-3 hover:-translate-y-2 hover:shadow-lg">
                            <Icon 
                                className="text-5xl group-hover:transform group-hover:scale-110 transition-transform duration-300 ease-out" 
                                style={{ color }} 
                                title={name} 
                            />
                        </div>
                    </motion.div>
                )).slice(0, window.innerWidth < 768 ? mobileIconCount : abilitiesData.length)}
            </div>
        </section>
    );
};

export default Abilities;