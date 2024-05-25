const nameArray = ["Ali", "Jamal", "Jalil", "Tabish", "Tayab"];

for (let name = 0; name < nameArray.length; name++) {
  const arrName = nameArray[name];
  console.log(`${arrName} Is presnt in our list`);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const arr = ["ABC", "DEF", "GHI", "JKL"];
const str = "Hello World";

for (const arrElem of arr) {
  console.log(arrElem);
}
for (const string of str) {
  console.log(string);
  if (string === " ") {
    console.log("White space");
  }
  continue;
}
const mapp = new Map();
mapp.set("Name", "Abdul Haseeb");
mapp.set("Age", 26);
mapp.set("Profession", "Web Developer");
console.log(mapp);

const myObj = {
  Name: "Ali",
  Age: "29",
  Profession: "Software Enginer",
};

for (const [_, value] of mapp) {
  console.log(value);
}
for (const [key, value] of mapp) {
  console.log(`This is The key ${key}, This is the value ${value}`);
}

for (const key in myObj) {
  console.log(`Object key "${key}", Object value "${myObj[key]}"`);
}

for (const nameKey in nameArray) {
  console.log(`This is The elements in Name array ${nameArray[nameKey]}`);
}

const myArrObj = [
  {
    Name: "Ali",
    professoion: "SoftWare Eng",
  },
  {
    Name: "XYZ",
    Profession: "Web Developer",
  },
  {
    Name: "ABC",
    Profession: "Alphabet",
  },
];
myArrObj.forEach((item) => {
  console.log(item.Name);
});

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const newArr = cats.map((cat) => cat.toUpperCase());

console.log(newArr);

const catWithL = cats.filter((cat) => cat.startsWith("L"));
console.log(catWithL);
