const button = document.getElementById("btn");
const para = document.getElementById("para");
const buttonStop = document.getElementById("stop");
const body = document.body;
const bgChanger = () => {
  const randomNum = (num) => {
    const result = Math.floor(Math.random() * (num + 1));
    console.log(result);
    return result;
  };
  const colors = (textColor, bgColor, text) => {
    para.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
    para.textContent = text;
  };
  const arr = ["Ali", "Jamal", "Jalil", "Khalid"];

  const randomName = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };
  let intervalId;
  button.addEventListener("click", () => {
    intervalId = setInterval(() => {
      const randomColor = `rgba(${randomNum(100)}, ${randomNum(
        100
      )}, ${randomNum(1000)})`;
      const randomBgColor = `rgba(${randomNum(250)}, ${randomNum(
        250
      )}, ${randomNum(250)})`;
      colors(randomColor, randomBgColor, `i am ${randomName(arr)}`);
    }, 1000);
  });
  buttonStop.addEventListener("click", () => {
    clearInterval(intervalId);
    colors("white", "#414141", "Stopped");
  });
};

const formValidation = () => {
  const random = (num) => {
    const random = Math.floor(Math.random() * (num + 1));
    console.log(random);
    return random;
  };

  const bgChange = (e) => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = randomColor;
    console.log(e.target);
  };

  button.addEventListener("click", bgChange);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  const paragraph = document.createElement("p");
  body.appendChild(paragraph);
  body.appendChild(input);

  input.addEventListener("keydown", (e) => {
    console.log(e.key);
    paragraph.textContent = `You pressed
        ${e.target.value}
        `;
  });
  const form = document.getElementById("form");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const submit = document.getElementById("submit");
  const demo = document.getElementById("demo");

  const submitHandler = (e) => {
    e.preventDefault();
    if (fname.value === "") {
      demo.textContent = "Please Fill out Your First Name";
    } else if (lname.value === "") {
      demo.textContent = "Please fill out your last name";
    } else {
      demo.textContent = "Successfully Submitted";
    }
    form.addEventListener("submit", submitHandler);
  };
};

// const handleClick = (e) => {
//   output.textContent = `You clicked on a ${e.currentTarget.tagName} element\n`;
// };
// parent.addEventListener("click", handleClick);

const bubbling = () => {
  const parent = document.getElementById("container");
  const output = document.getElementById("output");
  const btn = document.getElementById("btn");
  const handleClick = (e) => {
    output.textContent += `You click on a ${e.currentTarget.tagName} element \n`;
  };
  body.addEventListener("click", handleClick);
  parent.addEventListener("click", handleClick);
  btn.addEventListener("click", handleClick);
};

const propagation = () => {
  const btn = document.getElementById("display");
  const divElem = document.getElementById("parent");
  const video = document.querySelector("video");

  btn.addEventListener("click", () => divElem.classList.remove("hidden"));
  video.addEventListener("click", (e) => {
    e.stopPropagation();
    video.play();
  });
  divElem.addEventListener("click", () => divElem.classList.add("hidden"));
};

const differTileColors = () => {
  const container = document.getElementById("container");

  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  };
  const tilColor = () => {
    const random = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(
      255
    )})`;

    return random;
  };
  container.addEventListener("click", (e) => {
    e.target.style.backgroundColor = tilColor();
  });
};
const machine = document.getElementById("machine");

machine.addEventListener("click", (e) => {
  if (machine.textContent === "Machine is off") {
    console.log(e.target.value);
    e.target.textContent = "Machine is on";
  } else {
    e.target.textContent = "Machine is off";
  }
});
