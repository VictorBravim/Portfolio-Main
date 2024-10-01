// src/app/page.tsx
import Hero from '../components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Abilities from '@/components/Abilities';
import Work from '@/components/Work';
import Values from '@/components/Values';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <About />
            <Abilities />
            <Work />
            <Values />
            <Faq />
            <Footer />
        </div>
    );
};

export default Home;