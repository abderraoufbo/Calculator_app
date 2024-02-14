function allKeysOnHover() {
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "var(--white)";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "var(--key-bg)";
    });
  });
}

function keysDelResEqualsOnHover() {
  buttons[3].addEventListener("mouseover", () => {
    buttons[3].style.backgroundColor = "var(--key-delete-equals-bg)";
    buttons[3].style.opacity = "0.5";
  });
  buttons[16].addEventListener("mouseover", () => {
    buttons[16].style.backgroundColor = "var(--key-toggle-reset-bg)";
    buttons[16].style.opacity = "0.5";
  });
  buttons[17].addEventListener("mouseover", () => {
    buttons[17].style.backgroundColor = "var(--key-delete-equals-bg)";
    buttons[17].style.opacity = "0.5";
  });

  buttons[3].addEventListener("mouseout", () => {
    buttons[3].style.backgroundColor = "var(--key-delete-equals-bg)";
    buttons[3].style.opacity = "1";
  });
  buttons[16].addEventListener("mouseout", () => {
    buttons[16].style.backgroundColor = "var(--key-toggle-reset-bg)";
    buttons[16].style.opacity = "1";
  });
  buttons[17].addEventListener("mouseout", () => {
    buttons[17].style.backgroundColor = "var(--key-delete-equals-bg)";
    buttons[17].style.opacity = "1";
  });
}

function textColor() {
  logo.style.color = "var(--text-primary)";
  title.style.color = "var(--text-primary)";
  theme[0].style.color = "var(--text-primary)";
  theme[1].style.color = "var(--text-primary)";
  theme[2].style.color = "var(--text-primary)";
  screen.style.color = "var(--text-primary)";
}

themePosition[0].addEventListener("click", () => {
  themeStyle.href = "style.css";

  logo.style.color = "var(--white)";
  title.style.color = "var(--white)";
  theme[0].style.color = "var(--white)";
  theme[1].style.color = "var(--white)";
  theme[2].style.color = "var(--white)";
  screen.style.color = "var(--white)";

  allKeysOnHover();
  keysDelResEqualsOnHover();

  toggler.style.transform = "translateX(0%)";
  toggler.style.transition = "0.4s ease-in-out";
});

themePosition[1].addEventListener("click", () => {
  themeStyle.href = "theme2.css";

  allKeysOnHover();
  textColor();
  keysDelResEqualsOnHover();

  toggler.style.transform = "translateX(172%)";
  toggler.style.transition = "0.4s ease-in-out";
});

themePosition[2].addEventListener("click", () => {
  themeStyle.href = "theme3.css";

  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "var(--key-delete-equals-shadow)";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "var(--key-bg)";
    });
  });

  textColor();
  keysDelResEqualsOnHover();

  toggler.style.transform = "translateX(354%)";
  toggler.style.transition = "0.4s ease-in-out";
});

let currentTheme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("blue");
} else {
  setTheme(currentTheme);
}

let themeDots = document.getElementsByClassName("theme-position");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked: ", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "blue") {
    document.getElementById("theme-style").href = "style.css";
    toggler.style.transform = "translateX(0%)";
  }
  if (mode == "light") {
    document.getElementById("theme-style").href = "theme2.css";
    toggler.style.transform = "translateX(172%)";
    textColor()
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "theme3.css";
    toggler.style.transform = "translateX(354%)";
    textColor()
  }

  localStorage.setItem("theme", mode);
}
