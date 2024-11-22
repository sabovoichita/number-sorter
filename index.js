console.log("Welcome!😊");
const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  let inputValues = [...document.getElementsByClassName("values-dropdown")].map(
    (dropdown) => Number(dropdown.value)
  );

  updateUI(inputValues);
  //   console.log(inputValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {}
};

sortButton.addEventListener("click", sortInputArray);
