function calculateRepayment() {
  // Get the input values
  const mortgageAmount = document.getElementById("mortgage-amount").value;
  const mortgageTerm = document.getElementById("mortgage-term").value;
  const interestRate = document.getElementById("interest-rate").value;
  const mortgageTypeInput = document.querySelector(
    'input[name="mortgage_type"]:checked'
  );
  const mortgageType = mortgageTypeInput ? mortgageTypeInput.value : "";

  // Check if all required fields are filled
  let isValid = true;
  if (!mortgageAmount) {
    document.querySelector(".units .input-group").classList.add("required");
    document.querySelector(".units .warning").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".units .input-group").classList.remove("required");
    document.querySelector(".units .warning").style.display = "none";
  }

  if (!mortgageTerm) {
    document
      .querySelector(".break .unit:first-child .input-group")
      .classList.add("required");
    document.querySelector(".break .unit:first-child .warning").style.display =
      "block";
    isValid = false;
  } else {
    document
      .querySelector(".break .unit:first-child .input-group")
      .classList.remove("required");
    document.querySelector(".break .unit:first-child .warning").style.display =
      "none";
  }

  if (!interestRate) {
    document
      .querySelector(".break .unit:last-child .input-group")
      .classList.add("required");
    document.querySelector(".break .unit:last-child .warning").style.display =
      "block";
    isValid = false;
  } else {
    document
      .querySelector(".break .unit:last-child .input-group")
      .classList.remove("required");
    document.querySelector(".break .unit:last-child .warning").style.display =
      "none";
  }

  if (!isValid) {
    return;
  }

  // Calculate the monthly repayment and total to be repaid
  const interestRatePerMonth = parseFloat(interestRate) / 100 / 12;
  const numberOfPayments = parseFloat(mortgageTerm) * 12;

  let monthlyRepayment;
  let totalRepayment;

  if (mortgageType === "repayment") {
    monthlyRepayment =
      (parseFloat(mortgageAmount) *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, numberOfPayments)) /
      (Math.pow(1 + interestRatePerMonth, numberOfPayments) - 1);
    totalRepayment = monthlyRepayment * numberOfPayments;
  } else if (mortgageType === "interest-only") {
    monthlyRepayment =
      parseFloat(mortgageAmount) * (interestRatePerMonth / 100);
    totalRepayment = monthlyRepayment * numberOfPayments;
  }

  // Update the result section
  document.getElementById("ymp").textContent =
    "$" + monthlyRepayment.toFixed(2);
  document.getElementById("pot").textContent = "$" + totalRepayment.toFixed(2);

  // Show the result section and hide the placeholder
  document.getElementById("repayment-result").style.display = "flex";
  document.getElementById("placehold").style.display = "none";
}
