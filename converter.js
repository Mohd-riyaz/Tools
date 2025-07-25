const unitOptions = {
  length: ["Meter", "Kilometer", "Centimeter", "Inch", "Foot"],
  weight: ["Gram", "Kilogram", "Pound", "Ounce"],
  temp: ["Celsius", "Fahrenheit", "Kelvin"]
};

function updateUnits() {
  const type = document.getElementById("type").value;
  const from = document.getElementById("fromUnit");
  const to = document.getElementById("toUnit");

  from.innerHTML = "";
  to.innerHTML = "";

  unitOptions[type].forEach(unit => {
    const opt1 = document.createElement("option");
    const opt2 = document.createElement("option");
    opt1.value = opt2.value = unit;
    opt1.text = opt2.text = unit;
    from.appendChild(opt1);
    to.appendChild(opt2);
  });

  convert();
}

function convert() {
  const type = document.getElementById("type").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const result = document.getElementById("result");

  if (isNaN(inputValue)) {
    result.innerText = "Converted Value: —";
    return;
  }

  let output;

  if (type === "length") {
    output = convertLength(inputValue, fromUnit, toUnit);
  } else if (type === "weight") {
    output = convertWeight(inputValue, fromUnit, toUnit);
  } else {
    output = convertTemp(inputValue, fromUnit, toUnit);
  }

  result.innerText = `Converted Value: ${output}`;
}

function convertLength(value, from, to) {
  const meters = {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Inch: 0.0254,
    Foot: 0.3048
  };
  return (value * meters[from] / meters[to]).toFixed(3);
}

function convertWeight(value, from, to) {
  const grams = {
    Gram: 1,
    Kilogram: 1000,
    Pound: 453.592,
    Ounce: 28.3495
  };
  return (value * grams[from] / grams[to]).toFixed(3);
}

function convertTemp(value, from, to) {
  let tempC;

  if (from === "Celsius") tempC = value;
  else if (from === "Fahrenheit") tempC = (value - 32) * 5/9;
  else tempC = value - 273.15;

  let result;
  if (to === "Celsius") result = tempC;
  else if (to === "Fahrenheit") result = (tempC * 9/5) + 32;
  else result = tempC + 273.15;

  return result.toFixed(2);
}

// Initial setup
updateUnits();
