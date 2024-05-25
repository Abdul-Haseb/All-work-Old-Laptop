const select = document.getElementById("select");
const body = document.querySelector("body");
body.style.padding = "20px";
const changeColor = (bgColor, textColor) => {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
};
select.addEventListener("change", () => {
  const color = select.value;
  switch (color) {
    case "Black":
      {
        changeColor("#000", "#F1F1F1");
      }
      Break;
    case "Blue":
      changeColor("blue", "white");

      Break;
    case "Brown":
      changeColor("brown", "white");
      Break;
    case "grey":
      changeColor("grey", "white");
  }
});
