let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const resultTextEl = document.getElementById("text");
const resultSymbolEl = document.getElementById("symbol");

const setColorScheme = e => {
  if (e.matches) {
    // Dark
    resultTextEl.innerText = "You have darkmode enabled, very good."
    resultSymbolEl.innerText = "👍"
  } else {
    // Light
    resultTextEl.innerText = "DarkMode is off, very naughty!";
    resultSymbolEl.innerText = "👎"
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);