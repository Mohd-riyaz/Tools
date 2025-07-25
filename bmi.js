function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = document.getElementById('result');

  if (height === '' || weight === '') {
    result.innerHTML = 'Please enter both height and weight!';
    result.style.color = 'red';
    return;
  }

  const heightMeters = height / 100;
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
  let status = '';

  if (bmi < 18.5) {
    status = 'Underweight';
  } else if (bmi < 24.9) {
    status = 'Normal weight';
  } else if (bmi < 29.9) {
    status = 'Overweight';
  } else {
    status = 'Obese';
  }

  result.innerHTML = `Your BMI is <strong>${bmi}</strong> — ${status}`;
  result.style.color = '#ff4e50';
}
