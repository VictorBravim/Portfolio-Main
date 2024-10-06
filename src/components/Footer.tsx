import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importando os ícones

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-black">
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/Footer.png)', height: '1190px' }}
            >
                <div className="flex flex-col items-center justify-center h-full px-[160px]">
                    {/* Card maior que engloba os contatos e o formulário */}
                    <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-8 w-full">
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            {/* Coluna da esquerda - Contatos */}
                            <div className="flex flex-col space-y-4 w-full md:w-1/3">
                                <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-6 flex flex-col items-center text-center flex-grow">
                                    <FaWhatsapp className="text-green-500 mb-2" size={40} /> {/* Ícone do WhatsApp */}
                                    <div>
                                        <h4 className="text-gray-300 text-xl">WhatsApp</h4>
                                        <p className="text-gray-400 text-lg">(55) 12996839077</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-6 flex flex-col items-center text-center flex-grow">
                                    <FaEnvelope className="text-blue-500 mb-2" size={40} /> {/* Ícone do Email */}
                                    <div>
                                        <h4 className="text-gray-300 text-xl">Email</h4>
                                        <p className="text-gray-400 text-lg">victorrafaelbravim@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Coluna da direita - Formulário */}
                            <div className="w-full md:w-2/3 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-6 flex-grow">
                                <h3 className="text-lg font-semibold text-gray-300">Entre em Contato</h3>
                                <form className="mt-4">
                                    <div className="flex flex-col space-y-4">
                                        <input 
                                            type="text" 
                                            placeholder="Seu Nome" 
                                            className="p-3 rounded border border-gray-300"
                                            required
                                        />
                                        <input 
                                            type="email" 
                                            placeholder="Seu Email" 
                                            className="p-3 rounded border border-gray-300"
                                            required
                                        />
                                        <textarea 
                                            placeholder="Sua Mensagem" 
                                            className="p-3 rounded border border-gray-300"
                                            rows={4}
                                            required
                                        />
                                        <button 
                                            type="submit" 
                                            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
                                        >
                                            Enviar
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