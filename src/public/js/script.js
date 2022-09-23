console.log("js works");

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.add("hide");
});

// const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
// const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", () => {
  signUpForm.classList.remove("hide");
});
