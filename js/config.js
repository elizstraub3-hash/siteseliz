/* =====================================================================
   CONFIGURAÇÕES DO PORTFÓLIO — edite apenas este arquivo no dia a dia
   ===================================================================== */

/* ---------- WhatsApp ----------
   Formato: código do país + DDD + número, só dígitos.
   Exemplo: "5511987654321"  (55 = Brasil, 11 = DDD)                  */
const WHATSAPP_NUMERO = "55XXXXXXXXXXX";
const WHATSAPP_MENSAGEM =
  "Olá! Vi seu portfólio e gostaria de solicitar um orçamento.";

/* ---------- Categorias dos filtros ----------
   "id" é usado nos projetos abaixo; "nome" é o texto que aparece no site.
   Uma categoria sem projetos continua aparecendo, com um aviso de "em breve". */
const CATEGORIAS = [
  { id: "sites",     nome: "Sites" },
  { id: "casamento", nome: "Casamento" },
  { id: "infantil",  nome: "Infantil" },
  { id: "15anos",    nome: "15 anos" },
  { id: "estaticos", nome: "Convites estáticos" },
];

/* ---------- Projetos ----------
   Para adicionar um trabalho, copie um bloco { ... }, cole no fim da lista
   e troque as informações.

   nome       → título do card
   tipo       → texto curto exibido no card (ex.: "Site de casamento")
   categorias → um ou mais ids da lista CATEGORIAS acima
   imagem     → caminho da imagem (coloque o arquivo em img/projetos/).
                Deixe "" para mostrar um espaço reservado elegante.
   link       → endereço do projeto publicado (abre em nova aba)         */
const PROJETOS = [
  {
    nome: "Fernanda & Carlos",
    tipo: "Site de casamento",
    categorias: ["sites", "casamento"],
    imagem: "",
    link: "#",
  },
  {
    nome: "Casamentos.com",
    tipo: "Site personalizado",
    categorias: ["sites"],
    imagem: "",
    link: "#",
  },
  {
    nome: "Cláudia & Oseias",
    tipo: "Site de casamento",
    categorias: ["sites", "casamento"],
    imagem: "",
    link: "#",
  },
];
