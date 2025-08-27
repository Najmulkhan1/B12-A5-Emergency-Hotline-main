// innerText function
function innerTxt(id) {
  const innertext = document.getElementById(id).innerText;

  return innertext;
}

// select all elements with class "heard-click", "copy-btn"
const hardClick = document.getElementsByClassName("heard-click");
const copyBtn = document.getElementsByClassName("copy-btn");
const callBtn = document.getElementsByClassName('call-btn')

// loop

for (let click of hardClick) {
  click.addEventListener("click", function () {
    // const hard = document.getElementById('current-hart').innerText
    const hard = innerTxt("current-hart");
    let hardConverted = parseInt(hard);

    hardConverted++;

    document.getElementById("current-hart").innerText = hardConverted;
  });
}

for (let click of callBtn) {
  click.addEventListener('click', function() {

    const currentCoin = document.getElementById('current-coin').innerText
    const currentCoinConverted = parseInt(currentCoin)

    const mainusCoin = currentCoinConverted - 20

    if(mainusCoin < 20){
        alert("No coin available")
        return
    }

    document.getElementById('current-coin').innerText = mainusCoin

    const now = new Date();
    const Nowtime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });



    const historyParent = document.getElementById('history-parent');

    
    const card = click.closest('.card');  
    const cardTitleText = card.querySelector('.card-title').innerText; 
    const cardNumberText = card.querySelector('.card-num').innerText

    
    const newCard = document.createElement('div');
    newCard.className = 'card bg-gray-100 card-sm shadow-sm mb-2';

   
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body flex flex-row justify-between items-center';

    const leftDiv = document.createElement('div');
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.innerText = cardTitleText;
    const cardNumber = document.createElement('h3');
    cardNumber.innerText = cardNumberText;

    leftDiv.appendChild(cardTitle);
    leftDiv.appendChild(cardNumber);

    const dateEl = document.createElement('h4');
    dateEl.innerText = Nowtime;

    cardBody.appendChild(leftDiv);
    cardBody.appendChild(dateEl);

    newCard.appendChild(cardBody);

    historyParent.appendChild(newCard);

    alert("Calling: " + cardTitleText + " | " + cardNumber.innerText);
  });
}

// history clear

document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('history-parent').innerText = ' '
})


