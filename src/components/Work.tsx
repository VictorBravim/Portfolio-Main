// src/components/work.tsx
import React from 'react';

const workflowData = [
    { title: 'Planejamento', image: '/images/workflow1.jpg' },
    { title: 'Desenvolvimento', image: '/images/workflow2.jpg' },
    { title: 'Testes', image: '/images/workflow3.jpg' },
    { title: 'Implantação', image: '/images/workflow4.jpg' },
];

const Work: React.FC = () => {
    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">Fluxo de <span className='text-[#0086B0]'>Trabalho</span></h2>
            <div className="flex justify-center items-center">
                {workflowData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center mx-4 mb-8">
                            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md w-[200px] h-[200px] flex items-center justify-center">
                                {/* Placeholder para o conteúdo do card */}
                            </div>
                            <h3 className="mt-2 text-lg text-gray-300 text-center">{item.title}</h3>
                        </div>
                        {index < workflowData.length - 1 && (
                            <img
                                src={item.image}
                                alt={`Imagem do ${item.title}`}
                                className="w-32 h-auto mx-2" // Ajuste o tamanho da imagem conforme necessário
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Work;