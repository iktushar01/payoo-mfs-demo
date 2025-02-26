// Define the handleToggle function
function handleToggle(elementId, displayValue) {
    document.getElementById(elementId).style.display = displayValue;
}

// Event listeners for the "Add Money" and "Cash Out" boxes
document.addEventListener("DOMContentLoaded", function() {
    // Initially hide the cash-out section
    document.getElementById("cash_out_section").style.display = "none"; // Hide Cash Out section

    // When clicking on the "Add Money" box 
    document.getElementById("add_money_box").addEventListener("click", function() {
        handleToggle("add_money_section", "block"); // Show Add Money section
        handleToggle("cash_out_section", "none"); // Hide Cash Out section
    });

    // When clicking on the "Cash Out" box
    document.getElementById("cash_out_box").addEventListener("click", function() {
        handleToggle("add_money_section", "none"); // Hide Add Money section
        handleToggle("cash_out_section", "block"); // Show Cash Out section
    });
});
