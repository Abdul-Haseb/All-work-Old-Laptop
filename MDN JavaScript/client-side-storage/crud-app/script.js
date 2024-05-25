const form = document.querySelector("form");
const submitBtn = document.getElementById("Submit");
const updateBtn = document.getElementById("update");

submitBtn.addEventListener("click", (e) => {
  let formData = {
    name: form[0].value,
    email: form[1].value,
    phone: form[2].value,
    address: form[3].value,
  };
  e.preventDefault();
  localStorage.setItem("formData", JSON.stringify(formData));
  const data = JSON.parse(localStorage.getItem("formData"));
  console.log(data);
});
