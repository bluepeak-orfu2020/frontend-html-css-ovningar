
const orderForm = document.querySelector('#order-form');
const orderList = document.querySelector('#order-list');
const orderListRows = document.querySelector('#order-list-rows');

function addCellToRow(value, tr) {
    // Alternative 1
    // const td = document.createElement('td');
    // td.textContent = value;
    // tr.appendChild(td);

    // Alternative 2 - Only works for tables
    const cell = tr.insertCell();
    cell.textContent = value;
}

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;

    const customerRef = form[0].value;
    const date = form[1].value;
    const amount = form[2].value;
    const category = form[3].value;
    const deliveryStandardElement = form[4];
    let delivery;
    if (deliveryStandardElement.checked) {
        delivery = 'standard';
    } else {
        delivery = 'express';
    }

    console.log(customerRef, date, amount, category, delivery);

    const tr = document.createElement('tr');
    addCellToRow(customerRef, tr);
    addCellToRow(date, tr);
    addCellToRow(amount, tr);
    addCellToRow(category, tr);
    addCellToRow(delivery, tr);
    orderListRows.appendChild(tr);

    form.reset();
});
