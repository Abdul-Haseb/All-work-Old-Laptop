const FetchingHeroesData = () => {
  let heroesData;
  const url =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      heroesData = data;
      console.log(heroesData);
      populateHeader(heroesData);
      populateHeroes(heroesData);
    })
    .catch((error) => console.error(`Error Fetching Data: ${error}`));

  function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = `${obj.squadName}`;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `HomeTown ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;

    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");

      myH2.textContent = hero.name;
      myPara1.textContent = `Secret Identity ${hero.secretIdentity}`;
      myPara2.textContent = `Age : ${hero.age}`;
      myPara3.textContent = `Superpowers`;

      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItems = document.createElement("li");
        listItems.textContent = power;
        myList.appendChild(listItems);
      }
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }
};

const section = document.querySelector("section");

const populateKitten = (arr) => {
  arr.forEach((kitten) => {
    const myH1 = document.createElement("h1");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");
    const kittenName = kitten.name;
    const kittenBreed = kitten.breed;
    const kittenColor = kitten.color;
    const kittens = kitten.kittens;

    for (const childrens of kittens) {
      const li = document.createElement("li");
      li.textContent = `
      Name: ${childrens.name}
       Gender: ${childrens.gender}`;
      myList.appendChild(li);
    }

    myH1.textContent = `Name :: ${kittenName}`;
    myPara1.textContent = `Breed: ${kittenBreed}`;
    myPara2.textContent = `Color: ${kittenColor}`;
    myPara3.textContent = "Childrens";

    section.appendChild(myH1);
    section.appendChild(myPara1);
    section.appendChild(myPara2);
    section.appendChild(myPara3);
    section.appendChild(myList);
  });
};
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

let kittenInfo;
fetch(requestURL)
  .then((response) => response.json())
  .then((data) => {
    kittenInfo = data;
    // console.log(kittenInfo[0]);
    populateKitten(kittenInfo);
  });
