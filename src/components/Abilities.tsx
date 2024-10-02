import React from 'react';
import { 
    SiJavascript, SiReact, SiNextdotjs, SiCss3, SiTailwindcss, 
    SiTypescript, SiEjs, SiFirebase, SiAngular, SiGit, 
    SiHtml5, SiSass, SiWebpack, SiGraphql, SiNodedotjs, 
    SiBootstrap, SiRedux, SiDocker, SiHeroku, SiMongodb 
} from 'react-icons/si';

const abilitiesData = [
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiCss3, name: 'CSS3' },
    { icon: SiTailwindcss, name: 'TailwindCSS' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiEjs, name: 'Vue.js' },
    { icon: SiFirebase, name: 'Firebase' },
    { icon: SiAngular, name: 'Angular' },
    { icon: SiGit, name: 'Git' },
    { icon: SiHtml5, name: 'HTML5' },
    { icon: SiSass, name: 'Sass' },
    { icon: SiWebpack, name: 'Webpack' },
    { icon: SiGraphql, name: 'GraphQL' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiBootstrap, name: 'Bootstrap' },
    { icon: SiRedux, name: 'Redux' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiHeroku, name: 'Heroku' },
    { icon: SiMongodb, name: 'MongoDB' },
];

const Abilities: React.FC = () => {
    return (
        <section className="pt-40 px-[160px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Habilidades <span className="text-[#0086B0]">Técnicas</span>
            </h2>
            <div className="grid grid-cols-10 gap-4">
                {abilitiesData.map(({ icon: Icon, name }, index) => (
                    <div 
                        key={index} 
                        className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md flex items-center justify-center h-24"
                    >
                        <Icon className="text-4xl text-white" title={name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Abilities;