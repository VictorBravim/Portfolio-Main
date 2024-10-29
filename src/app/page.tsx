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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 50);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="relative">
            {!isLoading && ( 
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