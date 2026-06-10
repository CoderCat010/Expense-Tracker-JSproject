// storing each one id 
const balance_El = document.getElementById('balance');

const income_El = document.getElementById('income-amount');

const expenses_El = document.getElementById('expenses-amount');

const transaction_list = document.getElementById('transaction-list');

const transaction_Form = document.getElementById('transaction-form');

const description_InputBox = document.getElementById('description-inputBox');

const amount_InputBox = document.getElementById('amount-inputBox');

// add event listenter on transaction form
transaction_Form.addEventListener('submit', addTransaction);

function addTransaction(event){
    event.preventDefault();
}