import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div id="hero" className="relative flex flex-col items-center justify-center w-full h-[950px] lg:h-[1770px]"
            style={{ backgroundImage: 'url(/images/Portfolio.png)', backgroundSize: 'cover' }}>
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white lg:pt-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="bg-[#3d3d3d36] backdrop-blur-[2px] border border-white border-opacity-10 rounded-full flex p-1 space-x-4 mb-2"
                    variants={itemVariants}
                >
                    <button className="bg-[#3d3d3d36] backdrop-blur-[2px] border border-white border-opacity-10 px-4 lg:px-6 text-[16px] lg:text-[24px] rounded-full">
                        <span className="block lg:hidden">Front-End</span>
                        <span className="hidden lg:block">Desenvolvedor Front-End</span>
                    </button>
                    <button className="px-2 lg:px-6 text-[16px] lg:text-[24px] bg-none rounded-full">
                        UI Designer
                    </button>
                </motion.div>

                <motion.h1 className="font-inter text-[40px] lg:text-[85px] font-bold text-center leading-tight w-full" variants={itemVariants}>
                    <span className='text-[#0086B0]'>Transformando conceitos</span> em <br /> experiências de usuários
                </motion.h1>

                <motion.p className="text-[20px] lg:text-[30px] lg:font-semibold mt-4 text-center" variants={itemVariants}>
                    <span className="block lg:hidden">
                        Olá, sou Victor Bravim, <br /> desenvolvedor <span className='text-[#0086B0]'>Front-End.</span>
                    </span>
                    <span className="hidden lg:block">
                        Olá, sou Victor Bravim, desenvolvedor <span className='text-[#0086B0]'>Front-End.</span>
                    </span>
                </motion.p>
                
                <motion.div className="mt-8 space-x-4 flex flex-row justify-center" variants={itemVariants}>
                    <button
                        className="text-[18px] lg:text-[24px] font-bold px-8 py-1.5 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-full"
                        onClick={() => {
                            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contato
                    </button>
                    <a
                        href="https://wa.me/5512996839077"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="text-[18px] lg:text-[24px] font-bold px-8 py-1.5 bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-full"
                        >
                            Orçamento
                        </button>
                    </a>
                </motion.div>


                {/* Seção de projetos */}
                <motion.div className="grid gap-4 mt-8 lg:mt-32 w-full px-4 sm:px-20 lg:px-40" variants={containerVariants}>
                    <motion.div className="flex flex-col md:flex-row justify-center gap-8 mb-2" variants={itemVariants}>
                        <div className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[65%] h-[40vw] md:h-[25vw] rounded-2xl flex items-center justify-center p-2">
                            <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-4">
                                <Image src="/images/1.png" alt="Imagem 1" layout="fill" objectFit="cover" draggable="false" className="rounded-xl" />
                            </div>
                        </div>
                        <div className="hidden lg:flex bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[35%] h-[50vw] md:h-[25vw] rounded-2xl flex items-center justify-center p-2">
                            <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-0">
                                <Image src="/images/2.png" alt="Imagem 1" layout="fill" objectFit="cover" draggable="false" className="rounded-xl" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col md:flex-row justify-center gap-8 mt-2" variants={itemVariants}>
                        <div className="hidden lg:flex bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[35%] h-[35vw] md:h-[20vw] rounded-2xl flex items-center justify-center p-2">
                            <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-4">
                                <Image src="/images/3.png" alt="Imagem 1" layout="fill" objectFit="cover" draggable="false" className="rounded-xl" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-[#8c8c8c10] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full md:w-[65%] h-[35vw] md:h-[20vw] rounded-2xl flex items-center justify-center p-2">
                            <div className="bg-gradient-to-b from-[#8c8c8c0c] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 w-full h-full rounded-2xl flex items-center justify-center p-4">
                                <Image src="/images/4.png" alt="Imagem 1" layout="fill" objectFit="cover" draggable="false" className="rounded-xl" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;