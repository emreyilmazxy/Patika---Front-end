import { bmiCalculator } from "./functions/bmiCalculator";

const heightInput = document.getElementById('height') as HTMLInputElement;
const weightInput = document.getElementById('weight') as HTMLInputElement;



function tryCalculateBMI() {  // BMI calculation attempt for valid inputs

    const heightRaw: string = heightInput.value.trim();
    const weightRaw: string = weightInput.value.trim();
    // select BMI  display for triangle position
    const imgWrapper = document.querySelector('.bmi__img-wrapper') as HTMLDivElement;

    // Exit early if either field is empty (silent, no alert)
    if (!heightRaw || !weightRaw) {
        if (imgWrapper) {
            imgWrapper.style.setProperty('--after-right', '5%');
        }
        return;
    }

    // Parse values
    const heightNum: number = Number(heightRaw);
    const weightNum: number = Number(weightRaw);

    // Check for negative values
    if (heightNum < 0) {
        alert('Height cannot be negative!');
        heightInput.value = '';
        return;
    }

    if (weightNum < 0) {
        alert('Weight cannot be negative!');
        weightInput.value = '';
        return;
    }

    if (!Number.isInteger(heightNum)) {
        alert("Height must be an integer in centimeters (e.g., 170).");
        return;
    }


    // Validate for positive values and valid numbers
    if (!Number.isFinite(heightNum) || heightNum <= 0 ||
        !Number.isFinite(weightNum) || weightNum <= 0) {
        return;
    }

    // Calculate BMI with valid inputs
    const bmi = bmiCalculator(heightNum, weightNum);



    if (imgWrapper) {
        switch (true) {
            case bmi >= 35:
                imgWrapper.style.setProperty('--after-right', '13%');
                break;

            case bmi >= 30:
                imgWrapper.style.setProperty('--after-right', '30%');
                break;

            case bmi >= 25:
                imgWrapper.style.setProperty('--after-right', '45%');
                break;

            case bmi >= 18.5:
                imgWrapper.style.setProperty('--after-right', '62%');
                break;

            default:
                imgWrapper.style.setProperty('--after-right', '78%');
        }
    }
}

// Form element event listeners for real-time BMI calculation
heightInput.addEventListener("input", tryCalculateBMI);
weightInput.addEventListener("input", tryCalculateBMI);
