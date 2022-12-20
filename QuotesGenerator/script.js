let button = document.querySelector(".btn");
button.addEventListener("click", () => quoteGenerator());
let div = document.createElement("div");

async function quoteGenerator() {
  try {
    let response = await fetch("https://thatsthespir.it/api");
    let quote = await response.json();
    let divMid = document.querySelector(".divMid");
    div.classList = "divQuote";
    divMid.appendChild(div);
    div.innerText = quote.quote;
  } catch (error) {
    window.alert(error);
  }
}
