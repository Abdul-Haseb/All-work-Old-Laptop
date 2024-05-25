const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

const updateDisplay = (verse) => {
  verse = verse.replace(" ", "").toLowerCase();
  const url = `text/${verse}.txt`;
  //   console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      poemDisplay.textContent = text;
    })
    .catch((error) => {
      poemDisplay.textContent = `Could not fetch value: ${error}`;
    });
};
verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  console.log(verse);
  updateDisplay(verse);
});
