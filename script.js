function calculateSavings() {
    const income = Number(document.getElementById("income").value);
    const expenses = Number(document.getElementById("expenses").value);

    const savings = income - expenses;

    document.getElementById("result").innerText = "Monthly savings: " + savings;
}