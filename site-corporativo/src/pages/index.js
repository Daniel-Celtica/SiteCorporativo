import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/Navbar';
import CustomCarousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import Sections from '@/components/Sections';

const topics = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "sobre",
    title: "Sobre",
    text: "Somos uma empresa que fornece soluções de tecnologia, transformando projetos em casos de sucesso."
  },
  {
    id: "cgis",
    title: "cGIS",
    text: "O cGIS é uma plataforma espacial de integração de dados e serviços, que fornece uma visão clara e objetiva de todos os processos sistematizados de uma empresa. Transformando dados isolados em informações úteis para as tomadas de decisão."
  },
  {
    id: "clientes",
    title: "Clientes",
    text: "Alguns trabalhos desenvolvidos pela Céltica",
  },
  {
    id: "servicos",
    title: "Serviços"
  },
  {
    id: "contato",
    title: "Contato"
  }
];


const HomePage = () => {
  const [activeTopic, setActiveTopic] = useState("Home");
  const [isFloating, setIsFloating] = useState(false);
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 40, //Ajusta o offset do click em um dos tópicos
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      //define se é flutuante
      setIsFloating(scrollPosition >= 300);

      let currentTopic = "Home";
      for (let topic of topics) {
        const section = sectionRefs.current[topic.title];
        //define a section atual
        if (section && scrollPosition >= section.offsetTop - 180) {
          currentTopic = topic.title;
        }
      }
      setActiveTopic(currentTopic);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const carouselImages = ["office-celtica.png", "cgis-celtica.png"];

  return (
    <div>
      
      {/* Barra de Navegação */}
      <NavBar topics={topics} activeTopic={activeTopic} isFloating={isFloating} scrollToSection={scrollToSection} />

      {/* Seção do Carrossel */}
      <section id="Home" ref={(el) => (sectionRefs.current["Home"] = el)} className="flex h-auto w-full">
        <CustomCarousel images={carouselImages} />
      </section>

      {/* Tópicos */}
      <Sections topics={topics} isFloating={isFloating} sectionRefs={sectionRefs} />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default HomePage;
