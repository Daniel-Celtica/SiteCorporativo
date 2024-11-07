import { useState, useRef } from "react";
import Image from 'next/image'

const MediaSelector = ({ media }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [expanded, setExpanded] = useState(false);

    const mediaContainerRef = useRef(null);


    const nextSlide = () => {
        // Verifica se o índice é o último, caso sim, volta ao primeiro
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const prevSlide = () => {
        // Verifica se o índice é o primeiro, caso sim, vai para o último
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? media.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        //mostra conteúdo
        setExpanded(true);

        // Calcula a posição de rolagem com o offset
        const containerPosition =
            window.scrollY + mediaContainerRef.current.getBoundingClientRect().top;

        window.scrollTo({
            top: containerPosition - 100,//offset
            behavior: "smooth"
        });
    };

    const contract = () => {
        setExpanded(false);
    }

    return (
        <div ref={mediaContainerRef} className={`relative -mx-16 lg:-mx-64 mt-10 ${expanded ? "pb-[520px]" : ""}`}>
            <div className="relative overflow-visible">
                {/* Container para os slides */}
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 20}rem)`, // Mover 80% do carrossel
                    }}
                >
                    {media.map((item, index) => (
                        <a className="relative" onClick={() => goToSlide(index)} >
                            {/* image */}
                            <div className="h-48 w-80 flex justify-center items-center">
                                <Image
                                    width={200}
                                    height={200}
                                    src={item.imagetitle} />
                            </div>

                            {/* efeito degradê*/}
                            <div className=" absolute bottom-0 h-24 w-80 bg-gradient-to-b from-transparent to-black/40 " />

                            {/* hover */}
                            {
                                currentIndex !== index || !expanded ? (
                                    <div className="absolute top-0 h-48 w-80 group">
                                        <div className="absolute top-0 h-0 w-full bg-black/0 transition-all duration-300 ease-in-out group-hover:h-full group-hover:bg-black/50 flex justify-center items-center">
                                            <i className="fas fa-plus text-4xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
                                        </div>
                                    </div>
                                ) :
                                    (<></>)
                            }

                            {/* titulo */}
                            <p className="text-white text-xl absolute bottom-4 left-4 z-40">{item.title}</p>
                            {
                                currentIndex === index && expanded ? (
                                    <i className=" absolute -bottom-6 left-48  fas fa-sort-up text-4xl text-gray-900"></i>) :
                                    (<></>)
                            }
                        </a>
                    ))}
                </div>

                {/* Conteudo e media */}
                {
                    expanded ? (
                        <div className="absolute h-auto w-full bg-black p-16 lg:p-32 bg-fixed bg-parallax bg-cover parallax-section ">
                            <button onClick={contract}
                                className=" absolute top-8 right-8 fas fa-xmark text-4xl text-white" />

                            <div className="inline-flex flex-wrap justify-evenly w-full h-full ">
                                <iframe className="lg:w-[640px] lg:h-[360px]"
                                    src={`https://www.youtube.com/embed/${media[currentIndex].video}`} />

                                <div className="max-w-80">

                                    <h2 className="text-white text-3xl">{media[currentIndex].subtitle}</h2>
                                    <br />
                                    <p className="text-white text-1xl whitespace-pre-wrap">{media[currentIndex].text}</p>
                                </div>

                            </div>
                        </div>
                    ) :
                        (<></>)
                }


                {/* Botões de navegação */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 bg-black/50 p-2 rounded-full"
                >
                    <i className="fas fa-angle-left text-xl text-white"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 bg-black/50 p-2 rounded-full"
                >
                    <i className="fas fa-angle-right text-xl text-white"></i>
                </button>
            </div>
        </div>
    );
};



export default MediaSelector;