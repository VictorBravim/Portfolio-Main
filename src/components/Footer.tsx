'use client';
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importando os ícones
import emailjs from 'emailjs-com';

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false); // Estado para controlar se a mensagem foi enviada

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const { user_name, user_email, message } = formData;
    
        // Validação simples de email usando expressão regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
            alert('Por favor, insira um endereço de email válido.'); // Mensagem de erro para email inválido
            return;
        }
    
        if (!user_name || !message) {
            alert('Por favor, preencha todos os campos.'); // Alerta simples sem Toast
            return;
        }
    
        emailjs.send(
            'service_bravim',
            'template_2cunb5k',
            { user_name, user_email, message },
            'TvVDzHFLwBkyukoGy'
        )
        .then(() => {
            setIsSent(true); // Atualiza o estado para indicar que a mensagem foi enviada
            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            }); // Limpa os campos após envio
        }, (error) => {
            console.log(error.text);
            alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.'); // Alerta simples sem Toast
        });
    };

    return (
        <footer className="relative bg-black">
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/Footer.png)', height: '900px' }}
            >
                <div className="flex flex-col items-center justify-center h-full px-4 md:px-[160px] pt-10">
                    {/* Card maior que engloba os contatos e o formulário */}
                    <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-8 w-full">
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            {/* Coluna da esquerda - Contatos */}
                            <div className="flex flex-col space-y-4 w-full md:w-1/3">
                                <a
                                    href="https://wa.me/5512996839077"
                                    className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-6 flex flex-col items-center justify-center text-center flex-grow cursor-pointer transition-transform duration-200 hover:scale-105"
                                >
                                    <FaWhatsapp className="text-white mb-2" size={40} />
                                    <div>
                                        <h4 className="text-gray-300 text-xl">WhatsApp</h4>
                                        <p className="text-gray-400 text-lg">(55) 12996839077</p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:victorrafaelbravim@gmail.com"
                                    className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-6 flex flex-col items-center justify-center text-center flex-grow cursor-pointer transition-transform duration-200 hover:scale-105"
                                >
                                    <FaEnvelope className="text-white mb-2" size={40} />
                                    <div>
                                        <h4 className="text-gray-300 text-xl">Email</h4>
                                        <p className="text-gray-400 text-lg">victorrafaelbravim@gmail.com</p>
                                    </div>
                                </a>
                            </div>

                            {/* Coluna da direita - Formulário */}
                            <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-6 w-full md:w-2/3">
                                <h3 className="text-lg font-semibold text-gray-300">Entre em Contato</h3>
                                <form onSubmit={handleSubmit} className="mt-4">
                                    <div className="flex flex-col space-y-4">
                                        <input 
                                            type="text" 
                                            name="user_name"
                                            placeholder="Seu Nome" 
                                            value={formData.user_name}
                                            onChange={handleInputChange}
                                            className="p-3 rounded border border-white border-opacity-10 bg-transparent text-gray-300 focus:outline-none focus:border-[#0086B0] transition duration-200"
                                            required
                                        />
                                        <input 
                                            type="email" 
                                            name="user_email"
                                            placeholder="Seu Email" 
                                            value={formData.user_email}
                                            onChange={handleInputChange}
                                            className="p-3 rounded border border-white border-opacity-10 bg-transparent text-gray-300 focus:outline-none focus:border-[#0086B0] transition duration-200"
                                            required
                                        />
                                        <textarea 
                                            name="message"
                                            placeholder="Sua Mensagem" 
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="p-3 rounded border border-white border-opacity-10 bg-transparent text-gray-300 focus:outline-none focus:border-[#0086B0] transition duration-200"
                                            rows={4}
                                            required
                                        />
                                        <button 
                                            type="submit" 
                                            className={`p-3 rounded ${isSent ? 'bg-white text-black' : 'bg-[#0086B0] hover:bg-white text-white hover:text-black transition duration-200'}`}
                                            disabled={isSent} // Desabilita o botão após o envio
                                        >
                                            {isSent ? 'Enviado' : 'Enviar'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;