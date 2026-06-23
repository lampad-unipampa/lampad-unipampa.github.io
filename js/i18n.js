/* =========================================================
   LaMPAD · i18n (PT / ES / EN)
   Troca de idioma no cliente, sem recarregar. Persistência
   em localStorage; detecção inicial pelo navegador.
   ========================================================= */
(function () {
  "use strict";

  var DICT = {
    pt: {
      "skip": "Pular para o conteúdo",
      "nav.about": "Sobre",
      "nav.infra": "Infraestrutura",
      "nav.scheduling": "Agendamento",
      "nav.partners": "Parceiros",
      "nav.committee": "Comitê",
      "nav.contact": "Contato",
      "nav.cta": "Agendar uso",

      "hero.eyebrow": "Unipampa · Registrado no PNIPE",
      "hero.title": "Processamento de alto desempenho na fronteira da ciência",
      "hero.sub": "O Laboratório Multiusuário de Processamento de Alto Desempenho coloca GPUs e clusters de computação à disposição de pesquisadores da Unipampa e de seus parceiros.",
      "hero.cta1": "Agendar uso →",
      "hero.cta2": "Ver infraestrutura",
      "hero.stat1": "GPU de topo de linha",
      "hero.stat2": "nós de computação",
      "hero.stat3": "workstations com GPU",
      "hero.legend_gpu": "GPU",
      "hero.legend_cpu": "CPU",
      "hero.legend_live": "em uso",

      "about.eyebrow": "01 · O laboratório",
      "about.title": "Um recurso compartilhado para a pesquisa",
      "about.p1": "O LaMPAD é um laboratório multiusuário que concentra capacidade de computação de alto desempenho em um único ponto de acesso. Em vez de equipamentos isolados em cada grupo, a infraestrutura é gerida de forma coletiva, agendada e aberta à comunidade científica.",
      "about.p2": "O laboratório é cadastrado no PNIPE, a Plataforma Nacional de Infraestrutura de Pesquisa, o que dá visibilidade e governança ao uso dos recursos por pesquisadores de diferentes programas e instituições.",
      "about.f1t": "Multiusuário.",
      "about.f1d": "Acesso compartilhado e agendado entre grupos e programas de pós-graduação.",
      "about.f2t": "Governança.",
      "about.f2d": "Comitê gestor e comitê assessor definem prioridades e políticas de uso.",
      "about.f3t": "Colaborativo.",
      "about.f3d": "Rede de parceiros nacionais e internacionais em torno da infraestrutura.",

      "infra.eyebrow": "02 · Infraestrutura",
      "infra.title": "Três grids de computação",
      "infra.lead": "A capacidade está organizada em grids complementares: estações com GPUs modernas para cargas de aceleração e servidores para processamento paralelo em CPU.",
      "infra.g1": "Workstations com GPU",
      "infra.g1note": "Aceleração para IA, simulação e renderização.",
      "infra.g2": "Servidores i7 · 9ª geração",
      "infra.g2note": "Processamento paralelo e jobs em lote.",
      "infra.g3": "Servidores i7 · 7ª geração",
      "infra.g3note": "Experimentos distribuídos e serviços do laboratório.",
      "infra.each": "cada",

      "sched.eyebrow": "03 · Agendamento",
      "sched.title": "Reserve os recursos do laboratório",
      "sched.p": "O uso é organizado por agendamento. Consulte a disponibilidade no calendário público e solicite sua reserva por e-mail, indicando o período, o grid desejado e uma breve descrição do trabalho.",
      "sched.cta1": "Solicitar agendamento",
      "sched.cta2": "Abrir no Google Agenda ↗",
      "sched.cta3": "Preencher formulário",
      "sched.cal_title": "Agenda pública do laboratório",

      "part.eyebrow": "04 · Parceiros",
      "part.title": "Uma rede em torno da infraestrutura",
      "part.lead": "Programas de pós-graduação, grupos de pesquisa e colaboradores externos sustentam e utilizam o laboratório.",
      "part.ppg": "Programas de pós-graduação",
      "part.groups": "Grupos de pesquisa",
      "part.ext": "Colaboradores externos",
      "part.eco": "Ecossistema de inovação",

      "com.eyebrow": "05 · Gestão",
      "com.title": "Comitês gestor e assessor",
      "com.lead": "A operação do laboratório é conduzida por um comitê gestor, apoiado por um comitê assessor com representantes dos grupos de pesquisa.",
      "com.manage": "Comitê Gestor",
      "com.advise": "Comitê Assessor",
      "com.r_coord": "Coordenador",
      "com.r_vice": "Vice-Coordenador",
      "com.r_acad": "Coordenação Acadêmica",

      "contact.eyebrow": "06 · Contato",
      "contact.title": "Fale com o laboratório",
      "contact.lead": "Dúvidas sobre acesso, parcerias ou uso da infraestrutura? Escreva para a coordenação.",

      "footer.tag": "Laboratório Multiusuário de Processamento de Alto Desempenho · Universidade Federal do Pampa",
      "footer.credit": "Desenvolvido pelo"
    },

    es: {
      "skip": "Saltar al contenido",
      "nav.about": "Acerca de",
      "nav.infra": "Infraestructura",
      "nav.scheduling": "Reservas",
      "nav.partners": "Socios",
      "nav.committee": "Comité",
      "nav.contact": "Contacto",
      "nav.cta": "Reservar uso",

      "hero.eyebrow": "Unipampa · Registrado en PNIPE",
      "hero.title": "Procesamiento de alto rendimiento en la frontera de la ciencia",
      "hero.sub": "El Laboratorio Multiusuario de Procesamiento de Alto Rendimiento pone GPUs y clústeres de cómputo a disposición de investigadores de la Unipampa y sus socios.",
      "hero.cta1": "Reservar uso →",
      "hero.cta2": "Ver infraestructura",
      "hero.stat1": "GPU de gama alta",
      "hero.stat2": "nodos de cómputo",
      "hero.stat3": "estaciones con GPU",
      "hero.legend_gpu": "GPU",
      "hero.legend_cpu": "CPU",
      "hero.legend_live": "en uso",

      "about.eyebrow": "01 · El laboratorio",
      "about.title": "Un recurso compartido para la investigación",
      "about.p1": "El LaMPAD es un laboratorio multiusuario que concentra capacidad de cómputo de alto rendimiento en un único punto de acceso. En lugar de equipos aislados en cada grupo, la infraestructura se gestiona de forma colectiva, con reservas y abierta a la comunidad científica.",
      "about.p2": "El laboratorio está registrado en PNIPE, la Plataforma Nacional de Infraestructura de Investigación, lo que aporta visibilidad y gobernanza al uso de los recursos por investigadores de distintos programas e instituciones.",
      "about.f1t": "Multiusuario.",
      "about.f1d": "Acceso compartido y reservado entre grupos y programas de posgrado.",
      "about.f2t": "Gobernanza.",
      "about.f2d": "El comité gestor y el comité asesor definen prioridades y políticas de uso.",
      "about.f3t": "Colaborativo.",
      "about.f3d": "Red de socios nacionales e internacionales en torno a la infraestructura.",

      "infra.eyebrow": "02 · Infraestructura",
      "infra.title": "Tres grids de cómputo",
      "infra.lead": "La capacidad se organiza en grids complementarios: estaciones con GPUs modernas para cargas de aceleración y servidores para procesamiento paralelo en CPU.",
      "infra.g1": "Estaciones con GPU",
      "infra.g1note": "Aceleración para IA, simulación y renderizado.",
      "infra.g2": "Servidores i7 · 9.ª generación",
      "infra.g2note": "Procesamiento paralelo y trabajos por lotes.",
      "infra.g3": "Servidores i7 · 7.ª generación",
      "infra.g3note": "Experimentos distribuidos y servicios del laboratorio.",
      "infra.each": "c/u",

      "sched.eyebrow": "03 · Reservas",
      "sched.title": "Reserva los recursos del laboratorio",
      "sched.p": "El uso se organiza por reservas. Consulta la disponibilidad en el calendario público y solicita tu reserva por correo, indicando el período, el grid deseado y una breve descripción del trabajo.",
      "sched.cta1": "Solicitar reserva",
      "sched.cta2": "Abrir en Google Calendar ↗",
      "sched.cta3": "Completar formulario",
      "sched.cal_title": "Agenda pública del laboratorio",

      "part.eyebrow": "04 · Socios",
      "part.title": "Una red en torno a la infraestructura",
      "part.lead": "Programas de posgrado, grupos de investigación y colaboradores externos sostienen y utilizan el laboratorio.",
      "part.ppg": "Programas de posgrado",
      "part.groups": "Grupos de investigación",
      "part.ext": "Colaboradores externos",
      "part.eco": "Ecosistema de innovación",

      "com.eyebrow": "05 · Gestión",
      "com.title": "Comités gestor y asesor",
      "com.lead": "La operación del laboratorio está a cargo de un comité gestor, apoyado por un comité asesor con representantes de los grupos de investigación.",
      "com.manage": "Comité Gestor",
      "com.advise": "Comité Asesor",
      "com.r_coord": "Coordinador",
      "com.r_vice": "Vicecoordinador",
      "com.r_acad": "Coordinación Académica",

      "contact.eyebrow": "06 · Contacto",
      "contact.title": "Habla con el laboratorio",
      "contact.lead": "¿Dudas sobre acceso, alianzas o uso de la infraestructura? Escribe a la coordinación.",

      "footer.tag": "Laboratorio Multiusuario de Procesamiento de Alto Rendimiento · Universidad Federal del Pampa",
      "footer.credit": "Desarrollado por"
    },

    en: {
      "skip": "Skip to content",
      "nav.about": "About",
      "nav.infra": "Infrastructure",
      "nav.scheduling": "Scheduling",
      "nav.partners": "Partners",
      "nav.committee": "Committee",
      "nav.contact": "Contact",
      "nav.cta": "Book time",

      "hero.eyebrow": "Unipampa · Registered with PNIPE",
      "hero.title": "High-performance computing at the frontier of science",
      "hero.sub": "The Multi-User High-Performance Processing Laboratory puts GPUs and compute clusters within reach of researchers at Unipampa and its partners.",
      "hero.cta1": "Book time →",
      "hero.cta2": "See infrastructure",
      "hero.stat1": "flagship GPU",
      "hero.stat2": "compute nodes",
      "hero.stat3": "GPU workstations",
      "hero.legend_gpu": "GPU",
      "hero.legend_cpu": "CPU",
      "hero.legend_live": "in use",

      "about.eyebrow": "01 · The lab",
      "about.title": "A shared resource for research",
      "about.p1": "LaMPAD is a multi-user lab that concentrates high-performance computing capacity behind a single point of access. Instead of isolated machines in each group, the infrastructure is run collectively, scheduled, and open to the scientific community.",
      "about.p2": "The lab is registered with PNIPE, Brazil's National Research Infrastructure Platform, giving visibility and governance to how the resources are used by researchers across programs and institutions.",
      "about.f1t": "Multi-user.",
      "about.f1d": "Shared, scheduled access across research groups and graduate programs.",
      "about.f2t": "Governance.",
      "about.f2d": "Steering and advisory committees set priorities and usage policies.",
      "about.f3t": "Collaborative.",
      "about.f3d": "A network of national and international partners around the infrastructure.",

      "infra.eyebrow": "02 · Infrastructure",
      "infra.title": "Three compute grids",
      "infra.lead": "Capacity is organized into complementary grids: workstations with modern GPUs for acceleration workloads and servers for parallel CPU processing.",
      "infra.g1": "GPU workstations",
      "infra.g1note": "Acceleration for AI, simulation and rendering.",
      "infra.g2": "i7 servers · 9th gen",
      "infra.g2note": "Parallel processing and batch jobs.",
      "infra.g3": "i7 servers · 7th gen",
      "infra.g3note": "Distributed experiments and lab services.",
      "infra.each": "each",

      "sched.eyebrow": "03 · Scheduling",
      "sched.title": "Reserve the lab's resources",
      "sched.p": "Usage is organized by scheduling. Check availability on the public calendar and request your reservation by email, stating the time window, the grid you need and a short description of the work.",
      "sched.cta1": "Request a slot",
      "sched.cta2": "Open in Google Calendar ↗",
      "sched.cta3": "Fill out the form",
      "sched.cal_title": "Lab public calendar",

      "part.eyebrow": "04 · Partners",
      "part.title": "A network around the infrastructure",
      "part.lead": "Graduate programs, research groups and external collaborators sustain and use the lab.",
      "part.ppg": "Graduate programs",
      "part.groups": "Research groups",
      "part.ext": "External collaborators",
      "part.eco": "Innovation ecosystem",

      "com.eyebrow": "05 · Governance",
      "com.title": "Steering and advisory committees",
      "com.lead": "The lab is run by a steering committee, supported by an advisory committee with representatives from the research groups.",
      "com.manage": "Steering Committee",
      "com.advise": "Advisory Committee",
      "com.r_coord": "Coordinator",
      "com.r_vice": "Deputy Coordinator",
      "com.r_acad": "Academic Coordination",

      "contact.eyebrow": "06 · Contact",
      "contact.title": "Get in touch with the lab",
      "contact.lead": "Questions about access, partnerships or using the infrastructure? Write to the coordination.",

      "footer.tag": "Multi-User High-Performance Processing Laboratory · Federal University of Pampa",
      "footer.credit": "Built by"
    }
  };

  var HTML_LANG = { pt: "pt-BR", es: "es", en: "en" };
  var STORE_KEY = "lampad-lang";

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && DICT[saved]) return saved;
    var nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "pt";
  }

  function apply(lang) {
    if (!DICT[lang]) lang = "pt";
    var table = DICT[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table[key] != null) el.textContent = table[key];
    });

    document.documentElement.setAttribute("lang", HTML_LANG[lang]);

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function init() {
    apply(detect());
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
