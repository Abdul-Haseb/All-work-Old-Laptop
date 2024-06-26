const customName = document.getElementById("customname");
const randomStory = document.querySelector(".randomize");
const story = document.querySelector(".story");

//Lets Create Varaiables and arrays for the Story

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const arrayX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const arrayY = ["the soup kitchen", "Disneyland", "the White House"];
const arrayZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

// Lets Create A randomArray Value function

const randomArrayValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const result = () => {
  let newStory = storyText;

  const xItem = randomArrayValue(arrayX);
  const yItem = randomArrayValue(arrayY);
  const zItem = randomArrayValue(arrayZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stone`;
    const temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }
  story.textContent = newStory;
  story.style.visibility = "visible";
};

randomStory.addEventListener("click", result);
