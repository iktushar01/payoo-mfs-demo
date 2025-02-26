document.getElementById("login_btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account_number").value;
    const accountPassword = document.getElementById("account_password").value;
    const convertPin = parseInt(accountPassword);
        if (
            accountNumber.length === 11 &&
            accountNumber.slice(0, 2) === "01" &&
          !accountNumber.includes(" ") &&
          !isNaN(accountNumber)
        ) {
          if (convertPin === 1234){
            window.location.href = "./main.html";
          }
          else{
            alert("Login Failed");
          }
        }
      else{
        alert("Please Enter a Valid Number");
      }
    }
     
);