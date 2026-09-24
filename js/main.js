/* Lógica do site — normalmente não é preciso editar este arquivo.
   Os dados ficam em js/config.js. */

(function () {
  const paginaId = document.body.dataset.pagina || "";
  const paginaAtual = PAGINAS.find((p) => p.id === paginaId);

  /* ---------- Utilidades ---------- */
  const el = (tag, attrs = {}, ...filhos) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else n.setAttribute(k, v);
    }
    n.append(...filhos.filter((f) => f != null));
    return n;
  };

  // "Texto com *itálico*" → nós de texto + <em>
  const comItalico = (texto) => {
    const frag = document.createDocumentFragment();
    texto.split(/\*(.+?)\*/).forEach((parte, i) =>
      frag.append(i % 2 ? el("em", {}, parte) : parte)
    );
    return frag;
  };

  const whatsUrl = (mensagem) =>
    "https://wa.me/" +
    WHATSAPP_NUMERO.replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(mensagem);

  const mensagemPadrao = paginaAtual
    ? `Olá! Vi seu portfólio e gostaria de solicitar um orçamento de ${paginaAtual.orcamento || paginaAtual.nome}.`
    : WHATSAPP_MENSAGEM;

  const ICONE_WHATS =
    '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.06c-1.5 0-2.98-.4-4.26-1.17l-.3-.18-3.07.9.92-2.99-.2-.31a8.2 8.2 0 1 1 6.91 3.75Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.28.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43l-.76-1.82c-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04c0 1.2.88 2.37 1 2.53.13.17 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>';

  /* ---------- Cabeçalho e rodapé (iguais em todas as páginas) ---------- */
  document.getElementById("topo").outerHTML = `
  <header class="topo">
    <nav class="nav container" aria-label="Principal">
      <a href="index.html" class="marca marca--logo"><img src="img/logo-mks.png" alt="MKS Marketing" width="900" height="549" /></a>
      <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu">
        <span></span><span></span>
      </button>
      <ul class="nav__menu" id="menu">
        <li><a href="index.html#servicos">Serviços</a></li>
        <li><a href="index.html#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#" data-whatsapp class="btn btn--pequeno">Orçamento</a></li>
      </ul>
    </nav>
  </header>`;

  document.getElementById("rodape").outerHTML = `
  <footer class="rodape">
    <div class="container rodape__grid">
      <img src="img/logo-mks.png" alt="MKS Marketing" class="rodape__logo" width="900" height="549" />
      <p class="rodape__assinatura">Projetos criados por MKS Marketing</p>
      <span>Sites, convites digitais e design para marcas e momentos especiais.</span>
    </div>
  </footer>`;

  /* ---------- Card de projeto com mockup ---------- */
  function criarMockup(p, tipo) {
    const tela = el("div", { class: "mockup__tela" });
    if (p.imagem) {
      tela.append(el("img", { src: p.imagem, alt: "Prévia do projeto " + p.nome, loading: "lazy" }));
    } else {
      tela.classList.add("mockup__tela--vazia");
      tela.append(el("span", { "aria-hidden": "true" }, p.nome.charAt(0)));
    }
    return el("div", { class: "mockup mockup--" + tipo }, tela);
  }

  function criarCard(p) {
    // Usa a moldura da primeira página do projeto (celular ou notebook)
    const pag = PAGINAS.find((x) => x.id === (paginaAtual ? paginaAtual.id : p.paginas[0]));
    const tipoMockup = (pag && pag.mockup) || "celular";

    const corpo = el(
      "div",
      { class: "card__corpo" },
      el("p", { class: "card__categoria" }, p.tipo),
      el("h3", { class: "card__titulo" }, p.nome)
    );
    if (p.link) {
      corpo.append(
        el("a", {
          class: "btn btn--linha",
          href: p.link,
          target: "_blank",
          rel: "noopener",
          "aria-label": "Ver demonstração do projeto " + p.nome,
        }, "Ver demonstração")
      );
    }
    return el("article", { class: "card" }, el("div", { class: "card__midia" }, criarMockup(p, tipoMockup)), corpo);
  }

  function preencherGrade(grade, vazio, lista, nomeCategoria) {
    grade.replaceChildren(...lista.map(criarCard));
    vazio.hidden = lista.length > 0;
    if (!lista.length) vazio.querySelector("[data-categoria]").textContent = nomeCategoria;
  }

  const blocoVazio = () =>
    el("p", {
      class: "projetos-vazio",
      hidden: "",
      html: 'Novos projetos de <span data-categoria></span> chegam em breve.<br />Quer ser um dos primeiros? <a href="#" data-whatsapp>Fale comigo</a>.',
    });

  /* ---------- Página inicial ---------- */
  function montarInicial() {
    // Serviços em dois grupos
    const grupos = { negocios: "servicos-negocios", celebracoes: "servicos-celebracoes" };
    for (const [grupo, id] of Object.entries(grupos)) {
      const alvo = document.getElementById(id);
      if (!alvo) continue;
      PAGINAS.filter((p) => p.grupo === grupo).forEach((p) =>
        alvo.append(
          el("a", { class: "servico", href: p.id + ".html" },
            el("h3", {}, p.nome),
            el("p", {}, p.resumo),
            el("span", { class: "servico__link" }, "Ver página")
          )
        )
      );
    }

    // Filtros de projetos
    const filtrosEl = document.getElementById("filtros");
    const gradeEl = document.getElementById("grade-projetos");
    const vazioEl = document.getElementById("projetos-vazio");
    // Convites e celebrações têm páginas próprias; aqui entram só os negócios
    const paginasNegocio = PAGINAS.filter((p) => p.grupo === "negocios");
    const projetosNegocio = PROJETOS.filter((p) => paginasNegocio.some((x) => p.paginas.includes(x.id)));
    const filtros = [{ id: "todos", filtro: "Todos" }, ...paginasNegocio];

    const aplicar = (id) => {
      filtrosEl.querySelectorAll(".filtro").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.filtro === id))
      );
      const lista = id === "todos" ? projetosNegocio : projetosNegocio.filter((p) => p.paginas.includes(id));
      const pag = PAGINAS.find((p) => p.id === id);
      preencherGrade(gradeEl, vazioEl, lista, pag ? pag.nome.toLowerCase() : "");
    };

    filtros.forEach((f, i) => {
      const b = el("button", { type: "button", class: "filtro", "data-filtro": f.id, "aria-pressed": String(i === 0) }, f.filtro);
      b.addEventListener("click", () => aplicar(f.id));
      filtrosEl.append(b);
    });
    aplicar("todos");

    // Chamada para as páginas que têm convites em slide
    PAGINAS.filter((p) => CONVITES.some((c) => c.paginas.includes(p.id))).forEach((p) =>
      vazioEl.after(
        el("a", { class: "chamada-convites", href: p.id + ".html#modelos" },
          el("div", {},
            el("p", { class: "sobretitulo" }, "Convites de " + p.nome.toLowerCase()),
            el("h3", {}, "Veja os modelos de convite"),
            el("p", {}, "Passe os modelos e escolha o estilo de vocês." + (p.preco ? ` ${p.preco} cada convite.` : ""))
          ),
          el("span", { class: "link-seta" }, "Ver modelos")
        )
      )
    );
  }

  /* ---------- Slide de convites ---------- */
  function criarSlide(c, pagina) {
    const acoes = el("div", { class: "slide__acoes" },
      el("a", {
        class: "btn",
        href: whatsUrl(`Olá! Vi o modelo "${c.modelo}" e gostaria de fazer o convite de ${pagina.nome.toLowerCase()}.`),
        target: "_blank",
        rel: "noopener",
      }, "Quero este modelo")
    );
    if (c.link) {
      acoes.append(el("a", { class: "btn btn--linha", href: c.link, target: "_blank", rel: "noopener" }, "Ver demonstração"));
    }
    return el("article", { class: "slide", "aria-roledescription": "slide" },
      el("div", { class: "slide__midia" }, criarMockup({ nome: c.modelo, imagem: c.imagem }, "celular")),
      el("div", { class: "slide__corpo" },
        el("p", { class: "card__categoria" }, "Exemplo: " + c.exemplo),
        el("h3", { class: "slide__titulo" }, c.modelo),
        el("p", { class: "slide__descricao" }, c.descricao),
        el("h4", { class: "slide__subtitulo" }, "O que vai neste convite"),
        el("ul", { class: "slide__lista" }, ...c.inclui.map((item) => el("li", {}, item))),
        el("div", { class: "slide__preco" },
          el("span", {}, "Valor"),
          el("strong", {}, c.preco || pagina.preco || "")
        ),
        acoes
      )
    );
  }

  function criarSlider(convites, pagina) {
    const trilho = el("div", { class: "slider__trilho", tabindex: "0", "aria-label": "Modelos de convite — arraste para o lado" },
      ...convites.map((c) => criarSlide(c, pagina))
    );
    const anterior = el("button", { type: "button", class: "slider__seta", "aria-label": "Modelo anterior" }, "←");
    const proximo = el("button", { type: "button", class: "slider__seta", "aria-label": "Próximo modelo" }, "→");
    const contador = el("span", { class: "slider__contador", "aria-live": "polite" });
    const pontos = el("div", { class: "slider__pontos" },
      ...convites.map((c, i) => el("button", { type: "button", class: "slider__ponto", "aria-label": `Ver modelo ${i + 1}: ${c.modelo}` }))
    );

    const slides = [...trilho.children];
    const irPara = (i) => {
      const s = slides[Math.max(0, Math.min(slides.length - 1, i))];
      trilho.scrollTo({ left: s.offsetLeft - (trilho.clientWidth - s.clientWidth) / 2, behavior: "smooth" });
    };
    let atual = 0;
    const atualizar = () => {
      const centro = trilho.scrollLeft + trilho.clientWidth / 2;
      atual = slides.reduce((melhor, s, i) =>
        Math.abs(s.offsetLeft + s.clientWidth / 2 - centro) <
        Math.abs(slides[melhor].offsetLeft + slides[melhor].clientWidth / 2 - centro) ? i : melhor, 0);
      slides.forEach((s, i) => s.classList.toggle("ativo", i === atual));
      [...pontos.children].forEach((b, i) => b.setAttribute("aria-current", String(i === atual)));
      contador.textContent = `${atual + 1} / ${slides.length}`;
      anterior.disabled = atual === 0;
      proximo.disabled = atual === slides.length - 1;
    };
    anterior.addEventListener("click", () => irPara(atual - 1));
    proximo.addEventListener("click", () => irPara(atual + 1));
    [...pontos.children].forEach((b, i) => b.addEventListener("click", () => irPara(i)));
    trilho.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); irPara(atual - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); irPara(atual + 1); }
    });
    trilho.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    requestAnimationFrame(atualizar);

    return el("div", { class: "slider" },
      trilho,
      el("div", { class: "slider__controles" }, anterior, pontos, contador, proximo)
    );
  }

  /* ---------- Páginas de serviço ---------- */
  function montarPaginaServico(p) {
    document.title = `${p.nome} · MKS Marketing`;
    const convites = CONVITES.filter((c) => c.paginas.includes(p.id));

    const hero = el("section", { class: "pag-hero" },
      el("div", { class: "container pag-hero__grid" },
        el("div", {},
          el("a", { class: "voltar", href: "index.html#servicos" }, "← Todos os serviços"),
          el("p", { class: "sobretitulo" }, p.nome),
          el("h1", {}, comItalico(p.titulo)),
          el("p", { class: "hero__intro" }, p.intro),
          p.preco && convites.length
            ? el("p", { class: "preco-destaque" }, "Convite interativo ", el("strong", {}, p.preco))
            : null,
          el("div", { class: "hero__acoes" },
            el("a", { href: "#", "data-whatsapp": "", class: "btn" }, "Solicitar orçamento"),
            convites.length
              ? el("a", { href: "#modelos", class: "link-seta" }, "Ver modelos")
              : el("a", { href: "#projetos", class: "link-seta" }, "Ver projetos")
          )
        ),
        el("div", { class: "inclui" },
          el("h2", { class: "inclui__titulo" }, "O que pode incluir"),
          el("ul", {}, ...p.inclui.map((item) => el("li", {}, item)))
        )
      )
    );

    const secoes = [hero];

    if (convites.length) {
      secoes.push(
        el("section", { class: "secao secao--tom", id: "modelos" },
          el("div", { class: "container" },
            el("header", { class: "secao__topo" },
              el("p", { class: "sobretitulo" }, "Modelos de convite"),
              el("h2", {}, "Escolha o estilo de vocês"),
              el("p", { class: "secao__intro" }, "Arraste para o lado e veja o que vai em cada convite. Todos são personalizados com os nomes, as cores e as informações do casal.")
            )
          ),
          criarSlider(convites, p)
        )
      );
    }

    if (p.passos) {
      secoes.push(
        el("section", { class: "secao" },
          el("div", { class: "container" },
            el("header", { class: "secao__topo" },
              el("p", { class: "sobretitulo" }, "Passo a passo"),
              el("h2", {}, "Como funciona")
            ),
            el("ol", { class: "passos" },
              ...p.passos.map(([titulo, texto]) => el("li", {}, el("strong", {}, titulo), el("span", {}, texto)))
            )
          )
        )
      );
    }

    const lista = PROJETOS.filter((x) => x.paginas.includes(p.id));
    // Com convites em slide, a grade só aparece se houver outros projetos (ex.: site do casamento)
    if (!convites.length || lista.length) {
      const grade = el("div", { class: "grade", "aria-live": "polite" });
      const vazio = blocoVazio();
      secoes.push(
        el("section", { class: "secao secao--tom", id: "projetos" },
          el("div", { class: "container" },
            el("header", { class: "secao__topo" },
              el("p", { class: "sobretitulo" }, convites.length ? "Vá além do convite" : "Portfólio"),
              el("h2", {}, convites.length ? "Site do casamento" : "Projetos"),
              convites.length
                ? el("p", { class: "secao__intro" }, "Um site completo com todas as informações do grande dia. Valor sob orçamento.")
                : null
            ),
            grade,
            vazio
          )
        )
      );
      preencherGrade(grade, vazio, lista, p.nome.toLowerCase());
    }

    const outros = el("section", { class: "secao" },
      el("div", { class: "container" },
        el("header", { class: "secao__topo" },
          el("p", { class: "sobretitulo" }, "Conheça também"),
          el("h2", {}, "Outros serviços")
        ),
        el("div", { class: "outros" },
          ...PAGINAS.filter((x) => x.id !== p.id).map((x) =>
            el("a", { class: "outros__item", href: x.id + ".html" }, x.nome)
          )
        )
      )
    );

    document.getElementById("pagina").append(...secoes, outros);
  }

  /* ---------- Bloco de contato nas páginas de serviço ---------- */
  function montarContato() {
    const alvo = document.getElementById("contato-slot");
    if (!alvo) return;
    alvo.outerHTML = `
    <section class="contato" id="contato">
      <div class="container contato__caixa">
        <p class="sobretitulo">Contato</p>
        <h2>Vamos tirar a sua ideia do papel?</h2>
        <p>Me chame no WhatsApp e conte um pouco sobre o seu projeto.</p>
        <a href="#" data-whatsapp class="btn btn--claro">${ICONE_WHATS} Chamar no WhatsApp</a>
      </div>
    </section>`;
  }

  if (paginaAtual) montarPaginaServico(paginaAtual);
  else if (paginaId === "inicio") montarInicial();
  else document.getElementById("pagina") &&
    (document.getElementById("pagina").innerHTML =
      '<section class="secao"><div class="container"><h1>Página não encontrada</h1><p>Confira o data-pagina deste arquivo e o id em js/config.js.</p><a class="btn" href="index.html">Voltar ao início</a></div></section>');
  montarContato();

  /* ---------- Links de WhatsApp ---------- */
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    a.href = whatsUrl(mensagemPadrao);
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* ---------- Menu no celular ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("menu");
  toggle.addEventListener("click", () => {
    const aberto = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!aberto));
    toggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
    menu.classList.toggle("aberto", !aberto);
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("aberto");
    })
  );

  /* ---------- Cabeçalho com sombra ao rolar ---------- */
  const topo = document.querySelector(".topo");
  const onScroll = () => topo.classList.toggle("rolado", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
