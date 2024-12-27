import Pin from "./Pin";

const valores = [
    {
        icon: 'key',
        title: 'Integridade',
        text: 'Focamos em fazer a coisa certa e não a mais fácil.'
    },
    {
        icon: 'heart',
        title: 'Paixão',
        text: 'Acreditamos que a paixão é a semente para a criatividade e o desenvolvimento das nossas soluções.'
    },
    {
        icon: 'lightbulb',
        title: 'Inovação',
        text: 'Procuramos continuamente aumentar nosso conhecimento, fortalecendo e agregando o máximo de valor em cada parceria que formamos com nossos clientes.'
    },
    {
        icon: 'rocket',
        title: 'Assertividade',
        text: 'Nossas soluções são elaboradas com um único propósito gerar valor para nossos clientes.'
    },
    {
        icon: 'thumbs-up',
        title: 'Transparência',
        text: 'A ética e a transparência é base das nossas negociações e contratos entre todos os envolvidos.'
    }
];

const Sobre = () => (
    <div className="pb-32">
        <br />
        <h1 className="whitespace-pre-wrap font-medium text-gray-800 dark:text-white">Missão</h1>
        <br />
        <p className="font-regular whitespace-pre-wrap text-gray-800 dark:text-white">
            Tornarmos conhecidos pela qualidade e assertividade nas soluções geradas para nossos clientes e parceiros com foco em novas tecnologias, robustez e confiabilidade, gerando valor a todas as partes interessadas.
        </p>

        <br />
        <h1 className="whitespace-pre-wrap font-medium text-gray-800 dark:text-white">Valores</h1>
        <br />
        <div className="inline-flex flex-wrap justify-evenly">
           <Pin pins={valores}/>
        </div>
    </div>
);

export default Sobre;