const massage = document.body.querySelector("#massage");
const message = document.body.querySelector("#message");



const clearText = document.body.querySelector("#clearBtn");
clearText.addEventListener("click", () => {
  massage.textContent = "The Medium is the Massage";
});

const setText = document.body.querySelector("#textBtn");
setText.addEventListener("click", () => {
  message.textContent = "The Medium is the Message";
});



