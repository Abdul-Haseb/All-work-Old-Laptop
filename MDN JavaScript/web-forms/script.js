const showData = document.querySelector("#show-data");
const userName = document.getElementById("name");
const userMessage = document.getElementById("msg");
const userEmail = document.getElementById("mail");
const submitBtn = document.getElementById("btn");
const ul = document.querySelector("ul");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     userName.value !== "" &&
//     userEmail.value !== "" &&
//     userMessage.value !== ""
//   ) {
//     console.log(userName.value);
//     console.log(userEmail.value);
//     console.log(userMessage.value);
//     const li = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");
//     li.textContent = userName.value;
//     li2.textContent = userEmail.value;
//     li3.textContent = userMessage.value;
//     ul.appendChild(li);
//     ul.appendChild(li2);
//     ul.appendChild(li3);
//   } else {
//     alert("Please Fill out the field");
//   }
// });

const createAndAppendChild = (textContent) => {
  const li = document.createElement("li");
  li.textContent = textContent;
  ul.appendChild(li);
};

const showingTheFormData = (e) => {
  e.preventDefault();
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userMessageValue = userMessage.value.trim();
  localStorage.setItem(
    "formData",
    JSON.stringify({
      name: userNameValue,
      email: userEmailValue,
      message: userMessageValue,
    })
  );
  if (
    userNameValue !== "" &&
    userEmailValue !== "" &&
    userMessageValue !== ""
  ) {
    console.log(`
    UserName ${userNameValue}
    User Email: ${userEmailValue}
    userMessage ${userMessageValue}`);
    createAndAppendChild(userNameValue);
    createAndAppendChild(userEmailValue);
    createAndAppendChild(userMessageValue);
    localStorage.getItem(JSON.parse(FormData));
  } else {
    alert("Please Fill Out The form Correctly");
  }
};
submitBtn.addEventListener("click", showingTheFormData);

const age = document.getElementById("age");
const checkAgeBtn = document.getElementById("btn");
const ageForm = document.getElementById("ageForm");

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ageValue = parseInt(age.value);
  if (isNaN(ageValue)) {
    console.log("Please Enter a Valid Age");
  } else if (ageValue <= 18) {
    console.log(
      `Sorry Sir Your age must be 18, You have to wait at least ${
        18 - ageValue
      }years`
    );
  } else if (ageValue >= 45) {
    console.log(
      `Sorry Sir maximun age is 45, You are ${
        ageValue - 45
      }year older then our maximum age`
    );
  } else {
    const para = document.createElement("p");
    para.textContent = `Congratulations! You are eligible, and welcome to our community. Your age is ${ageValue}.`;
    document.body.appendChild(para);
  }
});

const price = document.getElementById("price");
const outPut = document.querySelector(".price-output");

outPut.textContent = price.value;
price.addEventListener("input", () => {
  outPut.textContent = price.value;
});
