let name = document.getElementById("n");
let last = document.getElementById("l");
let num = document.getElementById("p");
let email = document.getElementById("e");
let btn = document.getElementById("b");
btn.addEventListener("click", () => {
    alert(
        "First Name: " + name.value +
        "\nLast Name: " + last.value +
        "\nPhone Number: " + phone.value +
        "\nEmail ID: " + email.value
    );
});