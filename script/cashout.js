document.getElementById("out_money_btn").addEventListener("click", function(event){
    event.preventDefault();
    const pin = document.getElementById("cash_out_pin").value;
    const convertPin = parseInt(pin);
    const amount = document.getElementById("out_amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertPin === 1234){
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main_balance").innerText = sum;
    }
    else{
        alert("Enter Valid Pin");
    }
}
);