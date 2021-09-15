const devInput = document.querySelector(".developer-input");
const sweetInput = document.querySelector(".sweet-input");
const startInput = document.querySelector(".start-input");
const findDeveloperSweet = document.querySelector(".find-developer-sweet");

const tableBody = document.querySelector(".table-row");

const warnTheDeveloper = (d, s, x) => {
  let DevSweetModulus = s % d;
  let warnedDeveloper;

  if (d <= s && d > x) {
    warnedDeveloper = DevSweetModulus + (x - 1);
  }

  if (DevSweetModulus + x > d) {
    let num1 = d - s;
    let num2 = d - x;
    if (num1 > s) {
      warnedDeveloper = num1 % s;
    }
    if (num2 < s) {
      warnedDeveloper = s % num2;
    }
  } else {
    let num3 = DevSweetModulus + (x - 1);
    if (num3 > d) {
      warnedDeveloper = num3 - d + 1;
    } else {
      warnedDeveloper = DevSweetModulus + (x - 1);
    }
  }

  let tableTRs = document.querySelectorAll("tr");

  if (tableTRs.length > 0) {
    tableTRs.forEach(item => {
      item.classList.remove("active-row");
    });
  }

  let newTableRow = `
    <tr class="active-row">
      <td>${d}</td>
      <td>${s}</td>
      <td>${x}</td>
      <td>${warnedDeveloper}</td>
    </tr>`;

  tableBody.innerHTML += newTableRow;
  devInput.value = "";
  sweetInput.value = "";
  startInput.value = "";
  devInput.focus();

  devInput.style.border = `2px solid #009879`;
  sweetInput.style.border = `2px solid #009879`;
  startInput.style.border = `2px solid #009879`;

  setTimeout(() => {
    devInput.style.border = `none`;
    sweetInput.style.border = `none`;
    startInput.style.border = `none`;
  }, 2000);
};

sweetInput.addEventListener("focus", () => {
  if (devInput.value == "") {
    devInput.focus();
    devInput.style.border = `2px solid #009879`;
    return;
  }
});

startInput.addEventListener("focus", () => {
  if (devInput.value == "") {
    devInput.focus();
    devInput.style.border = `2px solid #009879`;
    return;
  }
  if (sweetInput.value == "") {
    sweetInput.focus();
    sweetInput.style.border = `2px solid #009879`;
    return;
  }
});

findDeveloperSweet.addEventListener("click", () => {
  let devInputValue = devInput.value;
  let sweetInputValue = sweetInput.value;
  let startInputValue = startInput.value;

  if (Number(startInputValue) >= Number(devInputValue)) {
    startInput.value = "";
    alert("Starting number must be less than number of developers");
    startInput.reset;
    startInput.focus();
    startInput.style.border = `2px solid red`;
    return;
  }

  let numberRegex = /[a-z]/;
  let specialCharRegex = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  let devTest = numberRegex.test(devInputValue);
  let devTestSpecial = specialCharRegex.test(devInputValue);
  let sweetTest = numberRegex.test(sweetInputValue);
  let sweetTestSpecial = specialCharRegex.test(sweetInputValue);
  let startTest = numberRegex.test(startInputValue);
  let startTestSpecial = specialCharRegex.test(startInputValue);

  if (
    devTest ||
    devTestSpecial ||
    devInputValue == 0 ||
    devInputValue == parseFloat(devInputValue)
  ) {
    devInput.value = "";
    alert(
      "Your entry must be whole numbers. No zero value or decimals allowed."
    );
    devInput.reset;
    devInput.focus();
    devInput.style.border = `2px solid red`;
    return;
  }

  if (
    sweetTest ||
    sweetTestSpecial ||
    sweetInputValue == 0 ||
    sweetInputValue == parseFloat(sweetInputValue)
  ) {
    sweetInput.value = "";
    alert(
      "Your entry must be whole numbers. No zero value or decimals allowed."
    );
    sweetInput.reset;
    sweetInput.focus();
    sweetInput.style.border = `2px solid red`;
    return;
  }

  if (
    startTest ||
    startTestSpecial ||
    startInputValue == 0 ||
    startInputValue == parseFloat(startInputValue)
  ) {
    startInput.value = "";
    alert(
      "Your entry must be whole numbers. No zero value or decimals allowed."
    );
    startInput.reset;
    startInput.focus();
    startInput.style.border = `2px solid red`;
    return;
  }

  if (!devTest && !sweetTest && !startTest) {
    warnTheDeveloper(devInputValue, sweetInputValue, startInputValue);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  devInput.focus();
});
