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

// loop each one transction list and update the list
function updateTransactionList(){
    // clear the list after submit new description & amount
    transaction_list.innerHTML = '';

    // create a copy of each one transaction's array item & reverse the item
    const copyItems = [...transactions].reverse();

    // loop copied version of each one transaction array items 
    copyItems.forEach((transaction) => {
        const li_list = createTransactionElement(transaction)
        transaction_list.appendChild(li_list);
    })
}