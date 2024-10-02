import React from 'react';
import { FaClipboardList, FaDraftingCompass, FaCode, FaHeadset } from 'react-icons/fa'; // Ícones do React Icons

const workflowData = [
    { title: 'Briefing', icon: <FaClipboardList size={64} /> }, // Ícones aumentados
    { title: 'Prototipagem', icon: <FaDraftingCompass size={64} /> },
    { title: 'Desenvolvimento', icon: <FaCode size={64} /> },
    { title: 'Entrega/Suporte', icon: <FaHeadset size={64} /> },
];

const Work: React.FC = () => {
    return (
        <section className="pt-40 px-[160px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Fluxo de <span className="text-[#0086B0]">Trabalho</span>
            </h2>
            <div className="flex justify-center items-center space-x-0"> {/* Removei espaços horizontais */}
                {workflowData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center mb-8">
                            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md w-[240px] h-[240px] flex items-center justify-center">
                                {item.icon} {/* Ícone do React Icons maior */}
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-300 text-center">{item.title}</h3>
                        </div>
                        {index < workflowData.length - 1 && (
                            <div className="flex items-center justify-center w-[128px] h-[240px] mb-16"> {/* Imagem maior e centralizada */}
                                <img
                                    src="/images/Vector.png"
                                    alt="Seta entre os cards"
                                    className="w-full h-full object-contain" // Imagem preenchendo o espaço
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