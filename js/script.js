const content = document.querySelector(".contents");
const input = document.querySelector(".text");
let lineNumber = 1;

function create() {
  const valor = input.value;
  const lines = valor.split("\n");
  const pre = document.createElement("pre");
  const code = document.createElement("div");
  const numbers = document.createElement("div");
  numbers.classList.add("num")
  pre.appendChild(code);
  pre.appendChild(numbers);
  content.insertBefore(pre, content.firstChild); // inserir nova linha no topo
  code.textContent = valor;
  input.value = "";

  for (let i = 1; i <= lines.length; i++) {
    const line = document.createElement("span");
    line.textContent = i;
    numbers.appendChild(line); // adicionar nova linha no final
  }
}

input.addEventListener("keydown", (event) => {
  const tecla = event.key;
  if (tecla === "Enter") {
    create();
    lineNumber = 1;
  }
});

document.querySelector(".button").addEventListener("click", () => {
  lineNumber = 1;
  create();
});
