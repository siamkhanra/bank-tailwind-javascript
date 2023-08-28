// Step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step-2: Get the deposit amount from the deposit input field
    // For input field use .value to get the text inside input box
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString) ;

    
    // Step-7: Clear the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return ;
    }

    // Step-3: Get the current deposit total amount
    // For non-input(element other than input, textarea), use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: Get Balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})