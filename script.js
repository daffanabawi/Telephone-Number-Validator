const btnCheck = document.getElementById("check-btn");
const btnClear = document.getElementById("clear-btn");
const userInput = document.getElementById ("user-input");
const result = document.getElementById("results-div");

const checkNumber = (number) => {
  const regex = /^1?\s*(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  const match = `<p>Valid US number: ${number}</p>`
  const notMatch = `<p>Invalid US number: ${number}</p>`
  return number.match(regex) ? result.innerHTML += match : result.innerHTML += notMatch;
}

const inputNotEmpty = ()=> userInput.value === "" ? alert("Please provide a phone number") : checkNumber(userInput.value);

btnCheck.addEventListener("click", inputNotEmpty)

btnClear.addEventListener("click", () => result.innerHTML ="")