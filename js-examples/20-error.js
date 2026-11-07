// EXAMPLE-1: WHY ERRORS MATTER
// an unhandled error interrupts normal program flow

function Account(id, balance) {
  this.id = id;
  this.balance = balance;

  this.withdraw = function (amount) {
    if (this.balance < amount) throw new Error("Insufficient funds");

    return (this.balance -= amount);
  };
}

const account = new Account(1, 100);

// try / catch: the catch block runs only when something throws inside try
try {
  // const balance = account.withdraw(10); // Success scenario
  const balance = account.withdraw(10_000_000); // Error scenario

  console.log("Withdraw successful");
  console.log("Balance: ", balance);
} catch (err) {
  console.error(err);
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

// EXAMPLE-2: CUSTOM ERRORS

/*
  Extending Error gives each failure case its own type,
  so callers can react differently per error
*/

class InvalidAmountError extends Error {
  constructor() {
    super('Invalid amount');
  }
}

class InsufficientBalanceError extends Error {
  constructor() {
    super('Insufficient balance');
  }
}

function Account2(id, balance) {
  this.id = id;
  this.balance = balance;

  this.withdraw = function (amount) {
    if (amount <= 0) throw new InvalidAmountError();
    if (amount > this.balance) throw new InsufficientBalanceError();

    return (this.balance -= amount);
  };
}

const account2 = new Account2(1, 100);

// finally runs regardless of the outcome — success, caught error, or
// even an uncaught one, so it's the right place for cleanup
try {
  // const balance = account2.withdraw(10); // Success scenario
  // const balance = account2.withdraw(10_000_000); // Throws InsufficientBalanceError
  const balance = account2.withdraw(-1); // Throws InvalidAmountError

  console.log("Withdraw successful");
  console.log("Balance: ", balance);
} catch (err) {
  // instanceof picks a specific handler for each custom error type
  if (err instanceof InsufficientBalanceError) {
    console.error("Error: insufficient balance");
  } else if (err instanceof InvalidAmountError) {
    console.error("Error: invalid amount");
  } else {
    console.error("Unknown error");
  }
} finally {
  console.log("Process completed");
}

// =======================================================================================================
console.log("\n");
// =======================================================================================================

/* 
  STACK TRACE
  err.stack holds a snapshot of the call stack at the throw site —
  the trail of function calls that led to the error
*/

