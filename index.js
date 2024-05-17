const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

const del = document.getElementById("delete");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "RESET") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "Del") {
      deleteResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function deleteResult() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
  console.log(inputFieldEl.value);
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
