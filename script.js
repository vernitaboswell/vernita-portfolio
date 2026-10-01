const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {
    welcomeMessage.textContent = "Thanks for visiting my portfolio!";
});