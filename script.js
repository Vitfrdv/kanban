// Função para permitir que um item seja solto
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  // Função para pegar o item que está sendo arrastado
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  // Função para soltar o item no local de destino
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const card = document.getElementById(data);
    ev.target.appendChild(card);
  }
  
  // Função para criar um novo cartão
  document.getElementById('add-card-btn').addEventListener('click', function() {
    const cardText = prompt("Digite o texto do novo cartão:");
    if (cardText) {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = 'card-' + Math.random().toString(36).substr(2, 9);
      card.draggable = true;
      card.ondragstart = drag;
  
      // Adiciona o texto e o botão de deletar no cartão
      const cardTextElement = document.createElement('span');
      cardTextElement.textContent = cardText;
      card.appendChild(cardTextElement);
  
      // Botão de deletar
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Deletar';
      deleteBtn.onclick = function() {
        card.remove();
      };
      card.appendChild(deleteBtn);
  
      document.getElementById('clientes-hoje').appendChild(card);
    }
  });
  