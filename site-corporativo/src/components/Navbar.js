import { Navbar } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

const NavBar = ({ topics, activeTopic, isFloating, scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <Navbar className={`fixed top-0 left-0 z-50 p-0 m-0 min-w-full rounded-none border-none backdrop-saturate-100 backdrop-blur-none transition-all duration-300
            ${isFloating ? 'bg-white dark:bg-gray-900 shadow-lg bg-opacity-100 ' : 'bg-transparent shadow-none bg-gradient-to-b from-black/60 to-transparent '}`
        }>
            <div className="p-0 m-0 flex justify-between">
                <div className={`${isFloating ?  'flex justify-between items-center px-6 py-6' : 'p-[24px] w-[280px] h-[100px] -mx-[40px] -my-[12px] scale-75 lg:scale-100 lg:mx-0 lg:my-0 bg-white dark:bg-gray-900  shadow-lg custom-clip-path '} relative transition-all duration-300`}>
                    <Image src="/logo.svg" height={179} width={179} alt="logo celtica" />
                </div>

                <>
                    {/* Menu para telas menores */}
                    <div className="lg:hidden relative">
                        <button
                            className={`${isFloating ? 'text-gray-900 pt-7 pb-5 p-6' : 'text-white'} dark:text-white  p-6`}  
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {/* Ícone de hambúrguer */}
                            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-3xl`} />
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 mt-0 bg-gray-800 px-8 py-4 shadow-lg z-50">
                                {topics.map((topic) => (
                                    <button
                                        key={topic.title}
                                        className={`block w-full text-left text-xl py-2 ${activeTopic === topic.title ? 'text-aqua' : 'text-white'} hover:bg-black/20`}
                                        onClick={() => {
                                            scrollToSection(topic.title);
                                            setMenuOpen(false);
                                        }}
                                    >
                                        <h2>{topic.title}</h2>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Menu para telas maiores */}
                    <div className="hidden lg:flex space-x-4 mr-[24px]">
                        {topics.map((topic) => (
                            <button
                                key={topic.title}
                                className={`text-xl px-3 py-2 ${activeTopic === topic.title && !isFloating ? 'text-aqua' : activeTopic !== topic.title && !isFloating ? 'text-white' : activeTopic === topic.title && isFloating ? 'text-aqua' : 'text-gray-700 dark:text-white '}  hover:bg-black/20`}
                                onClick={() => scrollToSection(topic.title)}
                            >
                                <h2>{topic.title}</h2>
                            </button>
                        ))}
                    </div>
                </>
            </div>
        </Navbar >
    )
};

export default NavBar;