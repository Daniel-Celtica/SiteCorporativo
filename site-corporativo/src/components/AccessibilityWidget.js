

import Script from "next/script";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

export default function AccessibilityWidget() {

    const init = () => {
        window.VLibras.Widget('https://vlibras.gov.br/app');
    };

    useLayoutEffect(() => {
        if (window && window.onload) {
            // vlibras insere o evento onload no window
            window.onload();
        }
    }, []);

    return (
        <>
            <div vw='true' className='enabled'>
                <div vw-access-button='true' className='active' />
                <div vw-plugin-wrapper='true'>
                    <div className='vw-plugin-top-wrapper' />
                </div>
            </div>
            <Script src='https://vlibras.gov.br/app/vlibras-plugin.js' onLoad={init} />
        </>
    );
}
