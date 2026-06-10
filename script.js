// storing each one id 
const balance_El = document.getElementById('balance');
const income_El = document.getElementById('income-amount');
const expenses_El = document.getElementById('expenses-amount');
const transaction_list = document.getElementById('transaction-list');
const transaction_Form = document.getElementById('transaction-form');
const description_InputBox = document.getElementById('description-inputBox');
const amount_InputBox = document.getElementById('amount-inputBox');

// store each one transaction list 
let transactions = [];

// add event listenter on transaction form
transaction_Form.addEventListener('submit', addTransaction);

function addTransaction(event){
    event.preventDefault();

    // get values from description & amount input boxes 
    const description = description_InputBox.value.trim();
    const amount = parseFloat(amount_InputBox.value);

    // push each one transaction items as array item into transaction 
    transactions.push({
        id: Date.now(),
        description,
        amount
    });

    // update balance & each one transation list
    updateTransactionList();
    updateBalanceHistory();

    // clear form 
    transaction_Form.reset();
}