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
    <div>
      <br />
      <h2 className="text-3xl whitespace-pre-wrap font-medium text-gray-800">Missão</h2>
      <br />
      <p className="text-xl font-regular whitespace-pre-wrap text-gray-800">
        Tornarmos conhecidos pela qualidade e assertividade nas soluções geradas para nossos clientes e parceiros com foco em novas tecnologias, robustez e confiabilidade, gerando valor a todas as partes interessadas.
      </p>
  
      <br />
      <h2 className="text-3xl whitespace-pre-wrap font-medium text-gray-800">Valores</h2>
      <br />
      <div className="inline-flex flex-wrap justify-evenly">
        {valores.map((valor, index) => (
          <div key={index} className="flex flex-col w-96 items-center">
            <div className="flex h-fit w-auto mt-8 p-[3px] bg-transparent group hover:bg-gray-800 rounded-full transition-all duration-300">
              <span className="flex justify-center items-center border-[6px] border-white bg-aqua h-24 w-24 rounded-full group-hover:bg-gray-800 transition-all duration-300">
                <i className={`fas fa-${valor.icon} text-4xl text-white`} />
              </span>
            </div>
            <h3 className="text-xl">{valor.title}</h3>
            <p className="text-center">{valor.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Sobre;