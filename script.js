let name = document.getElementById("n");
let last = document.getElementById("l");
let num = document.getElementById("p");
let email = document.getElementById("e");
let btn = document.getElementById("b");

btn.addEventListener("click", () => {
    alert(name.value  +  last.value +  num.value  +  email.value + btn.value );
});