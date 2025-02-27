// document.getElementById("add_money").addEventListener("click", function(event) {

//     event.preventDefault();
//     const amount = document.getElementById("amount").value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById("account_password").value; 
//     const convertPin = parseInt(pin);
//     const mainBalance = document.getElementById("main_balance").innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//       if (convertPin === 1234){
//         const sum  = convertedMainBalance + convertedAmount;
//         document.getElementById("main_balance").innerText = sum;
//       }
//       else {
//         console.log('no');
      

//    }
// }
//  );


document.getElementById("add_money").addEventListener("click", function(event){
  event.preventDefault();
  const amount = getInputValueById("amount");
  const pin = getInputValueById("account_password");
  const account = document.getElementById("user_number").value;
  const mainBalance = getInnerTextById("main_balance");



  if(amount < 0){
    alert("Invalid amount.");
    return;
  }


  if ( account.length === 11){
    if ( pin === 1234){
      const sum = mainBalance + amount;
      //document.getElementById("main_balance").innerText = sum ;
      setInnerTextByIdAndValue("main_balance" , sum);

      const container = document.getElementById("transaction_container");
      const p = document.createElement("p");
      p.innerText = `
      added ${amount} from ${account} account
      
      `
      container.appendChild(p)
      

    }
    else{
      console.log("pin tik nai");
    }

  }
  else{

  }
})









