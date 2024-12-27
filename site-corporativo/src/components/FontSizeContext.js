import { createContext, useContext, useEffect, useState } from "react";


const FontSizeContext = createContext();
export const FontSizeProvider = ({ children }) => {

    const [scale, setScale] = useState(0);

    const increaseFont = () => setScale((prev) => Math.min(prev + 1, 3)); // Limite de incremento
    const decreaseFont = () => setScale((prev) => Math.max(prev - 1, -2)); // Limite de decremento
    
    useEffect(()=>{

        console.log(scale)
    },[scale])
  
    return (
        <FontSizeContext.Provider value={{ scale, increaseFont, decreaseFont }}>
          <div className={`font-size-scale-${scale}`}>{children}</div>
        </FontSizeContext.Provider>
      );

}

export const useFontSize = () => useContext(FontSizeContext);