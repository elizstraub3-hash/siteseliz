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

  /* ----- Para celebrações (convites) -----
     Estas páginas mostram os modelos da lista CONVITES em slide.
     preco         → valor de cada convite (aparece no topo e em cada modelo)
     modelosIntro  → texto acima do slide
     passos        → "Como funciona" (sem este campo, usa PASSOS_CONVITE)
     extra         → título e texto da seção de outros projetos da página */
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
    preco: "R$ 85,00",
    extra: ["Site do casamento", "Um site completo com todas as informações do grande dia. Valor sob orçamento."],
    modelosIntro:
      "Arraste para o lado e veja o que vai em cada convite. Todos são personalizados com os nomes, as cores e as informações do casal.",
    passos: [
      ["Escolha o modelo", "Passe os modelos e escolha o estilo que mais combina com vocês."],
      ["Envie as informações", "Nomes, data, horário, local, foto e a música do casal."],
      ["Aprove a prévia", "Você confere o convite pronto antes de finalizar."],
      ["Receba o link", "É só enviar aos convidados pelo WhatsApp."],
    ],
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
      "Artes no tema favorito da criança",
      "Pronto para enviar pelo WhatsApp",
    ],
    mockup: "celular",
    orcamento: "convite de aniversário infantil",
    preco: "R$ 85,00",
    modelosIntro:
      "Arraste para o lado e veja o que vai em cada convite. Todos são personalizados com o nome, a idade e o tema da criança.",
  },
  {
    id: "quinze-anos",
    grupo: "celebracoes",
    nome: "15 anos",
    filtro: "15 anos",
    resumo: "Convites para uma festa de debutante inesquecível.",
    titulo: "Convites para uma noite *inesquecível*",
    intro:
      "Convites digitais para festas de 15 anos, com a personalidade da debutante — do clássico ao moderno, prontos para enviar pelo WhatsApp.",
    inclui: [
      "Convite digital estático, em imagem",
      "Convite interativo, com botões e links",
      "Foto da debutante e a música da festa",
      "Pronto para enviar pelo WhatsApp",
    ],
    mockup: "celular",
    orcamento: "convite de 15 anos",
    preco: "R$ 85,00",
    modelosIntro:
      "Arraste para o lado e veja o que vai em cada convite. Todos são personalizados com o nome, as cores e o estilo da debutante.",
  },
  {
    id: "aniversarios",
    grupo: "celebracoes",
    nome: "Aniversários de 20 a 50 anos",
    filtro: "Aniversários",
    resumo: "Convites para 20, 30, 40, 50 anos e muito mais.",
    titulo: "Convites para comemorar *cada década*",
    intro:
      "Convites digitais para aniversários de 20, 30, 40, 50 anos e outras idades — do churrasco entre amigos à festa completa.",
    inclui: [
      "Convite digital estático, em imagem",
      "Convite interativo, com botões e links",
      "Estilo de acordo com a festa: elegante, divertido ou temático",
      "Pronto para enviar pelo WhatsApp",
    ],
    mockup: "celular",
    orcamento: "convite de aniversário",
    preco: "R$ 85,00",
    modelosIntro:
      "Arraste para o lado e veja o que vai em cada convite. Todos são personalizados com o nome, a idade e o estilo da festa.",
  },
];

/* ---------- Como funciona (padrão das páginas de convite) ---------- */
const PASSOS_CONVITE = [
  ["Escolha o modelo", "Passe os modelos e escolha o estilo que mais combina com a festa."],
  ["Envie as informações", "Nome, idade, data, horário, local, foto e o tema."],
  ["Aprove a prévia", "Você confere o convite pronto antes de finalizar."],
  ["Receba o link", "É só enviar aos convidados pelo WhatsApp."],
];

/* ---------- Convites (slide) ----------
   Aparecem em slide na página indicada em "paginas" e NÃO aparecem na
   página inicial. Ids das páginas: "casamento", "infantil", "quinze-anos",
   "aniversarios".

   modelo    → nome do modelo (título do slide)
   exemplo   → casal do exemplo mostrado no print
   imagem    → print do convite no celular (em img/projetos/)
   link      → demonstração (abre em nova aba). Deixe "" para não mostrar o botão.
   descricao → texto curto sobre o estilo do convite
   inclui    → lista "O que vai neste convite"
   preco     → valor exibido no slide                                    */
const CONVITES = [
  {
    modelo: "Clássico Botânico",
    exemplo: "Francieli & Carlos Eduardo",
    paginas: ["casamento"],
    imagem: "img/projetos/francieli-carlos.jpg",
    link: "", // convite real: https://convitefrancarlos.vercel.app/
    descricao:
      "Fundo com textura de papel, galhos delicados e monograma com as iniciais do casal. Elegante e atemporal.",
    inclui: [
      "Monograma com as iniciais do casal",
      "Nomes, data e horário da cerimônia",
      "Frase de abertura personalizada",
      "Botão para tocar a música do casal",
    ],
    preco: "R$ 85,00",
  },
  {
    modelo: "Azul & Dourado",
    exemplo: "Claudia & Oséias",
    paginas: ["casamento"],
    imagem: "img/projetos/claudia-oseias.jpg",
    link: "", // convite real: https://claudia-e-oseias.vercel.app/jantar.html
    descricao:
      "Moldura floral em azul e dourado, monograma sofisticado e uma mensagem carinhosa para os convidados.",
    inclui: [
      "Monograma com folhas douradas",
      "Mensagem especial para os convidados",
      "Data e horário em destaque",
      "Player com a música do casal",
    ],
    preco: "R$ 85,00",
  },
  {
    modelo: "Com Foto do Casal",
    exemplo: "Lidiane & Celio",
    paginas: ["casamento"],
    imagem: "img/projetos/lidiane-celio.jpg",
    link: "", // convite real: https://convite-lidiane-celio.vercel.app/jantar.html
    descricao:
      "A foto do casal abre o convite e as informações do evento vêm logo abaixo, organizadas em cartões.",
    inclui: [
      "Foto do casal na capa",
      "Local, endereço, data e horário",
      "Contagem para o grande dia",
      "Player com a música do casal",
    ],
    preco: "R$ 85,00",
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
    nome: "Fernanda & Alex",
    tipo: "Site de casamento · Casamentos.com",
    paginas: ["casamento", "sites"],
    imagem: "img/projetos/fernanda-alex.jpg",
    link: "", // site real: https://casamentos-com.vercel.app/
  },
];
