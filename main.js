document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const closeModalBtn = modal.querySelector(".btn-close");
    const whatsapp1Btn = modal.querySelector("#whatsapp1");
    const whatsapp2Btn = modal.querySelector("#whatsapp2");
    const modalTitle = modal.querySelector("#modal-title");
  
    const cardButtons = document.querySelectorAll(".card_links button");
  
    const modalData = { //dados exibidos ao escolher um setor específico
      moda: {
        title: "Moda",
        sellers: [
          { name: "Iza", whatsapp: "https://wa.me/5577988430603" },
          { name: "Tânia", whatsapp: "https://wa.me/5577992072969" },
        ],
      },
      moveis: {
        title: "Móveis e Eletros",
        sellers: [
          { name: "Ritamara", whatsapp: "https://wa.me/5577991021861" },
          { name: "Valdenilto", whatsapp: "https://wa.me/5577991791396" },
        ],
      },
      grana: {
        title: "Empréstimos e Saque FGTS",
        sellers: [
          { name: "Kezia", whatsapp: "https://wa.me/5577999048223" },
          { name: "Regina", whatsapp: "https://wa.me/5577999048223" },
        ],
      },
      financeiro: {
        title: "Financeiro",
        sellers: [
          { name: "Kezia", whatsapp: "https://wa.me/5577999048223" },
          { name: "Regina", whatsapp: "https://wa.me/5577999048223" },
        ],
      },
    };
   // captura e acessa os dados da modal
    cardButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modalType = button.dataset.modal; 
        const data = modalData[modalType];
  
        if (data) {
          modalTitle.textContent = `Escolha um consultor para ${data.title}`;
  
          //direciona ao whatsapp dos respectivos consultores
          whatsapp1Btn.textContent = data.sellers[0].name;
          whatsapp1Btn.onclick = () => window.open(data.sellers[0].whatsapp, "_blank");
  
          
          whatsapp2Btn.textContent = data.sellers[1].name;
          whatsapp2Btn.onclick = () => window.open(data.sellers[1].whatsapp, "_blank");
  
          modal.style.display = "flex"; // Exibe a modal
        } else {
          console.error(`Dados não encontrados para o tipo: ${modalType}`);
        }
      });
    });
  
    // Fechar a modal clicando no fechar
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Fechar modal clicando fora do conteúdo
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  