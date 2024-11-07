import { Navbar } from "@material-tailwind/react";

const NavBar = ({ topics, activeTopic, isFloating, scrollToSection }) => (
    <Navbar className={`fixed top-0 left-0 z-50 p-0 m-0 min-w-full rounded-none border-none backdrop-saturate-100 backdrop-blur-none transition-all duration-300
    ${isFloating ? 'bg-white shadow-lg bg-opacity-100 ' : 'bg-transparent shadow-none bg-gradient-to-b from-black/60 to-transparent '}`}>
        <div className="p-0 m-0 flex justify-between">
            <div className={`${isFloating ? 'flex justify-between items-center px-6 py-6' : 'p-[24px] w-[280px] h-[100px] bg-white shadow-lg custom-clip-path ' } relative transition-all duration-300`}>
                <img src="logo.svg"></img>
            </div>

            <div className="flex space-x-4 mr-[24px]">
                {topics.map((topic) => (
                    <button
                        key={topic.Title}
                        className={`text-xl px-3 py-2 ${activeTopic === topic.Title && !isFloating ? 'text-aqua' : activeTopic !== topic.Title && !isFloating ? 'text-white' : activeTopic === topic.Title && isFloating ? 'text-aqua' : 'text-gray-700'} hover:bg-black/20`}
                        onClick={() => scrollToSection(topic.Title)}
                    >
                        {topic.Title}
                    </button>
                ))}
            </div>
        </div>
    </Navbar>
);

export default NavBar;