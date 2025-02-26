document.getElementById("add_money").addEventListener("click", function(event) {

    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("account_password").value; 
    const convertPin = parseInt(pin);
    const mainBalance = document.getElementById("main_balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

      if (convertPin === 1234){
        const sum  = convertedMainBalance + convertedAmount;
        document.getElementById("main_balance").innerText = sum;
      }
      else {
        console.log('no');
      

   }
}
 );