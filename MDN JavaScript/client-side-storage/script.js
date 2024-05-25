// needed Constants
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

// Stop the form from submitting when a button is clicked
form.addEventListener("submit", (e) => e.preventDefault());

// submitBtn.addEventListener("click", () => {
//   const name = nameInput.value;
//   localStorage.setItem("name", name);
//   h1.textContent = `Welcome ${name}`;
//   personalGreeting.textContent = `${name} Welcome to our website`;
// });
// forgetBtn.addEventListener("click", () => {
//   localStorage.removeItem("name");
//   h1.textContent = "welcome undefined";
//   personalGreeting.textContent = "Welcome to our website";
//   const newName = localStorage.getItem("name");
//   console.log(newName);
// });

// run function when the "Say Hello " button is clicked
submitBtn.addEventListener("click", () => {
  // store the entered name in web storage
  localStorage.setItem("name", nameInput.value);
  // run nameDisplayCheck() to stort out displaying the resonalized greetings and updating the form display
  nameDisplayCheck();
});

// run function when the "Forget" button is clicked
forgetBtn.addEventListener("click", () => {
  // Remove the stored name from web storage
  localStorage.removeItem("name");
  //   run nameDisplayCheck() to sort displaying the generic greeting again and updating the form display
  nameDisplayCheck();
});

// define nameDisplayCheck function
function nameDisplayCheck() {
  // check whether the name data item is stored in web stoarge
  if (localStorage.getItem("name")) {
    const name = localStorage.getItem("name");
    h1.textContent = `Welcome ${name}`;
    personalGreeting.textContent = `Welcome to our website , ${name}! We hope you have fun while you are here.`;
    rememberDiv.style.display = "none";
    forgetDiv.style.display = "block";
  } else {
    h1.textContent = "Welcome to our website";
    personalGreeting.textContent =
      "Welcome to our website. We hope you have fun while you are here.";

    rememberDiv.style.display = "block";
    forgetDiv.style.display = "none";
  }
}
nameDisplayCheck();
