console.log("hello");
// get submit button
const submitBtn = document.querySelector("#submit-btn");
// get modal screen
const modal = document.querySelector(".modal");
//get card screen
const card = document.querySelector("#card");

submitBtn.addEventListener("click", function (e) {
  // hide card
  card.style.display = "none";
  //show modal
  modal.style.display = "block";
});
