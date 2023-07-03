class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculatorFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        const interestRate = 1 + rate / 100;
        const presentValue = monthlyPayment * months;
        const futureValue = presentValue * Math.pow(interestRate, months);
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        const currencyFormatter = new Int16Array.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
        });
        return currencyFormatter.format(field);
    }
}

module.exports = FinanceCalculator;