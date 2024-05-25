const documentFun = () => {
  // const { text } = require("express");

  const myText = "I am a string";
  const newString = myText.replace("string", "Text");
  // console.log(newString);

  const myArray = ["I", "love", "chocolate", "frogs"];

  const madeString = myArray.join();
  console.log(madeString);

  const myFunction = (name) => {
    if (name === "") {
      console.log(`Please Put Your name`);
    }
  };

  // myFunction();

  const defaulfVal = (name = "User") => console.log(`Hello ${name}`);

  defaulfVal("Khalid");

  const textBox = document.getElementById("textbox");
  const showText = document.getElementById("para");

  const key = (event) => {
    showText.textContent += event.key;
  };

  textBox.addEventListener("keydown", key);

  const numArr = [2, 4, 6, 8];

  const doubleNums = numArr.map((num) => num * 2);

  // console.log(doubleNums);

  const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

  const materialsLength = materials.map((item) => item.length);
  console.log(materialsLength);

  const simple = (a) => (a > 15 ? "Greater than 15" : a);
  console.log(simple(10));
  console.log(simple(16));

  const timoutFun = setTimeout(() => {
    console.log("Hello world");
    setTimeout(() => {
      console.log("SetTimout Function");
    }, 2);
  }, 1);

  console.log(timoutFun);

  const obj = {
    num: 100,
  };
  globalThis.num = 24;

  const add = (a, b, c) => this.num + a + b + c;

  console.log(add.call(obj, 1, 2, 3));
  console.log(add.apply(obj, [1, 2, 3]));
  const boundAdd = add.bind(obj);
  console.log(boundAdd);

  const x = 1;

  const a = () => {
    const y = 2;
  };
  const outPut = (value) => {
    const para = document.createElement("p");
    document.body.appendChild(para);
    para.textContent = `Value = ${value}`;
  };
  const b = () => {
    const z = 3;
    outPut(z);
  };
  b();

  const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
  ];

  const chooseName = (names) => {
    const randomName = Math.floor(Math.random() * names.length);
    return names[randomName];
  };
  console.log(chooseName(names));

  const paragraph = document.createElement("p");
  document.body.appendChild(paragraph);
  paragraph.textContent = chooseName(names);

  //   const x = 50;
  const y = 60;
  const width = 100;
  const height = 75;
  const color = "blue";

  // Add your code here
  const createRectangle = (x, y, width, height, color = "red") => {
    console.log(x, y, width, height, color);
  };
  createRectangle(50, 60, 100, 75, "blue");
  const names2 = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
  ];

  //   Random num Generator
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + 1);
  };
  // Name Function
  const chooseName2 = (names) => {
    const randomNum = random(0, names.length - 1);
    return names[randomNum];
  };
  const h1 = document.createElement("h1");
  document.body.appendChild(h1);

  h1.textContent = chooseName2(names2);

  const body = document.body;
  const displayMessage = (msgTxt, textType) => {
    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = msgTxt;
    body.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    body.appendChild(closeBtn);

    closeBtn.addEventListener(
      "click",
      displayMessage("Wow! This is another text")
    );
    displayMessage();
    const openButton = document.createElement("button");
    openButton.textContent = "O";
    body.appendChild(openButton);

    closeBtn.addEventListener("click", () => {
      if (msg.style.display === "none") {
        msg.style.display = "block";
      } else {
        msg.style.display = "none";
      }
    });
  };

  closeBtn.addEventListener("click", () => {
    msg.style.display = "none";
  });
  openButton.addEventListener("click", () => {
    msg.style.display = "block";
  });

  displayMessage();

  const openBtn = document.getElementById("open");
  const closeBtn = document.getElementById("close");
  const text = document.getElementById("text");
  const openCloseBtn = document.getElementById("oc");

  const openClose = (display) => {
    return (text.style.display = display);
  };

  openCloseBtn.addEventListener("click", () => {
    if (text.style.display === "none") {
      openClose("block");
    } else {
      openClose("none");
    }
    text.style.display === "none" ? openClose("block") : openClose("none");
  });

  closeBtn.addEventListener("click", () => openClose("none"));
  openBtn.addEventListener("click", () => openClose("block"));

  const displaName = (msgTxt, msgType) => {
    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = msgTxt;
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.addEventListener("click", () =>
      panel.parentNode.removeChild(panel)
    );
    if (msgType === "warning") {
      panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
      panel.style.backgroundColor = "green";
    } else {
      panel.style.color = "blue";
    }
  };
  const closeBtn2 = document.createElement("button");
  closeBtn2.textContent = "x";
  body.appendChild(closeBtn);

  closeBtn2.addEventListener("click", () => {
    displaName("Hello To all");
  });
  const div = document.getElementsByClassName("Box");
  const p = document.getElementById("p");
  const xbtn = document.getElementById("x");

  xbtn.addEventListener("click", () => {
    p.style.display = "none";
    div[0].remove();
  });
  xbtn.addEventListener("click", () => {
    div[0].remove();
  });
  const navBtn = document.getElementById("navBtn");
  const navBox = document.getElementById("navBox");

  const showMenu = (display) => {
    navBox.style.display = display;
  };

  navBtn.addEventListener("click", () => {
    if (navBox.style.display === "block") {
      showMenu("none");
    } else {
      showMenu("block");
    }
  });
};

const textBox = document.getElementById("textbox");
const myText = "The weather is cold";
const newString = myText.replace("cold", "Hot");
console.log(myText);
console.log(newString);
const body = document.body;
const squared = (num) => {
  return num * num;
};
const cubed = (num) => {
  return num * num * num;
};
const factorial = (num) => {
  if (num < 0) return undefined;
  if (num === 0) return 0;
  let x = num - 1;
  while (x > 1) {
    num = num * x;
    x--;
  }
  return num;
};
const para = document.createElement("p");
body.appendChild(para);
textBox.addEventListener("change", () => {
  const num = parseFloat(textBox.value);

  if (isNaN(num)) {
    para.textContent = "You must have to write a number";
  } else {
    para.textContent = `${num} squared is ${squared(num)}`;
    console.log(squared(num));
    para.textContent = `${num} cubed is ${cubed(num)}`;
    console.log(cubed(num));
    para.textContent = `${num} cubed is ${factorial(num)}`;
  }
});
