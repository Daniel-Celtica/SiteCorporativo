import Contato from "./Contato";
import MediaSelector from "./MediaSelector";
import Servicos from "./Servicos";
import Sobre from "./Sobre";

const clientes = [
  {
    title: "SAAE Itabirito",
    subtitle: "cGIS Saneamento",
    text: "Aplicação da plataforma cGIS a área de saneamento. Desenvolvendo uma estrutura de cadastro geográfico inteligente, serviços de integração com sistema legados de gestão, automação e aplicativos remotos, além de serviços para notificação aos clientes, cálculos hidráulicos e alertas configuráveis.",
    imagetitle: "/logo3-600x400.jpg",
    video: "zR5ixgG2hC0"
  },
  {
    title: "Copasa",
    subtitle: "Portal de Geoprocessamento Coorporativo",
    text: "A equipe da Céltica participou diretamenta da criação da solução coorporativa de geoprocessamento da Copasa, desenvolvendo as ferramentas tanto para a interface web, como para a interface desktop utilizando as tecnologias de ESRI (ArcGIS Server/Desktop), como também na criação de serviços de integração com os softwares legados da empresa, tais como SAP, SICOM e EPANET.",
    imagetitle: "/logo11-600x400.jpg",
    image: "/copagis2.jpg"
  },
  {
    title: "Anglo American",
    subtitle: "App para coleta remota de dados",
    text: "Desenvolvimento de um aplicativo Android, para coleta de dados remota e posterior sincronização com a base de dados coorporativa.\nPara os instrumento abaixo:\n\n•Estação Climatológica / Fluviométrica / Hidrosedimentológica / Pluviométrica\n•Medidor de Nível Água / Nascente / Piezômetro\n•Poço / Ponto de Água / Ponto de Medição Móvel / Qualidade / Vertedouro",
    imagetitle: "/logo2-600x400.jpg",
    image: "/siganglo2.jpg"
  },
  {
    title: "Encibra",
    subtitle: "Sistema de suporte à criação de estudos hidráulicos",
    text: "O projeto foi desenvolvido com o objetivo de criar ferramentas para suporte à criação de estudos hidráulicos, facilitar a identificação de anomalias, inconsistências e descontinuidades no cadastro de redes de água, além de auxiliar no processo de sincronização entre os estudos criados no geodatabase local, as simulações realizadas no EPANET e a base GIS coorporativa.",
    imagetitle: "/logo4-600x400.jpg",
    image: "/encribra01.jpg"
  }
];

const cGis = [
  {
    title: "Ordem de Serviço",
    subtitle: "Ordem de Serviço",
    text: "O cGIS Saneamento possui um serviço de integração com o software comercial que cadastra e georreferencia as novas ordens de serviço e atualiza o status das ordens de serviço já georreferenciadas.",
    video: "zR5ixgG2hC0",
    imagetitle: "/5.gif"
  },
  {
    title: "Clientes",
    subtitle: "Clientes",
    text: "O cGIS Saneamento possui um serviço de integração com o software comercial que cadastra e georreferencia as novas ligações e atualiza os atributos alfanuméricos das ligações georreferenciadas.",
    video: "Qpi-XC0W-i8",
    imagetitle: "/6.gif"
  },
  {
    title: "Cadastro inteligente",
    subtitle: "Cadastro inteligente",
    text: "Serviços de edição online para as camadas do mapa padrão como:\n\n•Trechos e nós de rede de água e esgoto\n•Logradouros, bairros e loteamento\n•Zonas de Pressão e Abastecimento",
    video: "z1QtRbKq8Tw",
    imagetitle: "/3.gif"
  },
  {
    title: "Equipes de campo",
    subtitle: "Equipes de campo",
    text: "O cGIS Saneamento possui um serviço de integração com o software de OS online que atualiza a posição geográfica das equipes de campo no mapa.\n\nPossibilitando assim o controle da localização geográfica das equipes de campo.",
    video: "gO9s8EB370Q",
    imagetitle: "/4.gif"
  },
  {
    title: "Cálculos",
    subtitle: "Cálculos",
    text: "Serviço que permite obter dados de vazão micro medida de uma região considerando um índice de perdas.\n\n•Vazão média\n•Vazão máx. dia\n•Vazão máx. hora\n•Vazão percapta\n•Área/Poplação/Densidade",
    video: "bw2JRDy53wQ",
    imagetitle: "/1.gif"
  },
  {
    title: "Ferramentas de seleção e consulta",
    subtitle: "Ferramentas de seleção e consulta",
    text: "Serviços que permitem a navegação, e, a realização de consultas simples e avançadas nas camadas do mapa padrão:\n\nFerramentas navegação:\n\n•Zoom para extensão total do mapa;\n•Zoom In/Out;\n•Zoom Anterior/Posterior;\n•Panorâmica;\n\nFerramentas de consulta:\n\n•Tabela de atributos;\n•Construtor de consultas avançadas;\n•Identificador;\n•Ferramentas de medida",
    video: "O2TbkEhpfBE",
    imagetitle: "/2.gif"
  }
];


const Sections = ({ topics, isFloating, sectionRefs }) => (
  topics.slice(1).map((topic, index) => (
    <section
      key={topic.title}
      id={topic.title}
      ref={(el) => (sectionRefs.current[topic.title] = el)}
      className={`h-auto pt-16 px-16 lg:px-64 bg-white border-b-2`}
    >

      <h2 className="text-4xl font-medium text-gray-800">{topic.title}</h2>
      <br />
      <div className="h-1 w-8 bg-aqua" />
      <p className="mt-4 whitespace-pre-wrap text-xl font-regular text-gray-800">{topic.text}</p>

      {
        topic.title === "Sobre" ? (<Sobre />) :
          topic.title === "cGIS" ? (<MediaSelector media={cGis} />) :
            topic.title === "Clientes" ? (<MediaSelector media={clientes} />) :
              topic.title === "Serviços" ? (<Servicos />) :
                topic.title === "Contato" ? (<Contato />) :
                  (<></>)

      }

    </section>
  ))
);

export default Sections;

