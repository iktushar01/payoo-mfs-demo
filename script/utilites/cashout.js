document.getElementById("out_money_btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("user_number").value;

    const amount = getInputValueById("out_amount");
    const pinNumber = getInputValueById("cash_out_pin");
    const mainBalance = getInnerTextById("main_balance");
    
    if(accountNumber.length === 11){
        if (pinNumber === 1234){
            const sum = mainBalance - amount;
            setInnerTextByIdAndValue("main_balance", sum)
        }
        else{
            alert("Incorrect PIN.");
        }
    }
    else{
        alert("Please enter a valid 11-digit account number.");
    }
});