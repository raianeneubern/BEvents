const eventos = [
    {
      nome: "Barra Folia",
      imagem: "/inicial/imagens/BarraFolia.png",
      link: "/inicial/barrafolia.html"
    },
    {
      nome: "Barra Rock Fest",
      imagem: "/inicial/imagens/barra_rock.jpg",
      link: "/inicial/barrarock.html"
    },
    {
      nome: "Encontro de carros antigos",
      imagem: "/inicial/imagens/EncontroCarro.jpg",
      link: "/inicial/encontrodecarros.html"
    },
    {
      nome: "Barra Bonita 142 anos",
      imagem: "/inicial/imagens/Niverbarra.png",
      link: "/inicial/niverbarra.html"
    },
    {
      nome: "Evento 5",
      imagem: "/inicial/imagens/Guri.jpg",
      link: "#"
    },
    {
      nome: "14º Meia Maratona",
      imagem: "/inicial/imagens/Maratona.png",
      link: "/inicial/meiamaratona.html"
    },
    {
      nome: "Evento 7",
      imagem: "",
      link: "#"
    },
    {
      nome: "Ano Novo",
      imagem: "/inicial/imagens/anonovo.jpg",
      link: "#"
    },
    {
      nome: "Festa do trabalhador",
      imagem: "/inicial/imagens/FestaTrabalhador.jpg",
      link: "#"
    },
    {
      nome: "Zuando Moto Fest",
      imagem: "/inicial/imagens/MotoFest.jpg",
      link: "/inicial/motofest.html"
    },
    {
      nome: "Barra Magia",
      imagem: "/inicial/imagens/BarraMagia.jpg",
      link: "/inicial/barramagia.html"
    },
    {
      nome: "Festival de Dança Internacional",
      imagem: "/inicial/imagens/FestivalDança.jpg",
      link: "#"
    }
  ];

  const galeria = document.querySelector('.galeria');
  galeria.innerHTML = ''; // Limpa o conteúdo existente

  eventos.forEach(evento => {
    const col = document.createElement('div');
    col.className = "col-12 col-md-6 col-lg-4 mb-4";

    col.innerHTML = `
      <div class="evento card h-100">
        ${evento.link && evento.link !== "#" ? `<a href="${evento.link}">` : ''}
          <img src="${evento.imagem}" class="card-img-top" alt="${evento.nome}">
        ${evento.link && evento.link !== "#" ? `</a>` : ''}
        <div class="card-body">
          <p class="card-text">${evento.nome}</p>
        </div>
      </div>
    `;

    galeria.appendChild(col);
  });
