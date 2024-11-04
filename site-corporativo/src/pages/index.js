// pages/index.js
import { useEffect, useRef, useState } from 'react';
import { Navbar, Typography, Carousel } from "@material-tailwind/react";

const topics = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "cgis", label: "cGis" },
  { id: "clientes", label: "Clientes" },
  { id: "serviços", label: "Serviços" },
];

const HomePage = () => {
  const [activeTopic, setActiveTopic] = useState("home");
  const [isFloating, setIsFloating] = useState(false);
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Ajuste para compensar a altura do navbar
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFloating(scrollPosition > sectionRefs.current.home.offsetHeight - 70);

      let currentTopic = "home";
      for (let topic of topics) {
        const section = sectionRefs.current[topic.id];
        if (section && scrollPosition >= section.offsetTop - 100) {
          currentTopic = topic.id;
        }
      }
      setActiveTopic(currentTopic);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
     

      {/* Seção do Carrossel */}
      <section id="home" ref={(el) => (sectionRefs.current["home"] = el)} className="relative flex h-[800px] w-full">
        <Carousel className=" overflow-hidden" autoplay loop 
        >
          <img src="office-celtica.png"/>
          <img src="cgis-celtica.png"/>
          
        </Carousel>
      </section>

        {/* Barra de Navegação */}
        <Navbar className={`z-50 p-0 m-0 min-w-full rounded-none border-none backdrop-saturate-100 backdrop-blur-none ${isFloating ? 'bg-white shadow-lg fixed top-0 left-0 right-0 bg-opacity-100' : 'bg-transparent shadow-none bg-gradient-to-b from-black-600 to-transparent h-80 static -mt-[800px]'}`}>
        <div className="p-0 m-0 flex justify-between">
          <div className="p-[24px] relative w-[280px] h-[100px] bg-white shadow-lg custom-clip-path">
            <img src="logo.svg"></img>
          </div>

          <div className="flex space-x-4 mr-[24px]">
            {topics.map((topic) => (
              <button
                key={topic.id}
                className={`px-3 py-2 ${activeTopic === topic.id && !isFloating ? 'text-cyan-500 font-bold' : activeTopic !== topic.id && !isFloating ? 'text-white' : activeTopic === topic.id && isFloating ? 'text-cyan-500 font-bold' :  'text-gray-700 font-bold'  } hover:backdrop-saturate-50`}
                onClick={() => scrollToSection(topic.id)}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      </Navbar>

      {/* Tópicos */}
      {topics.slice(1).map((topic) => (
        <section
          key={topic.id}
          id={topic.id}
          ref={(el) => (sectionRefs.current[topic.id] = el)}
          className={`h-screen flex items-center justify-center bg-gray-100 my-4 ${isFloating ? "" : "mt-[800px]"}`}
        >
          <h2 className="text-4xl font-bold">{topic.label}</h2>
          <p className="text-center mt-4">Conteúdo de {topic.label}</p>
        </section>
      ))}

     

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>Meu Blog &copy; 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
