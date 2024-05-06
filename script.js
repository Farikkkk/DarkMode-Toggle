const input = document.querySelector(".input");
input.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
input.addEventListener("click", () => {
  updateBody();
  updateLocalStorage();
});

function updateBody() {
  if (input.checked) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
