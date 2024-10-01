// src/components/abilities.tsx
import React from 'react';

const abilitiesData = [
    'devicon-javascript-plain',
    'devicon-react-original',
    'devicon-nextjs-plain',
    'devicon-css3-plain',
    'devicon-tailwindcss-plain',
    'devicon-typescript-plain',
    'devicon-vuejs-plain',
    'devicon-firebase-plain',
    'devicon-angularjs-plain',
    'devicon-git-plain',
    'devicon-html5-plain',
    'devicon-sass-plain',
    'devicon-webpack-plain',
    'devicon-graphql-plain',
    'devicon-nodejs-plain',
    'devicon-bootstrap-plain',
    'devicon-redux-original',
    'devicon-docker-plain',
    'devicon-heroku-plain',
    'devicon-mongodb-plain',
];

const Abilities: React.FC = () => {
    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">Habilidades <span className='text-[#0086B0]'>Técnicas</span></h2>
            <div className="grid grid-cols-10 gap-4">
                {abilitiesData.map((iconClass, index) => (
                    <div key={index} className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md flex items-center justify-center h-24">
                        <i className={`${iconClass} text-4xl`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Abilities;