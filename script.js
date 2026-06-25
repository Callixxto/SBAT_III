async function calculateSavings() {
    const income = Number(document.getElementById("income").value);
    const expenses = Number(document.getElementById("expenses").value);

    try {
        const response = await fetch(
            "https://sbat-iii-api-b5gwcsdbgcfbaycc.spaincentral-01.azurewebsites.net/api/calculateSavings",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    income: income,
                    expenses: expenses
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to connect to Azure Function.");
        }

        const result = await response.json();

        document.getElementById("result").innerText =
            "Monthly savings: " + result.savings;

    } catch (error) {
        console.error(error);
        document.getElementById("result").innerText =
            "Error calculating savings.";
    }
}