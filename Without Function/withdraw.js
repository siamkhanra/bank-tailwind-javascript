// 1. Add event handler with the withdraw button
// 2. Get the withdraw amount from the withdraw input field
// 3. Get previous withdraw total
// 4. Calculate total withdraw amount and Set total withdraw amount
// 5. Get the previous balance total
// 6. Set the balance total
// 7. Clear the input field


// Step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    
    // Step-7
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return ;
    }

    // Step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Do not you have sufficient money');
        return ;
    }

    // Step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})