let inputName = document.querySelector(".inputName");
let button = document.querySelector(".btn");
button.addEventListener("click", () => predictAge());
let list = [];

function predictAge() {
  let name = inputName.value;
  console.log(name);
  fetch(`https://api.AGIFY.io?name=` + name)
    .then((response) => response.json())
    .then((agify) => {
      list.push(agify);
      console.log(agify);
      localStorage.setItem(name, JSON.stringify(list));
      const resultDiv = document.createElement("div");
      resultDiv.textContent = agify.age;
      document.body.appendChild(resultDiv);
    });
}
