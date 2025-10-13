const campanhas = [
    {
      nome: "Vacinação ",
      imagem: "/inicial/imagens/Campanha_de_vacinacao.jpg",
      link: ""
    },
    {
      nome: "Castração Gratuita",
      imagem: "/inicial/imagens/castracao_gratis.jpg",
      link: ""
    },
    {
      nome: "Caminhada de Conscientização do Autismo",
      imagem: "/inicial/imagens/Autismo.jpg",
      link: ""
    },
    {
      nome: "Feira de Adoção",
      imagem: "/inicial/imagens/adocao2.jpg",
      link: ""
    },
    {
      nome: "Campanha contra a Influenza",
      imagem: "/inicial/imagens/contra_a_inflienza.jpg",
      link: ""
    },
    {
      nome: "Treinamento para Incêndios",
      imagem: "/inicial/imagens/treinamento_contra_incendios.jpg",
      link: ""
    },
    {
      nome: "Campanha do Agasalho",
      imagem: "/inicial/imagens/campanhadoagasalho.jpg",
      link: ""
    },
    {
      nome: "Campanha contra a dengue",
      imagem: "/inicial/imagens/contradengue.jpg",
      link: ""
    },
    {
      nome: "Doação de Sangue",
      imagem: "",
      link: ""
    },
    {
      nome: "Evento 10",
      imagem: "",
      link: ""
    },
    {
      nome: "Evento 11",
      imagem: "",
      link: ""
    },
    {
      nome: "Evento 12",
      imagem: "",
      link: ""
    }
  ];

  
  const galeria = document.querySelector('.campanhas');
  galeria.innerHTML = ''; // Limpa o conteúdo existente

  campanhas.forEach(evento => {
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
