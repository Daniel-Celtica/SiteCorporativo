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
    {
        icon: 'gamepad',
        title: 'SERIOUS GAME',
        text: 'Consultoria e desenvolvimento de jogos sérios utilizando tecnologias 3D.'
    }
];

const Servicos = () => (

    <div className="inline-flex flex-wrap justify-evenly pb-72">

        <Pin pins={servicos}/>

    </div>


);

export default Servicos;