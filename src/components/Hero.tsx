import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full"
            style={{ backgroundImage: 'url(/images/Portfolio.png)', backgroundSize: 'cover', height: '1770px' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-12">
                <div className="bg-[#3d3d3d36] backdrop-blur-[2px] border border-white border-opacity-10 rounded-full flex p-1 space-x-4 mb-2">
                    <button className="bg-[#3d3d3d36] backdrop-blur-[2px] border border-white border-opacity-10 px-6 text-[20px] md:text-[26px] rounded-full">
                        Desenvolvedor Front-End.
                    </button>
                    <button className="px-6 text-[20px] md:text-[26px] bg-none rounded-full">
                        UI Designer
                    </button>
                </div>
                <h1 className="font-inter text-[40px] md:text-[85px] font-bold text-center leading-tight">
                    <span className='text-[#0086B0]'>Transformando conceitos</span> em <br /> experiências de usuários
                </h1>
                <p className="text-[20px] md:text-[30px] font-semibold mt-4 text-center">
                    Olá, sou Victor Bravim, desenvolvedor <span className='text-[#0086B0]'>Front-End.</span>
                </p>
                <div className="mt-8 space-x-4 flex flex-col sm:flex-row justify-center">
                    <button className="text-[20px] md:text-[26px] font-bold px-8 py-1.5 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-full">Contato</button>
                    <button className="text-[20px] md:text-[26px] font-bold px-8 py-1.5 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-full">Orçamento</button>
                </div>
                <div className="grid gap-4 mt-8 w-full px-4 sm:px-20 md:px-40">
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-2">
                        <div className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[65%] h-[40vw] md:h-[25vw] rounded-2xl flex items-center justify-center p-2">
                          <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-4">
                            <Image src="/images/1.png" alt="Imagem 1" layout="fill" objectFit="cover" className="rounded-xl" />
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[35%] h-[50vw] md:h-[25vw] rounded-2xl flex items-center justify-center p-2">
                          <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-0">
                            <Image src="/images/2.png" alt="Imagem 1" layout="fill" objectFit="cover" className="rounded-xl" />
                          </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-8 mt-2">
                        <div className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[35%] h-[35vw] md:h-[20vw] rounded-2xl flex items-center justify-center p-2">
                          <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-4">
                            <Image src="/images/3.png" alt="Imagem 1" layout="fill" objectFit="cover" className="rounded-xl" />
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[65%] h-[35vw] md:h-[20vw] rounded-2xl flex items-center justify-center p-2">
                          <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-4">
                            <Image src="/images/4.png" alt="Imagem 1" layout="fill" objectFit="cover" className="rounded-xl" />
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;