document.getElementById("out_money_btn").addEventListener("click", function(event){
    event.preventDefault();
    const pin = document.getElementById("cash_out_pin").value;
    const convertPin = parseInt(pin);
    const amount = document.getElementById("out_amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const account = document.getElementById("user_number").value;

    if(amount > mainBalance){
        alert("Insufficient funds");
        return;
    }
    
    const container = document.getElementById("transaction_container");
    const p = document.createElement("p");
    p.innerText = `
    Cash out ${amount} from ${account} account
    
    `
    container.appendChild(p)


    if (convertPin === 1234){
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main_balance").innerText = sum;
    }
    else{
        alert("Enter Valid Pin");
    }
}
);