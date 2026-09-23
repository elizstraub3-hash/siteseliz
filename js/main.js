/* Lógica do site — normalmente não é preciso editar este arquivo.
   Os dados ficam em js/config.js. */

(function () {
  const whatsUrl =
    "https://wa.me/" +
    WHATSAPP_NUMERO.replace(/\D/g, "") +
    "?text=" +
    encodeURIComponent(WHATSAPP_MENSAGEM);

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = whatsUrl;
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---------- Filtros e cards ---------- */
  const filtrosEl = document.getElementById("filtros");
  const gradeEl = document.getElementById("grade-projetos");
  const vazioEl = document.getElementById("projetos-vazio");
  const nomePorId = Object.fromEntries(CATEGORIAS.map((c) => [c.id, c.nome]));

  const filtros = [{ id: "todos", nome: "Todos" }, ...CATEGORIAS];
  filtros.forEach((f, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filtro";
    btn.textContent = f.nome;
    btn.dataset.filtro = f.id;
    btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    btn.addEventListener("click", () => aplicarFiltro(f.id));
    filtrosEl.appendChild(btn);
  });

  function criarCard(p) {
    const card = document.createElement("article");
    card.className = "card";

    const midia = document.createElement("div");
    midia.className = "card__midia";
    if (p.imagem) {
      const img = document.createElement("img");
      img.src = p.imagem;
      img.alt = "Prévia do projeto " + p.nome;
      img.loading = "lazy";
      midia.appendChild(img);
    } else {
      midia.classList.add("card__midia--vazia");
      midia.innerHTML =
        '<span class="card__inicial" aria-hidden="true"></span>';
      midia.querySelector("span").textContent = p.nome.charAt(0);
    }

    const corpo = document.createElement("div");
    corpo.className = "card__corpo";

    const tags = document.createElement("p");
    tags.className = "card__categoria";
    tags.textContent = p.tipo || p.categorias.map((c) => nomePorId[c]).join(" · ");

    const titulo = document.createElement("h3");
    titulo.className = "card__titulo";
    titulo.textContent = p.nome;

    const link = document.createElement("a");
    link.className = "btn btn--linha";
    link.href = p.link || "#";
    link.textContent = "Ver projeto";
    if (p.link && p.link !== "#") {
      link.target = "_blank";
      link.rel = "noopener";
    }
    link.setAttribute("aria-label", "Ver projeto " + p.nome);

    corpo.append(tags, titulo, link);
    card.append(midia, corpo);
    return card;
  }

  function aplicarFiltro(id) {
    filtrosEl.querySelectorAll(".filtro").forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.filtro === id ? "true" : "false")
    );

    const lista =
      id === "todos" ? PROJETOS : PROJETOS.filter((p) => p.categorias.includes(id));

    gradeEl.replaceChildren(...lista.map(criarCard));
    vazioEl.hidden = lista.length > 0;
    if (!lista.length) {
      vazioEl.querySelector("[data-categoria]").textContent =
        (nomePorId[id] || "esta categoria").toLowerCase();
    }
  }

  aplicarFiltro("todos");

  /* ---------- Menu no celular ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("menu");
  toggle.addEventListener("click", () => {
    const aberto = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!aberto));
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
