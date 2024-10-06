import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-black">
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/Footer.png)', height: '1190px' }}
            >
                <div className="flex flex-col items-center justify-center h-full px-[160px]">
                    {/* Card maior que engloba os contatos e o formulário */}
                    <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Coluna da esquerda - Contatos */}
                            <div className="flex flex-col space-y-4 w-full md:w-1/3">
                                <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-4">
                                    <h4 className="text-gray-300">WhatsApp</h4>
                                    <p className="text-gray-400">(55) 12996839077</p>
                                </div>
                                <div className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-4">
                                    <h4 className="text-gray-300">Email</h4>
                                    <p className="text-gray-400">victorrafaelbravim@gmail.com</p>
                                </div>
                            </div>

                            {/* Coluna da direita - Formulário */}
                            <div className="w-full md:w-2/3 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-gray-300">Entre em Contato</h3>
                                <form className="mt-4">
                                    <div className="flex flex-col space-y-4">
                                        <input 
                                            type="text" 
                                            placeholder="Seu Nome" 
                                            className="p-2 rounded border border-gray-300"
                                            required
                                        />
                                        <input 
                                            type="email" 
                                            placeholder="Seu Email" 
                                            className="p-2 rounded border border-gray-300"
                                            required
                                        />
                                        <textarea 
                                            placeholder="Sua Mensagem" 
                                            className="p-2 rounded border border-gray-300"
                                            rows={4}
                                            required
                                        />
                                        <button 
                                            type="submit" 
                                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
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