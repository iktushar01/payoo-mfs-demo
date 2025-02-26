document.getElementById("add_money").addEventListener("click", function(event) {
    event.preventDefault();
    const pin = document.getElementById("account_password").value;
    const convertPin = parseInt(pin);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    console.log(convertPin, convertedAmount);
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (amount && pin) {
        if (convertPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main_balance").innerText = sum;
            alert("Money added successfully");
        }
        else{
            alert("Enter Valid Pin");
        }
    }
    else{
        alert("Enter amount: ");
    }
});