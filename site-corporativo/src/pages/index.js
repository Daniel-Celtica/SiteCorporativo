import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/Navbar';
import CustomCarousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import topics from '@/api/topics.json'
import Sections from '@/components/Sections';


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
        const section = sectionRefs.current[topic.Title];
        //define a section atual
        if (section && scrollPosition >= section.offsetTop - 180) {
          currentTopic = topic.Title;
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
