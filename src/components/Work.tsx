import React from 'react';
import { FaClipboardList, FaDraftingCompass, FaCode, FaHeadset } from 'react-icons/fa'; // Ícones do React Icons

const workflowData = [
    { title: 'Briefing', icon: <FaClipboardList size={80} /> }, // Aumentei os ícones para 80px
    { title: 'Prototipagem', icon: <FaDraftingCompass size={80} /> },
    { title: 'Desenvolvimento', icon: <FaCode size={80} /> },
    { title: 'Entrega/Suporte', icon: <FaHeadset size={80} /> },
];

const Work: React.FC = () => {
    return (
        <section className="pt-40 px-[160px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Fluxo de <span className="text-[#0086B0]">Trabalho</span>
            </h2>
            <div className="flex justify-between items-center space-x-0 w-full"> {/* Cards tocando as laterais */}
                {workflowData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center w-full max-w-[300px] mb-8"> {/* Aumentei o tamanho máximo dos cards */}
                            <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md w-full h-[320px] flex flex-col items-center justify-center text-center p-4">
                                {item.icon} {/* Ícone do React Icons maior */}
                                <h3 className="mt-4 text-2xl font-bold text-gray-300">{item.title}</h3> {/* Título dentro do card */}
                            </div>
                        </div>
                        {index < workflowData.length - 1 && (
                            <div className="flex items-center justify-center w-[160px] h-[320px]"> {/* Setas aumentadas */}
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