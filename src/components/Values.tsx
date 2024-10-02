import React from 'react';
import { FaClipboardList, FaCode, FaRocket } from 'react-icons/fa'; // Importando ícones do React Icons

const plans = [
    {
        title: 'Básico',
        description: 'Prototipagem e criação do design em UX/UI.',
        price: 'R$ 299',
        icon: <FaClipboardList size={48} className="text-[#0086B0]" />,
        benefits: [
            'Design responsivo',
            'Teste de usabilidade',
            'Feedback do cliente',
        ],
    },
    {
        title: 'Plus',
        description: 'Desenvolvimento completo de aplicações web com programação.',
        price: 'R$ 599',
        icon: <FaCode size={48} className="text-[#0086B0]" />,
        benefits: [
            'Código otimizado',
            'Integração com APIs',
            'Suporte a dispositivos móveis',
        ],
    },
    {
        title: 'Pro',
        description: 'Utiliza ferramentas no-code como WordPress.',
        price: 'R$ 999',
        icon: <FaRocket size={48} className="text-[#0086B0]" />,
        benefits: [
            'Atualizações fáceis',
            'Escalabilidade',
            'Gerenciamento de conteúdo intuitivo',
        ],
    },
];

const Values: React.FC = () => {
    return (
        <section className="pt-40 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Meus <span className='text-[#0086B0]'>Planos</span>
            </h2>
            <div className="flex justify-center space-x-8"> {/* Adicionado espaço entre os cards */}
                {plans.map((plan, index) => (
                    <div key={index} className="mx-4 mb-8">
                        <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md w-[350px] h-[450px] flex flex-col items-center justify-center p-6">
                            <div className="mb-4">{plan.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-300">{plan.title}</h3>
                            <p className="mt-2 text-lg text-gray-400 text-center">{plan.description}</p>
                            <p className="mt-4 text-xl font-bold text-gray-200">{plan.price}</p> {/* Valor do plano */}
                            
                            <ul className="mt-4 text-gray-400 text-left">
                                {plan.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start mt-1">
                                        <span className="mr-2">•</span> {/* Bullet Point */}
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-6 bg-[#0086B0] text-white py-2 px-4 rounded-full hover:bg-[#007BA0] transition-colors duration-200">
                                Contratar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Values;