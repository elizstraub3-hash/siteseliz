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
| Convites de casamento | `casamento.html` |
| Convites de aniversário infantil | `infantil.html` |
| Convites de 15 anos | `quinze-anos.html` |
| Convites de aniversário de 20 a 50 anos | `aniversarios.html` |

`eventos.html` é o endereço antigo e só redireciona para `quinze-anos.html`.

O conteúdo das páginas de serviço (título, texto, "O que pode incluir") fica em `js/config.js`, na lista `PAGINAS`. Cabeçalho e rodapé são iguais em todas as páginas e ficam em `js/main.js`.

## O que editar e onde

| Quero mudar… | Onde |
|---|---|
| Número e mensagem do WhatsApp | `js/config.js` → `WHATSAPP_NUMERO`, `WHATSAPP_MENSAGEM` |
| Textos de uma página de serviço | `js/config.js` → `PAGINAS` |
| Projetos | `js/config.js` → `PROJETOS` |
| Trabalhos de convite (referências) | `js/config.js` → `REFERENCIAS` |
| Valores e o que vai no convite | `js/config.js` → `PAGINAS` → `planos` |
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

O print aparece automaticamente dentro de um mockup de celular ou notebook,
e o cliente pode tocar nele para ampliar. O nome do cliente não aparece no site.
A página inicial não mostra projetos: eles ficam na página de cada serviço.
O botão "Ver demonstração" só aparece quando `link` está preenchido.
Um projeto pode aparecer em mais de uma página (ex.: `["sites", "casamento"]`).

## Convites (casamento, infantil, 15 anos, aniversários)

Cada comemoração tem a sua página, com:

1. **Trabalhos já feitos** — só as imagens, sem nomes, em slide. O cliente toca para ampliar.
   Para adicionar um, copie uma linha da lista `REFERENCIAS` em `js/config.js` e troque
   a `imagem` e a página (`"casamento"`, `"infantil"`, `"quinze-anos"` ou `"aniversarios"`).
2. **O que vai no convite** — os valores (planos). Ficam em `PAGINAS` → na página → `planos`.
   No casamento: Convite básico (R$ 85,00) e Convite com painel (R$ 95,00).
3. **Como funciona** — em `passos` (ou `PASSOS_CONVITE`, o padrão).

A página de **Lojas online** usa o mesmo formato: a loja de roupas (neneve.vercel.app)
nas referências e o valor de R$ 750,00 com painel. Uma referência sem `imagem` aparece
como um cartão preto com o link "Ver o site funcionando"; ao colocar um print em
`imagem`, ele aparece no lugar, com zoom.

## Adicionar uma página de serviço

1. Em `js/config.js`, copie um bloco da lista `PAGINAS` e troque as informações (o `id` vira o nome do arquivo).
2. Duplique um arquivo de página (ex.: `sites.html`), renomeie para `<id>.html` e troque `data-pagina="sites"` pelo novo id. Ajuste também o `<title>` e a `description`.

A página nova aparece sozinha nos Serviços da página inicial, nos filtros de Projetos e em "Outros serviços".

## Logo

- `img/logo-mks.png` — logo preta recortada (usada no topo e no rodapé)
- `img/logo-mks-branco.png` — versão branca, para fundos escuros
- `img/logo-mks-original.png` — arquivo original enviado
