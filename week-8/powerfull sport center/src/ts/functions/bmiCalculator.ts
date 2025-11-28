// calculates BMI given weight in kg and height in cm
export function bmiCalculator(height: number, weight: number): number {

    const bmi = weight / ((height / 100) ** 2);
    return Number(bmi.toFixed(2));
}
