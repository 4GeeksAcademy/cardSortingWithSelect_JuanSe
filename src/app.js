let values = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let suits = ['♠', '♥', '♦', '♣'];
let cardsAmount = 1;
let cards = [];

document.querySelector('#draw').addEventListener('click', generateCards);
document.querySelector('#sortB').addEventListener('click', () => bubbleSort(cards));
document.querySelector('#sortS').addEventListener('click', () => selectSort(cards));
document.querySelector('#clear').addEventListener('click', () => clearCards(cards));


function generateCards(cardsAmount) {
  cardsAmount = document.querySelector('#cardsAmount').value;
  console.log(cardsAmount);

  for (let i = 0; i < cardsAmount; i++) {

    let cardNumber = Math.floor(Math.random() * values.length);
    let suitNumber = Math.floor(Math.random() * suits.length);

    let suitValue = suits[suitNumber];
    let cardValue = values[cardNumber];


    let card = document.createElement('div');
    card.setAttribute('id', `card${i}`);
    card.classList.add('card', 'text-center');
    card.classList.add((suitValue === '♥' || suitValue === '♦') ? 'text-danger' : 'text-dark')

    card.innerHTML =
      `
    <span class="top-suit text-start suitValue">${suitValue}</span>
      <h1 class="card-value" id="cardValue">${cardValue}</h1>
      <span class="bottom-suit text-end suitValue">${suitValue}</span>
      
    `;
    document.querySelector('#cards').appendChild(card); //Vizualizar el DOM para insertar el elemento correctamente
    console.log('Im reaching here');

    if (cardValue === 'A') {
      cardValue = 0;
    }
    if (cardValue === 'J') {
      cardValue = 11;
    }
    if (cardValue === 'Q') {
      cardValue = 12;
    }
    if (cardValue === 'K') {
      cardValue = 13;
    }
    cards.push({
      cardValue: cardValue,
      suitValue: suitValue,
    });
    console.log(`Carta agregada: ${cardValue} de ${suitValue}`);
  }
  console.log(cards);
  console.log(`Numero de cartas en el array ${cards.length}`);
  return cards;
}

function bubbleSort(cards) {
  console.log('Sorting cards');
  let n = cards.length;
  let sortingList = document.querySelector('#sortingListBubble'); 
  sortingList.innerHTML = ''; 

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (cards[j].cardValue > cards[j + 1].cardValue) {
        // Intercambiar las cartas
        let aux = cards[j];
        cards[j] = cards[j + 1];
        cards[j + 1] = aux;
      }
    }

    
    let listItem = document.createElement('li');
    listItem.classList.add('mb-2'); 
    listItem.style.backgroundColor = 'transparent';
    listItem.innerHTML = `
      <div class="d-flex justify-content-start flex-wrap">
        ${renderCards(cards)}
      </div>
    `; // Mostrar las cartas en fila
    sortingList.appendChild(listItem);
  }
}

function selectSort(cards) {
  console.log('Sorting cards with Selection Sort');

  // Limpiar la lista de pasos antes de comenzar
  let sortingList = document.querySelector('#sortingListSelect');
  sortingList.innerHTML = '';

  let n = cards.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Encontrar el índice del valor mínimo en el resto del array
    for (let j = i + 1; j < n; j++) {
      if (cards[j].cardValue < cards[minIndex].cardValue) {
        minIndex = j;
      }
    }

    // Intercambiar el valor mínimo con el valor actual
    if (minIndex !== i) {
      let aux = cards[i];
      cards[i] = cards[minIndex];
      cards[minIndex] = aux;
    }

    // Crear un <li> con el estado actual del array
    let listItem = document.createElement('li');
    listItem.classList.add('mb-2');
    listItem.style.backgroundColor = 'transparent';
    listItem.innerHTML = `
      <div class="d-flex justify-content-start flex-wrap">
        ${renderCards(cards)}
      </div>
    `; // Mostrar las cartas en fila
    sortingList.appendChild(listItem);
  }
}

// Función para renderizar el estado del array como HTML
function renderCards(cards) {
  return cards.map(card => {
      let cardValue = card.cardValue;
      let suitValue = card.suitValue;

      if (cardValue === 0) cardValue = 'A';
      if (cardValue === 11) cardValue = 'J';
      if (cardValue === 12) cardValue = 'Q';
      if (cardValue === 13) cardValue = 'K';

      return `
        <div class="card text-center mx-1 ${(suitValue === '♥' || suitValue === '♦') ? 'text-danger' : 'text-dark'}" style="width: 4rem;">
          <span class="top-suit text-start suitValue">${suitValue}</span>
          <h1 class="card-value">${cardValue}</h1>
          <span class="bottom-suit text-end suitValue">${suitValue}</span>
        </div>
      `;
    })
}

//Funcion para limpiar las cartas
function clearCards(cards) {
  
  const cardsContainer = document.querySelector('#cards');
  cardsContainer.innerHTML = ''; 

  const sortingListBubble = document.querySelector('#sortingListBubble');
  sortingListBubble.innerHTML = '';

  
  const sortingListSelect = document.querySelector('#sortingListSelect');
  sortingListSelect.innerHTML = '';

  cards = [];

  console.log(`Cartas eliminadas ${cards.length}`);
  return cards
}