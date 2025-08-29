// innerText function
function innerTxt(id) {
  const innertext = document.getElementById(id).innerText;

  return innertext;
}

// select all elements with class "heard-click", "copy-btn"
const hardClick = document.getElementsByClassName("heard-click");
const copyBtn = document.getElementsByClassName("copy-btn");
const callBtn = document.getElementsByClassName("call-btn");

// hardClick functionality
for (let click of hardClick) {
  click.addEventListener("click", function () {
    // const hard = document.getElementById('current-hart').innerText
    const hard = innerTxt("current-hart");
    let hardConverted = parseInt(hard);

    hardConverted++;

    document.getElementById("current-hart").innerText = hardConverted;
  });
}

// CallBtn functionality
for (let click of callBtn) {
  click.addEventListener("click", function () {
    const currentCoin = document.getElementById("current-coin").innerText;
    const currentCoinConverted = parseInt(currentCoin);

    const mainusCoin = currentCoinConverted - 20;

    if (mainusCoin < 0) {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }

    document.getElementById("current-coin").innerText = mainusCoin;

    let now = new Date();
    let Nowtime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const historyParent = document.getElementById("history-parent");

    const card = click.closest(".card");
    const cardTitleText = card.querySelector(".card-title").innerText;
    const cardNumberText = card.querySelector(".card-num").innerText;

    const newCard = document.createElement("div");
    newCard.className = "card bg-gray-100 card-sm shadow-sm mb-2";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body flex flex-row justify-between items-center";

    const leftDiv = document.createElement("div");
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.innerText = cardTitleText;
    const cardNumber = document.createElement("h3");
    cardNumber.innerText = cardNumberText;

    leftDiv.appendChild(cardTitle);
    leftDiv.appendChild(cardNumber);

    const dateEl = document.createElement("h4");
    dateEl.innerText = Nowtime;

    cardBody.appendChild(leftDiv);
    cardBody.appendChild(dateEl);

    newCard.appendChild(cardBody);

    historyParent.appendChild(newCard);

    alert("📞 Calling: " + cardTitleText + " | " + cardNumber.innerText);
  });
}

// history clear

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-parent").innerText = " ";
});

// copyBtn functionality
for (let click of copyBtn) {
  click.addEventListener("click", function () {

    const currentCopy = innerTxt('current-copy')
    let currentCopyConverted = parseInt(currentCopy)
    
    currentCopyConverted++

    document.getElementById('current-copy').innerText = currentCopyConverted

    const card = click.closest('.card')
    const cardNumber = card.querySelector('.card-num')
    const cardNumberText = cardNumber.innerText.trim()


    // click.disabled = true
    // const originalLabel = click.innerHTML


    navigator.clipboard.writeText(cardNumberText)

    alert('নাম্বর কপি হয়েছে: ' + cardNumberText)
    // try {
    //     if (navigator.clipboard && window.isSecureContext) {
    //             navigator.clipboard.writeText(cardNumberText)
    //     }else{
    //         console.log('error');
            
    //     }

    // } catch (error) {
    //     console.log("error");
        
    // }
    
    

  });
}
