document.getElementById("cash_out_section").style.display = "none";
document.getElementById("transaction_section").style.display = "none";

document.getElementById("add_money_box").addEventListener("click", function() {
    handleToggle("add_money_section", "block")
    handleToggle("cash_out_section", "none");
    handleToggle("transaction_section", "none");
    // document.getElementById("cash_out_section").style.display = "none";
    // document.getElementById("add_money_section").style.display = "block";
});

document.getElementById("cash_out_box").addEventListener("click", function() {
    handleToggle("add_money_section", "none")
    handleToggle("cash_out_section", "block");
    handleToggle("transaction_section", "none");
});


