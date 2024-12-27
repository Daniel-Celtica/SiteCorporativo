import Pin from "./Pin";

const servicos = [
    {
        icon: 'earth-americas',
        title: 'GIS',
        text: 'Consultoria e desenvolvimento de softwares baseados em localização geográfica e funcões espaciais.'
    },
    {
        icon: 'mobile-screen-button',
        title: 'MOBILE',
        text: 'Consultoria e desenvolvimento em tecnologias móveis: IOS / Android / Windows Phone.'
    },
];

const Servicos = () => (

    <div className="flex flex-wrap justify-evenly pb-72 max-w-full">

        <Pin pins={servicos}/>

    </div>


);

export default Servicos;