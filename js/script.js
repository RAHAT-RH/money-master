function additionCalculate() {
    if (monitor('incomeInput') < 0 || monitor('footInput') < 0 || monitor('rentInput') < 0 || monitor('clothesInput') < 0) {
        document.getElementById('danger').style.display = 'block';
    } else {
        let totalExpensis = monitor('footInput') + monitor('rentInput') + monitor('clothesInput');
        const totalPointExpensis = document.getElementById('total-expensis');
        const totalPointExpensisText = totalPointExpensis.innerText;
        totalPointExpensis.innerText = totalExpensis;
        const amountRest = document.getElementById('restBalance');
        const amountRestText = amountRest.innerText;
        const restAmount = monitor('incomeInput') - totalExpensis;
        amountRest.innerText = restAmount;
        const remainBalance = document.getElementById('remainingBalance');
    }

}
function monitor(idName) {
    const input = document.getElementById(idName).value;
    const allInput = parseFloat(input);
    return allInput;
}
document.getElementById('calculate').addEventListener('click', function () {
    additionCalculate()
})
document.getElementById('save-btn').addEventListener('click', function () {
    const total = monitor('incomeInput') / 100 * monitor('parsent-value');
    const saveAmount = document.getElementById('saveAmount');
    const saveAmountText = saveAmount.innerText;
    const saveAmountNumber = parseFloat(saveAmountText);
    saveAmount.innerText = total;
    const remainingBalance = parseFloat(document.getElementById('restBalance').innerText) - parseFloat(document.getElementById('saveAmount').innerText);
    const remainBalanceId = document.getElementById('remaining-Balance');
    const remainBalanceText = remainBalanceId.innerText;
    remainBalanceId.innerText = remainingBalance;
    // console.log(saveAmountNumber);   
})