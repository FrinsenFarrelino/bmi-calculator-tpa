function getData() {
  const kg = document.getElementById("input-weight").value;
  const cm = document.getElementById("input-height").value;
  const data = {
    kg: kg,
    cm: cm,
  };

  return data;
}

function calculate(kg, cm) {
  const result = kg / Math.pow(cm / 100, 2);
  let category;

  if (result >= 30) {
    category = "Obesity";
  } else if (result >= 25) {
    category = "Overweight";
  } else if (result >= 18.5) {
    category = "Normal Weight";
  } else {
    category = "Underweight";
  }

  const data = {
    result: result,
    category: category,
  };

  return data;
}

function validateFormData(data) {
  if (data.kg != "" && data.cm != "") {
    return true;
  } else {
    return false;
  }
}

function submit() {
  const data = getData();
  const validate = validateFormData(data);

  if (validate == false) {
    alert(
      "Please double check your input (just input number, and fill all the fields)!"
    );
  } else {
    let result = calculate(data.kg, data.cm);
    document.querySelector("#result").innerHTML = `
    <p>Your BMI is <strong>${result.result}</strong> which means you are <strong>${result.category}</strong></p>
    `;
  }
}

const btn = document.getElementById("submit-button");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});
