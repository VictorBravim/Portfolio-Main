import React from 'react';
import { FaClipboardList, FaDraftingCompass, FaCode, FaHeadset } from 'react-icons/fa'; // Ícones do React Icons

const workflowData = [
    { title: 'Briefing', icon: <FaClipboardList size={80} /> },
    { title: 'Prototipagem', icon: <FaDraftingCompass size={80} /> },
    { title: 'Desenvolvimento', icon: <FaCode size={80} /> },
    { title: 'Entrega/Suporte', icon: <FaHeadset size={80} /> },
];

const Work: React.FC = () => {
    return (
        <section className="pt-40 px-4 sm:px-8 lg:px-[160px] bg-black">
            <h2 className="font-inter text-[40px] sm:text-[60px] lg:text-[85px] font-bold text-center mb-8">
                Fluxo de <span className="text-[#0086B0]">Trabalho</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-x-0 w-full"> {/* Cards organizados em coluna em telas menores */}
                {workflowData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center w-full max-w-[300px] mb-8"> 
                            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col items-center justify-center text-center p-4">
                                {item.icon}
                                <h3 className="mt-4 text-2xl font-bold text-gray-300">{item.title}</h3>
                            </div>
                        </div>
                        {index < workflowData.length - 1 && (
                            <div className="flex items-center justify-center w-[160px] h-[320px]">
                                <img
                                    src="/images/Vector.png"
                                    alt="Seta entre os cards"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Work;