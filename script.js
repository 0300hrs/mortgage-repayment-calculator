document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("mortgage-amount").value);
    const term = parseFloat(document.getElementById("mortgage-term").value);
    const interestRate = parseFloat(
      document.getElementById("interest-rate").value
    );
    const type = document.querySelector(
      'input[name="mortgage_type"]:checked'
    ).value;

    if (!amount || !term || !interestRate) {
      alert("Please fill out all fields.");
      return;
    }

    let monthlyRate = interestRate / 100 / 12;
    let numberOfPayments = term * 12;
    let monthlyRepayment;

    if (type === "repayment") {
      monthlyRepayment =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else {
      monthlyRepayment = amount * monthlyRate;
    }

    let totalRepayment = monthlyRepayment * numberOfPayments;

    document.getElementById("ymp").textContent = `$${monthlyRepayment.toFixed(
      2
    )}`;
    document.getElementById("pot").textContent = `$${totalRepayment.toFixed(
      2
    )}`;
  });
