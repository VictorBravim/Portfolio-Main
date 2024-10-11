'use client'
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Abilities from '@/components/Abilities';
import Work from '@/components/Work';
import Values from '@/components/Values';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

    useEffect(() => {
        // Simula um carregamento com tempo (ex: 2 segundos)
        const timer = setTimeout(() => {
            setIsLoading(false); // Para remover o loader
        }, 100); // 2 segundos

        return () => clearTimeout(timer); // Limpa o timeout caso o componente seja desmontado
    }, []);

    return (
        <div className="relative">
            {!isLoading && ( // O conteúdo principal é carregado quando o loader é removido
                <>
                    <Hero />
                    <Projects />
                    <About />
                    <Abilities />
                    <Work />
                    <Values />
                    <Faq />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;