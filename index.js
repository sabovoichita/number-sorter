console.log("Welcome!😊");
const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();
  let inputValues = [...document.getElementsByClassName("values-dropdown")].map(
    (dropdown) => Number(dropdown.value)
  );
  //   console.log(inputValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
  });
};

sortButton.addEventListener("click", sortInputArray);
