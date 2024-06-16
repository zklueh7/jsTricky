function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if (inputPin === pin) {
                return `$${amount}`;
            }
            return "Invalid PIN."
        },

        deposit(inputPin, depositAmt) {
            if (inputPin === pin) {
                amount += depositAmt;
                return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`;
            }
            return "Invalid PIN."
        },

        withdraw(inputPin, withdrawAmt) {
            if (inputPin === pin) {
                if (withdrawAmt <= amount) {
                    amount -= withdrawAmt;
                    return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
                }
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            return "Invalid PIN."
        },

        changePin(oldPin, newPin) {
            if (oldPin === pin) {
                pin = newPin;
                return "PIN successfully changed!";
            }
            return "Invalid PIN";
        }
    }
}

module.exports = { createAccount };
