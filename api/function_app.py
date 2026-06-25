import azure.functions as func
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="calculateSavings")
def calculateSavings(req: func.HttpRequest) -> func.HttpResponse:
    try:
        data = req.get_json()

        income = float(data["income"])
        expenses = float(data["expenses"])

        savings = income - expenses

        return func.HttpResponse(
            json.dumps({
                "savings": savings
            }),
            mimetype="application/json",
            status_code=200
        )

    except Exception as e:
        return func.HttpResponse(
            json.dumps({
                "error": str(e)
            }),
            mimetype="application/json",
            status_code=400
        )