import React from 'react';
import { FaClipboardList, FaCode, FaRocket, FaWrench } from 'react-icons/fa'; // Ícones ajustados

const plans = [
    {
        title: 'Manutenção',
        description: 'Serviço de suporte e manutenção para garantir a estabilidade.',
        price: 'R$ 149',
        icon: <FaWrench size={48} className="text-[#0086B0]" />,
        benefits: [
            'Correção de bugs',
            'Atualizações de segurança',
            'Otimizações de performance',
            'Suporte técnico por 30 dias',
        ],
    },
    {
        title: 'Básico',
        description: 'Prototipagem e design UI/UX para sua aplicação.',
        price: 'R$ 299',
        icon: <FaClipboardList size={48} className="text-[#0086B0]" />,
        benefits: [
            'Design responsivo',
            'Prototipagem no Figma',
            'Teste de usabilidade',
            'Feedback do cliente',
        ],
    },
    {
        title: 'Plus',
        description: 'Desenvolvimento completo com código otimizado.',
        price: 'R$ 599',
        icon: <FaCode size={48} className="text-[#0086B0]" />,
        benefits: [
            'Código limpo e otimizado',
            'Integração com APIs',
            'Suporte a dispositivos móveis',
            'Testes de performance',
        ],
    },
    {
        title: 'Avançado',
        description: 'Desenvolvimento com ferramentas no-code como WordPress.',
        price: 'R$ 999',
        icon: <FaRocket size={48} className="text-[#0086B0]" />,
        benefits: [
            'Criação com WordPress',
            'Customização via Elementor',
            'Gerenciamento de conteúdo intuitivo',
            'Atualizações fáceis',
        ],
    },
];

const Values: React.FC = () => {
    return (
        <section className="pt-40 px-[160px] bg-black"> {/* Ajustado para 160px */}
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Meus <span className='text-[#0086B0]'>Planos</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Quatro cards em layout grid */}
                {plans.map((plan, index) => (
                    <div key={index} className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center">
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
                ))}
            </div>
        </section>
    );
};

export default Values;