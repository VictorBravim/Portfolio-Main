// src/components/projects.tsx
import React from 'react';

const Projects: React.FC = () => {
    return (
        <section className="py-12 px-[144px] bg-black">
            <h2 className="font-inter text-[85px] font-bold text-center mb-8">Projetos <span className='text-[#0086B0]'>Recentes</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="bg-gradient-to-b from-[#8c8c8c25] to-[#3d3d3d36] backdrop-blur-[4px] border border-white border-opacity-10 rounded-2xl shadow-md overflow-hidden p-4">
                        <img 
                            src={`/images/project-${index + 1}.jpg`} // Ajuste o caminho da imagem conforme necessário
                            alt={`Projeto ${index + 1}`} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Projeto {index + 1}</h3>
                            <p className="text-gray-600">Descrição do projeto.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;