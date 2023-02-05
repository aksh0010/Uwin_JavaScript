

function convert() {
  const USER_USD = document.getElementById("usd").value;
  const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const exchangeRate = data.rates.CAD;
        const cadAmount = (exchangeRate * USER_USD).toFixed(2);
        document.getElementById("cad").value = cadAmount;
    })
    .catch(error => console.log(error));
}
