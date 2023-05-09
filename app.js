const advice_num = document.querySelector(".card__number");
const advice_quote = document.getElementById("card__quote");
const dice_btn = document.querySelector(".card__dice");

function generateQuote() {
  fetch("	https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      advice_num.innerHTML = `Advice #${data.slip.id}`;
      advice_quote.innerHTML = ` &#8220 ${data.slip.advice} &#8221;`;
    });
}
generateQuote();

dice_btn.addEventListener("click", generateQuote);
