document.addEventListener('DOMContentLoaded', () => {
    const exchangeRates = {
        'USD': 1.0,
        'EUR': 0.93,
        'GBP': 0.82,
        'JPY': 147.85,
        'CAD': 1.36
    };

    const form = document.getElementById('converter-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        const result = convertCurrency(amount, fromCurrency, toCurrency);
        document.getElementById('result').textContent = `${amount} ${fromCurrency} is equivalent to ${result.toFixed(2)} ${toCurrency}`;
    });

    function convertCurrency(amount, fromCurrency, toCurrency) {
        if (fromCurrency === toCurrency) {
            return amount;
        }

        const amountInUSD = amount / exchangeRates[fromCurrency];
        return amountInUSD * exchangeRates[toCurrency];
    }
});
