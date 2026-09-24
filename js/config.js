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
    textos: {
      referencias: "Uma loja que já criei, para você ver como fica. Cada loja é feita com a identidade da sua marca.",
      planos: "O que vai na loja",
    },
    planos: [
      {
        nome: "Loja online com painel",
        resumo: "A sua loja completa, com um painel para você mesma cuidar dos produtos.",
        preco: "R$ 750,00",
        botao: "Quero a minha loja",
        inclui: [
          "Vitrine de produtos com fotos e descrições",
          "Organização por categorias",
          "Pedido pelo WhatsApp",
          "Layout pensado para o celular",
          "Painel para cadastrar e editar os produtos",
        ],
      },
    ],
    passos: [
      ["Conte sobre a sua marca", "Logo, cores, produtos e como você quer organizar a loja."],
      ["Envie os produtos", "Fotos, descrições, tamanhos e preços."],
      ["Aprove a loja", "Você confere tudo antes de publicar."],
      ["Comece a vender", "Receba o link da loja e cuide dos produtos pelo painel."],
    ],
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

  /* ----- Para celebrações (convites) -----
     Estas páginas mostram: referências (lista REFERENCIAS abaixo), os
     valores (planos) com o que vai no convite, e o "Como funciona".
     planos  → cada plano tem nome, resumo, preco e a lista "inclui".
               destaque: "texto do selo" deixa o plano em evidência.
               botao: texto do botão (opcional).
               Qualquer página com "planos" ganha este formato (ex.: lojas).
     textos  → (opcional) { referencias, planos }: textos da página
     passos  → "Como funciona" (sem este campo, usa PASSOS_CONVITE) */
  {
    id: "casamento",
    grupo: "celebracoes",
    nome: "Casamento",
    filtro: "Casamento",
    resumo: "Convites digitais interativos para o grande dia.",
    titulo: "Convites para o *grande dia*",
    intro:
      "Convites digitais interativos com o tema e as cores que vocês escolherem — prontos para enviar aos convidados pelo WhatsApp.",
    inclui: [],
    mockup: "celular",
    orcamento: "convite de casamento",
    planos: [
      {
        nome: "Convite básico",
        resumo: "O convite interativo completo, com o tema escolhido pelos noivos.",
        preco: "R$ 85,00",
        inclui: [
          "Tema e cores escolhidos pelos noivos",
          "Nomes, data, horário e endereço",
          "Música do casal",
          "Mural de fotos",
          "Confirmação de presença pelo WhatsApp",
          "Link pronto para enviar aos convidados",
        ],
      },
      {
        nome: "Convite com painel",
        destaque: "Mais completo",
        resumo: "Tudo do básico, mais um painel só para os noivos acompanharem tudo.",
        preco: "R$ 95,00",
        inclui: [
          "Tudo do convite básico",
          "Painel exclusivo dos noivos",
          "Lista de presentes",
          "Veja quem confirmou presença",
          "Total de pessoas confirmadas",
        ],
      },
    ],
    passos: [
      ["Escolham o tema", "Vocês escolhem o tema e as cores. As referências servem de inspiração."],
      ["Enviem as informações", "Nomes, data, horário, local, fotos e a música do casal."],
      ["Aprovem a prévia", "Vocês conferem o convite pronto antes de finalizar."],
      ["Recebam o link", "É só enviar aos convidados pelo WhatsApp."],
    ],
  },
  {
    id: "infantil",
    grupo: "celebracoes",
    nome: "Aniversário infantil",
    filtro: "Infantil",
    resumo: "Convites no tema favorito da criança.",
    titulo: "Convites cheios de *personalidade* para os pequenos",
    intro:
      "Convites digitais interativos no tema favorito da criança — prontos para enviar aos convidados pelo WhatsApp.",
    inclui: [],
    mockup: "celular",
    orcamento: "convite de aniversário infantil",
    planos: [
      {
        nome: "Convite básico",
        resumo: "O convite interativo completo, com o tema escolhido por vocês.",
        preco: "R$ 85,00",
        inclui: [
          "Tema e cores escolhidos por vocês",
          "Nome e idade do aniversariante",
          "Data, horário e endereço da festa",
          "Música",
          "Mural de fotos",
          "Confirmação de presença pelo WhatsApp",
          "Link pronto para enviar aos convidados",
        ],
      },
    ],
  },
  {
    id: "quinze-anos",
    grupo: "celebracoes",
    nome: "15 anos",
    filtro: "15 anos",
    resumo: "Convites para uma festa de debutante inesquecível.",
    titulo: "Convites para uma noite *inesquecível*",
    intro:
      "Convites digitais interativos com o tema e o estilo da debutante — prontos para enviar aos convidados pelo WhatsApp.",
    inclui: [],
    mockup: "celular",
    orcamento: "convite de 15 anos",
    planos: [
      {
        nome: "Convite básico",
        resumo: "O convite interativo completo, com o tema escolhido por vocês.",
        preco: "R$ 85,00",
        inclui: [
          "Tema e cores escolhidos por vocês",
          "Nome e foto da debutante",
          "Data, horário e endereço da festa",
          "Música",
          "Mural de fotos",
          "Confirmação de presença pelo WhatsApp",
          "Link pronto para enviar aos convidados",
        ],
      },
    ],
  },
  {
    id: "aniversarios",
    grupo: "celebracoes",
    nome: "Aniversários de 20 a 50 anos",
    filtro: "Aniversários",
    resumo: "Convites para 20, 30, 40, 50 anos e muito mais.",
    titulo: "Convites para comemorar *cada década*",
    intro:
      "Convites digitais interativos para aniversários de 20, 30, 40, 50 anos e outras idades — do churrasco entre amigos à festa completa.",
    inclui: [],
    mockup: "celular",
    orcamento: "convite de aniversário",
    planos: [
      {
        nome: "Convite básico",
        resumo: "O convite interativo completo, com o tema escolhido por vocês.",
        preco: "R$ 85,00",
        inclui: [
          "Tema e cores escolhidos por vocês",
          "Nome e idade do aniversariante",
          "Data, horário e endereço da festa",
          "Música",
          "Mural de fotos",
          "Confirmação de presença pelo WhatsApp",
          "Link pronto para enviar aos convidados",
        ],
      },
    ],
  },
];

/* ---------- Como funciona (padrão das páginas de convite) ---------- */
const PASSOS_CONVITE = [
  ["Escolha o tema", "Você escolhe o tema e as cores. As referências servem de inspiração."],
  ["Envie as informações", "Nome, idade, data, horário, local, foto e o tema."],
  ["Aprove a prévia", "Você confere o convite pronto antes de finalizar."],
  ["Receba o link", "É só enviar aos convidados pelo WhatsApp."],
];

/* ---------- Referências (trabalhos já feitos) ----------
   Aparecem em slide, só a imagem, sem nome nem descrição. O cliente toca
   para ampliar. NÃO aparecem na página inicial.

   paginas → em qual página aparece: "casamento", "infantil",
             "quinze-anos", "aniversarios", "lojas"…
   imagem  → print da tela no celular (em img/projetos/)
   link    → (opcional) site no ar; usado quando ainda não há imagem
   titulo  → (opcional) texto do cartão quando não há imagem           */
const REFERENCIAS = [
  { paginas: ["casamento"], imagem: "img/projetos/francieli-carlos.jpg" }, // convitefrancarlos.vercel.app
  { paginas: ["casamento"], imagem: "img/projetos/claudia-oseias.jpg" }, // claudia-e-oseias.vercel.app
  { paginas: ["casamento"], imagem: "img/projetos/lidiane-celio.jpg" }, // convite-lidiane-celio.vercel.app
  { paginas: ["casamento"], imagem: "img/projetos/fernanda-alex.jpg" }, // casamentos-com.vercel.app
  // Sem imagem: aparece um cartão que abre o site. Com imagem, ela aparece com zoom.
  { paginas: ["lojas"], titulo: "Loja de roupas", link: "https://neneve.vercel.app/", imagem: "" },
];

/* ---------- Projetos ----------
   Para adicionar um trabalho, copie um bloco { ... }, cole no fim da lista
   e troque as informações.

   nome     → nome do cliente (só para você se organizar; não aparece no site)
   tipo     → texto curto exibido no card (ex.: "Convite interativo")
   paginas  → em quais páginas aparece (ids da lista PAGINAS acima)
   imagem   → print da tela do projeto (coloque o arquivo em img/projetos/).
              Ele aparece automaticamente dentro de um mockup de celular ou
              notebook. Deixe "" para mostrar um espaço reservado.
   link     → endereço da demonstração (abre em nova aba). Deixe "" para
              mostrar só a imagem, sem botão.                              */
const PROJETOS = [
  {
    nome: "Fernanda & Alex",
    tipo: "Site de casamento · Casamentos.com",
    paginas: ["sites"],
    imagem: "img/projetos/fernanda-alex.jpg",
    link: "", // site real: https://casamentos-com.vercel.app/
  },
];
