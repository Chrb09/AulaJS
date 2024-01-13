const themeToggle = document.querySelector(".button-theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark__mode");
});
function insert(num) {
  let numero = document.getElementById("result").innerHTML;
  if (numero == 0) {
    document.getElementById("result").innerHTML = num;
  } else {
    document.getElementById("result").innerHTML = numero + num;
  }
}
function clean() {
  document.getElementById("result").innerHTML = "0";
}
function deletar() {
  let numero = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = numero.substring(
    0,
    numero.length - 1
  );
}
function calcular() {
  let numero = document.getElementById("result").innerHTML;
  if (numero) {
    document.getElementById("result").innerHTML = eval(numero);
  }
}
