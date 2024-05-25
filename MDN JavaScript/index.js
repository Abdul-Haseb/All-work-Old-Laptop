// let select = document.querySelector("select");
// let para = document.querySelector("p");

const ifElseFun = () => {
  const weatherChange = () => {
    let choice = select.value;

    switch (choice) {
      case "rainy":
        {
          para.textContent =
            "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
        }
        break;
      case "sunny": {
        para.textContent =
          "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      }
    }
    if (choice === "snowing") {
      para.textContent =
        "The snow is coming down - it is freezing! Best ot stay in with a cup of hot chocolate, or go build a snowman.";
    } else if (choice === "overcast") {
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    } else {
      para.textContent = "";
    }
  };
  select.addEventListener("change", weatherChange);
};
///////////////////////////////////////////////////////
const cheeseFun = () => {
  let cheese = "Cheddar";
  if (cheese) {
    console.log("Yay! Cheese available for making cheese on toast");
  } else {
    console.log("No cheese on toast for you today");
  }
};
console.log(cheeseFun());
///////////////////////////////////////////////////////////

const nestedIfElse = () => {
  let choice = "sunny";
  let temperature = 45;

  const nestedIfElse = () => {
    if (choice === "sunny") {
      if (temperature < 80)
        console.log(
          `Its ${temperature} degree outside - nice and sunny. Let's go out to the beach;`
        );
    } else {
      console.log(`its ${temperature} outside stay at home`);
    }
  };
};

let weather = "rainy";
let temperature = 45;

const andOperator = () => {
  if (weather === "rainy" && temperature < 40) {
    console.log(`Its ${temperature} outside , lets go to the beach`);
  } else {
    console.log(`its ${temperature} outside Stay at home`);
  }
};

const notOrOperator = () => {
  if (!(weather === "rainy" || temperature < 50)) {
    console.log("True statement");
  } else {
    console.log("False Statement");
  }
  if (weather === "rainy" || temperature < 50) {
    console.log("True statement");
  } else {
    console.log("False Statement");
  }
};

const switchStat = () => {
  let age = 18;
  let drivingLicence;

  switch (age) {
    case 18:
      console.log("YOu can have Driving licence");
      break;
    case 17:
      console.log("Sorry! You can't have a drivinng licence");
  }
};

const select = document.querySelector("select");
const Body = document.querySelector("body");

const updatColors = (bgColor, textColor) => {
  Body.style.backgroundColor = bgColor;
  Body.style.color = textColor;
};
const changeColors = () => {
  select.value === "black"
    ? updatColors("black", "orange")
    : updatColors("white", "red");
};
select.addEventListener("change", changeColors);
