/* =====================================================================
   CONFIGURAÇÕES DO PORTFÓLIO — edite apenas este arquivo no dia a dia
   ===================================================================== */

/* ---------- WhatsApp ----------
   Formato: código do país + DDD + número, só dígitos.
   Exemplo: "5511987654321"  (55 = Brasil, 11 = DDD)
   Nas páginas de serviço, a mensagem já cita o serviço (ex.: "...orçamento de Lojas online.") */
const WHATSAPP_NUMERO = "55XXXXXXXXXXX";
const WHATSAPP_MENSAGEM =
  "Olá! Vi seu portfólio e gostaria de solicitar um orçamento.";

/* ---------- Páginas de serviço ----------
   Cada item gera: uma página própria, um card na seção Serviços da página
   inicial e um filtro na seção Projetos.

   Para criar uma página nova:
   1. Copie um bloco { ... } abaixo e troque as informações.
   2. Duplique um arquivo de página (ex.: sites.html), renomeie com o mesmo
      "id" (ex.: cardapios.html) e troque data-pagina="sites" pelo novo id.

   id       → nome do arquivo sem ".html"
   grupo    → "negocios" ou "celebracoes" (em qual bloco aparece na inicial)
   nome     → nome do serviço
   filtro   → texto curto do botão de filtro
   resumo   → frase curta do card na página inicial
   titulo   → título grande da página (o trecho entre *asteriscos* fica em itálico)
   intro    → texto de apresentação da página
   inclui   → lista "O que pode incluir"
   mockup   → "celular" ou "notebook": moldura usada nas imagens dos projetos
   orcamento → como o serviço aparece na mensagem do WhatsApp
               ("...gostaria de solicitar um orçamento de ___.") */
const PAGINAS = [
  /* ----- Para negócios ----- */
  {
    id: "sites",
    grupo: "negocios",
    nome: "Criação de sites",
    filtro: "Sites",
    resumo: "Sites institucionais e páginas personalizadas.",
    titulo: "Um site com a *cara* do seu negócio",
    intro:
      "Sites institucionais e páginas personalizadas para apresentar sua empresa, seus serviços ou o seu evento com clareza e personalidade.",
    inclui: [
      "Site institucional",
      "Página única de apresentação ou de vendas",
      "Botão de contato direto pelo WhatsApp",
      "Layout pensado para o celular",
    ],
    mockup: "celular",
    orcamento: "criação de site",
  },
  {
    id: "lojas",
    grupo: "negocios",
    nome: "Lojas online",
    filtro: "Lojas online",
    resumo: "Vitrines com produtos e estrutura de compra.",
    titulo: "Sua vitrine *aberta* o tempo todo",
    intro:
      "Vitrines com produtos e estrutura de compra para apresentar e vender pela internet.",
    inclui: [
      "Vitrine de produtos com fotos e descrições",
      "Organização por categorias",
      "Estrutura de compra ou pedido",
      "Layout pensado para o celular",
    ],
    mockup: "celular",
    orcamento: "loja online",
  },
  {
    id: "catalogos",
    grupo: "negocios",
    nome: "Catálogos online",
    filtro: "Catálogos",
    resumo: "Produtos organizados para consulta e pedido.",
    titulo: "Seus produtos *organizados* em um só link",
    intro:
      "Produtos organizados para consulta e pedido — prontos para enviar aos clientes pelo WhatsApp e pelas redes sociais.",
    inclui: [
      "Produtos separados por categoria",
      "Fotos, descrições e opções de cada produto",
      "Pedido direto pelo WhatsApp",
      "Cardápios digitais para restaurantes e delivery",
    ],
    mockup: "celular",
    orcamento: "catálogo online",
  },
  {
    id: "planilhas",
    grupo: "negocios",
    nome: "Planilhas no Excel",
    filtro: "Planilhas",
    resumo: "Planilhas personalizadas para organizar o seu dia a dia.",
    titulo: "Planilhas que *organizam* a sua rotina",
    intro:
      "Planilhas personalizadas no Excel para controlar, calcular e organizar as informações do seu negócio ou do seu evento.",
    inclui: [
      "Estrutura sob medida para a sua necessidade",
      "Fórmulas e cálculos automáticos",
      "Visual limpo e fácil de preencher",
      "Identidade visual da sua marca",
    ],
    mockup: "notebook",
    orcamento: "planilha no Excel",
  },

  /* ----- Para celebrações ----- */
  {
    id: "casamento",
    grupo: "celebracoes",
    nome: "Casamento",
    filtro: "Casamento",
    resumo: "Convites digitais e sites para o grande dia.",
    titulo: "Convites e sites para o *grande dia*",
    intro:
      "Convites digitais estáticos e interativos e sites de casamento com a identidade do casal — prontos para enviar aos convidados pelo WhatsApp.",
    inclui: [
      "Convite digital estático, em imagem",
      "Convite interativo, com botões e links",
      "Site do casamento com as informações do evento",
      "Design exclusivo com a identidade do casal",
    ],
    mockup: "celular",
    orcamento: "convite ou site de casamento",
  },
  {
    id: "infantil",
    grupo: "celebracoes",
    nome: "Aniversário infantil",
    filtro: "Infantil",
    resumo: "Convites nos mais diversos temas para os pequenos.",
    titulo: "Convites cheios de *personalidade* para os pequenos",
    intro:
      "Convites digitais para aniversários infantis nos mais diversos temas — do tema favorito da criança a uma ideia criada do zero.",
    inclui: [
      "Convite digital estático, em imagem",
      "Convite interativo, com botões e links",
      "Artes em diversos temas e estilos",
      "Pronto para enviar pelo WhatsApp",
    ],
    mockup: "celular",
    orcamento: "convite de aniversário infantil",
  },
  {
    id: "eventos",
    grupo: "celebracoes",
    nome: "15 anos e eventos",
    filtro: "15 anos e eventos",
    resumo: "Convites em diversos temas para cada ocasião.",
    titulo: "Convites para *cada* ocasião",
    intro:
      "Convites digitais para 15 anos e outros eventos, em diversos temas e estilos, criados de acordo com a ocasião.",
    inclui: [
      "Convite digital estático, em imagem",
      "Convite interativo, com botões e links",
      "Artes em diversos temas e estilos",
      "Pronto para enviar pelo WhatsApp",
    ],
    mockup: "celular",
    orcamento: "convite de 15 anos ou evento",
  },
];

/* ---------- Projetos ----------
   Para adicionar um trabalho, copie um bloco { ... }, cole no fim da lista
   e troque as informações.

   nome     → título do card
   tipo     → texto curto exibido no card (ex.: "Convite interativo")
   paginas  → em quais páginas aparece (ids da lista PAGINAS acima)
   imagem   → print da tela do projeto (coloque o arquivo em img/projetos/).
              Ele aparece automaticamente dentro de um mockup de celular ou
              notebook. Deixe "" para mostrar um espaço reservado.
   link     → endereço da demonstração (abre em nova aba). Deixe "" para
              mostrar só a imagem, sem botão.                              */
const PROJETOS = [
  {
    nome: "Francieli & Carlos Eduardo",
    tipo: "Convite interativo de casamento",
    paginas: ["casamento"],
    imagem: "img/projetos/francieli-carlos.jpg",
    link: "", // convite real: https://convitefrancarlos.vercel.app/
  },
  {
    nome: "Fernanda & Alex",
    tipo: "Site de casamento · Casamentos.com",
    paginas: ["casamento", "sites"],
    imagem: "img/projetos/fernanda-alex.jpg",
    link: "", // site real: https://casamentos-com.vercel.app/
  },
  {
    nome: "Claudia & Oséias",
    tipo: "Convite interativo · Jantar de celebração",
    paginas: ["eventos"],
    imagem: "img/projetos/claudia-oseias.jpg",
    link: "", // convite real: https://claudia-e-oseias.vercel.app/jantar.html
  },
  {
    nome: "Lidiane & Celio",
    tipo: "Convite interativo · Jantar de celebração",
    paginas: ["eventos"],
    imagem: "img/projetos/lidiane-celio.jpg",
    link: "", // convite real: https://convite-lidiane-celio.vercel.app/jantar.html
  },
];
