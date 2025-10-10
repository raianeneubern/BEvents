const privados = [
    {
      nome: "Banda NSC",
      imagem: "/inicial/imagens/BarraFolia.png",
      link: "/inicial/barrafolia.html"
    },
    {
      nome: "Banda NSC",
      imagem: "/inicial/imagens/barra_rock.jpg",
      link: "/inicial/barrarock.html"
    },
    {
      nome: "Recital HR - Harmonia da música",
      imagem: "/inicial/imagens/EncontroCarro.jpg",
      link: "/inicial/encontrodecarros.html"
    },
    {
      nome: 'Recital de Natal HR <br>"S.O.S Natal em perigo 3"<br',
      imagem: "/inicial/imagens/Niverbarra.png",
      link: "/inicial/niverbarra.html"
    },
    {
      nome: "Evento 5",
      imagem: "/inicial/imagens/Guri.jpg",
      link: "#"
    },
    {
      nome: "Evento 6",
      imagem: "/inicial/imagens/Maratona.png",
      link: "/inicial/meiamaratona.html"
    },
    {
      nome: "Evento 7",
      imagem: "",
      link: "#"
    },
    {
      nome: "Evento 8",
      imagem: "/inicial/imagens/anonovo.jpg",
      link: "#"
    },
    {
      nome: "Evento 9",
      imagem: "/inicial/imagens/FestaTrabalhador.jpg",
      link: "#"
    },
    {
      nome: "Evento 10",
      imagem: "/inicial/imagens/MotoFest.jpg",
      link: "/inicial/motofest.html"
    },
    {
      nome: "Evento 11",
      imagem: "/inicial/imagens/BarraMagia.jpg",
      link: "/inicial/barramagia.html"
    },
    {
      nome: "Evento 12",
      imagem: "/inicial/imagens/FestivalDança.jpg",
      link: "#"
    }
  ];

  
  const galeria = document.querySelector('.privados'); // seleciona a nova galeria 'privados'
  galeria.innerHTML = ''; // limpa o conteúdo existente
  
  privados.forEach(evento => {
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
  