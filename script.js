document.getElementById("button").addEventListener("click", testPromise);

function testPromise() {
  fetch("test.json")
    .then((response) => response.json())
    .then((json) => {
      let list = document.createElement("ul");
      document.body.appendChild(list);
      for (let elem of json) {
        let elemList = document.createElement("li");
        elemList.innerText =
          elem.username + " , " + elem.location + " , " + elem.profession;
        list.appendChild(elemList);
      }
    });
}
