// src/components/values.tsx
import React from 'react';

const plans = [
    {
        title: 'Básico',
        description: 'Prototipagem e criação do design em UX/UI.',
    },
    {
        title: 'Plus',
        description: 'Criação em programação.',
    },
    {
        title: 'Pro',
        description: 'Utiliza ferramentas no-code como WordPress.',
    },
];

const Values: React.FC = () => {
    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">Nossos <span className='text-[#0086B0]'>Planos</span></h2>
            <div className="flex justify-center">
                {plans.map((plan, index) => (
                    <div key={index} className="mx-4 mb-8">
                        <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md w-[300px] h-[300px] flex flex-col items-center justify-center p-4">
                            <h3 className="text-2xl font-bold text-gray-300">{plan.title}</h3>
                            <p className="mt-4 text-lg text-gray-400 text-center">{plan.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Values;