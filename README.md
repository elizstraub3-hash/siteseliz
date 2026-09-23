# Portfólio — Elizandra Straub

Site estático (HTML + CSS + JS), sem instalação. Basta abrir `index.html` ou publicar a pasta em qualquer hospedagem (GitHub Pages, Netlify, Vercel…).

## O que editar e onde

| Quero mudar… | Arquivo |
|---|---|
| Número e mensagem do WhatsApp | `js/config.js` → `WHATSAPP_NUMERO`, `WHATSAPP_MENSAGEM` |
| Projetos (nome, tipo, categorias, imagem, link) | `js/config.js` → `PROJETOS` |
| Filtros / categorias | `js/config.js` → `CATEGORIAS` |
| Textos (início, serviços, sobre, contato) | `index.html` (cada seção tem um comentário) |
| Cores e fontes | `css/style.css` → bloco `:root` no topo |

## Adicionar um projeto

1. Salve a imagem em `img/projetos/` (vertical 4:5, ex.: 1000×1250 px, JPG ou WebP).
2. Em `js/config.js`, copie um bloco da lista `PROJETOS` e ajuste:

```js
{
  nome: "Nome do projeto",
  tipo: "Convite de 15 anos",
  categorias: ["15anos"],
  imagem: "img/projetos/nome-do-arquivo.jpg",
  link: "https://endereco-do-projeto.com",
},
```

Categorias disponíveis: `sites`, `casamento`, `infantil`, `15anos`, `estaticos`.
Um projeto pode ter mais de uma (ex.: um site de casamento → `["sites", "casamento"]`).
Categorias sem projetos mostram automaticamente o aviso "chegam em breve".

## Foto na seção Sobre

Salve sua foto em `img/` e siga o comentário dentro da seção **Sobre** do `index.html`.
