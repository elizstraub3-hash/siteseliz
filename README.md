# Portfólio — MKS Marketing

Site estático (HTML + CSS + JS), sem instalação. Basta abrir `index.html` ou publicar a pasta em qualquer hospedagem (GitHub Pages, Netlify, Vercel…).

## Páginas

| Página | Arquivo |
|---|---|
| Início | `index.html` |
| Criação de sites | `sites.html` |
| Lojas online | `lojas.html` |
| Catálogos online | `catalogos.html` |
| Planilhas no Excel | `planilhas.html` |
| Casamento | `casamento.html` |
| Aniversário infantil | `infantil.html` |
| 15 anos e eventos | `eventos.html` |

O conteúdo das páginas de serviço (título, texto, "O que pode incluir") fica em `js/config.js`, na lista `PAGINAS`. Cabeçalho e rodapé são iguais em todas as páginas e ficam em `js/main.js`.

## O que editar e onde

| Quero mudar… | Onde |
|---|---|
| Número e mensagem do WhatsApp | `js/config.js` → `WHATSAPP_NUMERO`, `WHATSAPP_MENSAGEM` |
| Textos de uma página de serviço | `js/config.js` → `PAGINAS` |
| Projetos | `js/config.js` → `PROJETOS` |
| Textos da página inicial (início e contato) | `index.html` |
| Cores e fontes | `css/style.css` → bloco `:root` no topo |

## Adicionar um projeto

1. Tire um print da tela do projeto:
   - convites, sites, lojas e catálogos: print do **celular** (vertical, ex.: 1080×2340);
   - planilhas: print da **tela do computador** (horizontal, ex.: 1600×1000).
2. Salve em `img/projetos/`.
3. Em `js/config.js`, copie um bloco da lista `PROJETOS` e ajuste:

```js
{
  nome: "Ana & Pedro",
  tipo: "Convite interativo",
  paginas: ["casamento"],
  imagem: "img/projetos/ana-pedro.jpg",
  link: "https://link-da-demonstracao.com",
},
```

O print aparece automaticamente dentro de um mockup de celular ou notebook.
O botão "Ver demonstração" só aparece quando `link` está preenchido.
Um projeto pode aparecer em mais de uma página (ex.: `["sites", "casamento"]`).

## Adicionar uma página de serviço

1. Em `js/config.js`, copie um bloco da lista `PAGINAS` e troque as informações (o `id` vira o nome do arquivo).
2. Duplique um arquivo de página (ex.: `sites.html`), renomeie para `<id>.html` e troque `data-pagina="sites"` pelo novo id. Ajuste também o `<title>` e a `description`.

A página nova aparece sozinha nos Serviços da página inicial, nos filtros de Projetos e em "Outros serviços".

## Logo

- `img/logo-mks.png` — logo preta recortada (usada no topo e no rodapé)
- `img/logo-mks-branco.png` — versão branca, para fundos escuros
- `img/logo-mks-original.png` — arquivo original enviado
