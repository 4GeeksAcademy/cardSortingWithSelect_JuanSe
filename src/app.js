let values = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let suits = ['♠', '♥', '♦', '♣'];
let cardsAmount = 1;

document.querySelector('#draw').addEventListener('click', generateCards);

function generateCards(cardsAmount) {
  cardsAmount = document.querySelector('#cardsAmount').value;
  console.log(cardsAmount);

  let cards = [];
  for (let i = 0; i < cardsAmount; i++) {

    let cardNumber = Math.floor(Math.random() * values.length);
    let suitNumber = Math.floor(Math.random() * suits.length);

    let suitValue = suits[suitNumber];
    let cardValue = values[cardNumber];

  
    let card = document.createElement('div');
    card.classList.add('card', 'text-center');
    card.innerHTML = `
      <span class="top-suit text-start suitValue">${suitValue}</span>
      <h1 class="card-value" id="cardValue">${cardValue}</h1>
      <span class="bottom-suit text-end suitValue">${suitValue}</span>
    `;
    //document.querySelector('#cards').appendChild(card); Vizualizar el DOM para insertar el elemento correctamente
    console.log('Im reaching here');

    /*
            <div class="card text-center">
          <span class="top-suit text-start suitValue"></span>
          <h1 class="card-value" id="cardValue"></h1>
          <span class="bottom-suit text-end suitValue"></span>
        </div>

     */

  }
}




window.onload = function () {
  console.log("Random Card Generator")

  let cardNumber = Math.floor(Math.random() * values.length);
  let suitNumber = Math.floor(Math.random() * suits.length);

  let suitValue = suits[suitNumber];
  let cardValue = values[cardNumber];

  if (suitValue == '♥' || suitValue == '♦') {
    let cardValueColor = document.getElementById("cardValue");
    cardValueColor.classList.add("text-danger");
  }

  let cardValueElement = document.getElementById("cardValue");
  cardValueElement.innerHTML = cardValue;
  cardValueElement.classList.add((suitValue === '♥' || suitValue === '♦') ? 'text-danger' : 'text-dark');

  let suitElements = document.querySelectorAll(".suitValue");
  suitElements.forEach(el => {
    el.innerHTML = suitValue;
    el.classList.add((suitValue === '♥' || suitValue === '♦') ? 'text-danger' : 'text-dark');
  });

}

