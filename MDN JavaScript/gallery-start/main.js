// SELECTIONG ALL THE HTML ELEMENTS
const displayImage = document.querySelector(".displayed-img");
const overLay = document.querySelector(".overlay");
const thumbBar = document.querySelector(".thumb-bar");
const Button = document.querySelector("button");

// Creating Image Array ;
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

// Creating alt Text of every Image
const altText = {
  "pic1.jpg": "Picture 1",
  "pic2.jpg": "Picture 2",
  "pic3.jpg": "Picture 3",
  "pic4.jpg": "Picture 4",
  "pic5.jpg": "Picture 5",
};

// DISPLAYING THE IMAGE TO THE DISPLAY DIV
const setDisplayImage = (displayedImage) => {
  displayImage.setAttribute("src", `images/${displayedImage}`);
  displayImage.setAttribute("alt", altText[displayedImage]);
  Button.setAttribute("class", "light");
  overLay.style.backgroundColor = "rgba(0,0,0,0)";
};

//ADDING DARKEN / LIGHTEN ON BUTTON
const setDarkMode = () => {
  if (Button.className === "dark") {
    Button.setAttribute("class", "light");
    Button.textContent = "Lighten";
    overLay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    Button.setAttribute("class", "dark");
    Button.textContent = "Darken";
    overLay.style.backgroundColor = "rgba(0,0,0,0)";
  }
};

// CREATING THE IMAGES THUM-BaAR
images.forEach((img) => {
  // CREATING AN IMAGE TAG
  const image = document.createElement("img");

  // SETTING THE ATTRIBUTTES TO THE IMG TAG
  image.setAttribute("src", `images/${img}`);
  image.setAttribute("alt", altText[img]);
  thumbBar.appendChild(image);

  //   CLICK EVENT TO DISPLAY IMAGE IN THE DISPLAY-IMG DIV
  image.addEventListener("click", () => {
    setDisplayImage(img);
    setDarkMode();
  });
});

Button.addEventListener("click", () => {
  setDarkMode();
});
