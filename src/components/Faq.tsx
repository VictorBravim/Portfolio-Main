"use client";
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const faqs = [
    {
        question: 'Você faz apenas o front-end dos projetos?',
        answer: 'Sim, eu trabalho exclusivamente com o desenvolvimento front-end, o que inclui toda a parte visual e interativa do site, mas não faço o desenvolvimento de back-end, ou seja, não trabalho com banco de dados ou servidores.',
    },
    {
        question: 'Você oferece hospedagem?',
        answer: 'Sim, ofereço hospedagem gratuita utilizando Firebase e Vercel para os sites que desenvolvo. Isso garante que seu site estará sempre online e com boa performance. No entanto, o domínio é de responsabilidade do cliente, ou seja, quem paga o domínio é você, mas posso ajudar na configuração sem custos adicionais.',
    },
    {
        question: 'Preciso pagar algo para obter um orçamento?',
        answer: 'Não, o orçamento é totalmente gratuito. Você só precisará pagar caso decida seguir em frente com o projeto e aceitar o valor apresentado. Assim, pode avaliar o projeto sem compromisso.',
    },
    {
        question: 'Os sites são responsivos?',
        answer: 'Sim, todos os sites são desenvolvidos para serem totalmente responsivos, ou seja, funcionam perfeitamente em dispositivos móveis, tablets e desktops, proporcionando uma excelente experiência de navegação em qualquer tela.',
    },
    {
        question: 'Você também faz o design dos sites?',
        answer: 'Sim, ofereço serviços de design UI/UX completos. Crio protótipos no Figma com foco na experiência do usuário (UX) e na interface (UI), sempre com o objetivo de garantir que o site seja intuitivo e atraente.',
    },
    {
        question: 'Você trabalha com no-code como WordPress e Elementor?',
        answer: 'Sim, além de desenvolver sites com código (React, Next.js), também ofereço soluções no-code utilizando ferramentas como WordPress e Elementor. Isso permite que o cliente faça atualizações de conteúdo facilmente sem precisar de conhecimento em programação.',
    },
    {
        question: 'Você faz manutenção de sites existentes?',
        answer: 'Sim, ofereço planos de manutenção para sites já existentes, o que inclui atualizações, correção de bugs e suporte técnico.',
    },
    {
        question: 'Quanto tempo leva para criar um site?',
        answer: 'O prazo depende da complexidade do projeto, mas geralmente leva entre 1 a 3 semanas, dependendo dos requisitos e do tamanho do site.',
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-40 px-[160px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">
                Alguma <span className='text-[#0086B0]'>Dúvida</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg shadow-md transition-all duration-300 ease-in-out ${openIndex === index ? 'h-auto' : 'h-16 overflow-hidden'}`}
                    >
                        <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleAccordion(index)}>
                            <h3 className="text-xl font-semibold text-gray-300 text-left">{faq.question}</h3>
                            <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                {openIndex === index ? <FaTimes className="text-gray-300" size={24} /> : <FaPlus className="text-gray-300" size={24} />}
                            </div>
                        </div>
                        {/* Conteúdo do Accordion */}
                        {openIndex === index && (
                            <div className="p-4">
                                <p className="text-lg text-gray-400 text-left">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;