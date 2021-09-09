const rangeLabel = document.querySelector(".custom-range-slider");
const rangeInput = rangeLabel.children[0];
const thumbWidth = 50;

rangeLabel.insertAdjacentHTML(
  "beforeend",
  `<span class='bubble'>${rangeInput.value}</span>`
);

const rangeBubble = rangeLabel.children[1];

rangeInput.addEventListener("input", e => {
  const { min, max, value } = rangeInput;
  const total = Number(max) - Number(min);
  const percentage = (Number(value) - Number(min)) / total;

  rangeBubble.style.left = `${percentage * 100}%`;
  rangeBubble.textContent = value + "%";
});
