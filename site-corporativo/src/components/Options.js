import { useEffect, useState } from "react";
import { useFontSize } from "./FontSizeContext";





const Options = () => {
    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(false);
    const { increaseFont, decreaseFont } = useFontSize();

    useEffect(() => {
        // Verifica a preferência do usuário no localStorage
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    const toggleDarkTheme = () => {
        const newTheme = "dark";
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const toggleLightTheme = () => {
        const newTheme = "light";
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleOpenOptions = () => {
        setOpen(!open);
    }

    return (
        <>

            <div className='fixed z-50 flex justify-center items-center right-8 lg:right-20 bottom-8 lg:bottom-16 w-16 h-16 rounded-full bg-aqua hover:bg-gray-800 transition-all duration-300 dark:bg-black'>
                <button onClick={handleOpenOptions} className={`fas fa-gear text-3xl text-white`} />
            </div>

            {open && (
                <div className='fixed z-50 flex flex-col space-y-6 p-4 lg:right-20 lg:bottom-36 bottom-28 right-8 rounded-xl shadow-2xl shadow-black/10 dark:shadow-black bg-white  dark:bg-gray-900'>

                    <div className='flex flex-row space-x-2'>

                        <p className='text-gray-800 dark:text-white'>Tema:</p>
                        <div className='flex border border-solid border-aqua rounded-full overflow-hidden'>
                            <button onClick={toggleLightTheme} className={`fas fa-sun text-base py-1 px-3 ${theme === "light" ? "text-white bg-aqua " : "text-white bg-gray-900"}`} />
                            <button onClick={toggleDarkTheme} className={`fas fa-moon text-base py-1 px-3 ${theme === "dark" ? "text-white bg-aqua " : "text-gray-800 bg-white"}`} />

                        </div>
                    </div>
                    <div className='flex flex-row space-x-2'>

                        <p className='text-gray-800 dark:text-white'>Tamanho Fonte:</p>
                        <div className='flex border border-solid border-aqua rounded-full overflow-hidden bg-aqua space-x-[1px] '>
                            <button onClick={increaseFont} className={`text-sm font-bold text-gray-800 py-1 px-3 bg-white dark:text-white dark:bg-gray-900`}><p>A+</p></button>
                            <button onClick={decreaseFont} className={`text-sm font-bold text-gray-800 py-1 px-3 bg-white dark:text-white dark:bg-gray-900`}><p>A-</p></button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );


}


export default Options;