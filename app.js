// get submit button
const submitBtn = document.querySelector("#submit-btn");
// get modal screen
const modal = document.querySelector(".modal");
//get card screen
const card = document.querySelector("#card");
//get modal
const choice = document.querySelector("#user-choice");

submitBtn.addEventListener("click", function (e) {
  // hide card
  card.style.display = "none";
  //show modal
  modal.style.display = "block";
  choice.textContent = userChoice;
});

// add eventlistner to input container

const inputContainer = document.querySelector("#container-flex");
let userChoice = "";

inputContainer.addEventListener("click", function (e) {
  return (userChoice = e.target.value);
});
