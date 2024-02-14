function operatorPressed() {
  operation.style.display = "block";
  value1.innerText = screen.innerText;
  screen.innerText = "";
}

function checkNumber() {
  if (screen.innerText.length > 13) {
    screen.innerText = parseFloat(screen.innerText).toFixed(5);
  }

  if (parseInt(screen.innerText) > 1000000000000) {
    screen.innerText = "Too Big!";
  }
}

function equalSignOnly() {
  value2.innerText = "";
  equalSign.innerText = "";
}

screen.innerText = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    screen.innerText += parseFloat(buttons[i].innerText);
    screen.innerText = parseFloat(screen.innerText);
    if (screen.innerText.length > 13) {
      screen.innerText = buttons[i].innerText;
    }
  });
}

plusBtn.addEventListener("click", () => {
  operatorPressed();
  operator.innerText = "+";

  equalsBtn.addEventListener("click", () => {
    screen.innerText =
      parseFloat(value1.innerText) + parseFloat(value2.innerText);
    checkNumber();
  });
});

minusBtn.addEventListener("click", () => {
  operatorPressed();
  operator.innerText = "-";

  equalsBtn.addEventListener("click", () => {
    screen.innerText =
      parseFloat(value1.innerText) - parseFloat(value2.innerText);
    checkNumber();
  });
});

multiplyBtn.addEventListener("click", () => {
  operatorPressed();
  operator.innerText = "*";

  equalsBtn.addEventListener("click", () => {
    screen.innerText =
      parseFloat(value1.innerText) * parseFloat(value2.innerText);
    checkNumber();
  });
});

divideBtn.addEventListener("click", () => {
  operatorPressed();
  operator.innerText = "/";

  equalsBtn.addEventListener("click", () => {
    screen.innerText =
      parseFloat(value1.innerText) / parseFloat(value2.innerText);
    checkNumber();
  });
});

equalsBtn.addEventListener("click", () => {
  value2.innerText = screen.innerText;
  equalSign.innerText = "=";

  plusBtn.addEventListener("click", equalSignOnly);
  minusBtn.addEventListener("click", equalSignOnly);
  multiplyBtn.addEventListener("click", equalSignOnly);
  divideBtn.addEventListener("click", equalSignOnly);
});

pointBtn.addEventListener("click", () => {
  screen.innerText = parseInt(screen.innerText) + ".";
});

deleteBtn.addEventListener("click", () => {
  screen.innerText = screen.innerText.replace(
    screen.innerText[screen.innerText.length - 1],
    ""
  );
  screen.innerText = parseFloat(screen.innerText);

  if (screen.innerText === "NaN") {
    screen.innerText = 0;
  }
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
