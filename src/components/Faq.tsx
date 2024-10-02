"use client";
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const faqs = [
    { question: 'Qual é o prazo para a criação de um site?', answer: 'O prazo varia de acordo com a complexidade do projeto, mas geralmente entre 2 a 6 semanas.' },
    { question: 'Vocês oferecem suporte após a entrega do site?', answer: 'Sim, oferecemos suporte por um período definido após a entrega.' },
    { question: 'Os sites são responsivos?', answer: 'Sim, todos os sites são desenvolvidos para serem responsivos em dispositivos móveis e desktops.' },
    { question: 'Posso editar meu site depois de pronto?', answer: 'Sim, você terá acesso ao painel de administração para realizar edições.' },
    { question: 'Quais ferramentas vocês utilizam para desenvolvimento?', answer: 'Utilizamos tecnologias modernas como React, Next.js e Tailwind CSS.' },
    { question: 'Você faz manutenção de sites existentes?', answer: 'Sim, ofereço planos de manutenção para sites já existentes.' },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">Alguma <span className='text-[#0086B0]'>Dúvida</span>?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'h-auto' : 'h-16'}`} 
                    >
                        <div className="flex justify-between items-center h-full cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <h3 className="text-xl font-semibold text-gray-300 text-center">{faq.question}</h3> {/* Tamanho da fonte aumentado */}
                            <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                {openIndex === index ? <FaTimes className="text-gray-300" size={24} /> : <FaPlus className="text-gray-300" size={24} />} {/* Tamanho do ícone aumentado */}
                            </div>
                        </div>
                        {openIndex === index && (
                            <p className="mt-2 text-lg text-gray-400">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;