let mainDiv = document.getElementById("mainDiv");
let input = document.getElementById("input");
let themeButton = document.getElementById("themeButton");
let sentencesNum = document.getElementById("sentenceNum");
let wordsNum = document.getElementById("wordNum");
let lettersNum = document.getElementById("letterNum");

function countSentences(str) {
  let count = 0;
  let arr = str.split(" ");
  let lastChar = arr[arr.length - 1].slice(-1);
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i].slice(-1);
    if (
      (current === "!" || current === "?" || current === ".") &&
      arr[i + 1].charAt(0) === arr[i + 1].charAt(0).toUpperCase()
    ) {
      count++;
    }
  }
  if (lastChar === "." || lastChar === "!" || lastChar === "?") {
    count++;
  }
  return count;
}

function countWords(str) {
  let arr = str.split(" ");
  return arr.filter((word) => {
    return word.toUpperCase() !== word.toLowerCase();
  }).length;
}

function countLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() !== str[i].toLowerCase()) {
      count++;
    }
  }
  return count;
}

input.addEventListener("input", () => {
  sentencesNum.innerText = countSentences(input.value);
  wordsNum.innerText = countWords(input.value);
  lettersNum.innerText = countLetters(input.value);
});

let prev = 0;
let curr = 0;
themeButton.addEventListener("click", () => {
  function randomNum() {
    while (prev === curr) {
      curr = Math.floor(Math.random() * 5);
    }
    prev = curr;
    return prev;
  }
  switch (randomNum()) {
    case 0:
      mainDiv.classList = "sagebrushMainDivMainDiv";
      break;
    case 1:
      mainDiv.classList = "blueMainDiv";
      break;
    case 2:
      mainDiv.classList = "blackMainDiv";
      break;
    case 3:
      mainDiv.classList = "yellowMainDiv";
      break;
    case 4:
      mainDiv.classList = "ShadeBlueMainDiv";
      break;
  }
});