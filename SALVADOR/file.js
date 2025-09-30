function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    const currentBalance = 1000; 
    console.log(`Checking balance for amount: $${amount}`);
    setTimeout(() => {
      if (amount <= currentBalance) {
        resolve(currentBalance);
      } else {
        reject("Insufficient funds");
      }
    }, 500);
  });
}

function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    console.log(`Deducting amount: $${amount}`);
    setTimeout(() => {
      
      const success = true;
      if (success) {
        resolve(amount);
      } else {
        reject("Failed to deduct amount");
      }
    }, 500);
  });
}

function confirmTransaction() {
  return new Promise((resolve, reject) => {
    console.log("Confirming transaction...");
    setTimeout(() => {
      
      const confirmed = true;
      if (confirmed) {
        resolve("Transaction complete");
      } else {
        reject("Transaction confirmation failed");
      }
    }, 500);
  });
}


function transfer(amount) {
  return checkBalance(amount)
    .then(() => deductAmount(amount))
    .then(() => confirmTransaction())
    .then(message => {
      console.log(message);
      return message;
    })
    .catch(error => {
      console.error("Transaction failed:", error);
      throw error;
    });
}

transfer(500)
  .then(() => console.log("Success"))
  .catch(() => console.log("Failed"));
