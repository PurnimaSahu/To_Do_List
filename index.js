const toDoList = document.getElementsByClassName("to-do-list")[0];
const inputE1 = document.querySelector("#input");
const cE1 = document.getElementsByClassName("container")[1];

inputE1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    additem();
  }
});

function additem() {
  var parentE1 = document.createElement("div");
  var childE1 = document.createElement("div");
  var checkiconE1 = document.createElement("i");
  var deleteiconE1 = document.createElement("i");

  parentE1.className = "items";

  parentE1.innerHTML = inputE1.value;
  checkiconE1.className = "fa-regular fa-square-check";
  checkiconE1.style.color = "grey";
  checkiconE1.style.margin = "4px";

  checkiconE1.addEventListener("click", function () {
    checkiconE1.style.color = "green";
  });

  childE1.appendChild(checkiconE1);
  console.log(childE1);

  deleteiconE1.className = "fa-solid fa-trash";
  deleteiconE1.style.color = "grey";
  deleteiconE1.style.margin = "4px";

  deleteiconE1.addEventListener("click", function () {
    parentE1.remove();
  });
  childE1.appendChild(deleteiconE1);
  parentE1.appendChild(childE1);
  console.log(parentE1);
  cE1.appendChild(parentE1);
  inputE1.value = "";
}

// deleteiconE1.className = "fa-solid fa-trash";
// checkiconE1.className = "fa-regular fa-square-check";
// childE1.appendChild("deleteiconE1");
// childE1.appendChild("checkiconE1");
// parentE1.appentChild("childE1");
