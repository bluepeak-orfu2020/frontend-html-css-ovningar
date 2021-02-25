
const orderForm = document.querySelector('#order-form');
const orderList = document.querySelector('#order-list');
const orderListRows = document.querySelector('#order-list-rows');

const monthIds = {
    0: 'jan',
    1: 'feb',
    2: 'mars',
    3: 'april',
    4: 'may',
    5: 'juni',
    6: 'juli',
    7: 'aug',
    8: 'sep',
    9: 'okt',
    10: 'nov',
    11: 'dec'
}
const orders = {};

function addCellToRow(value, tr) {
    // Alternative 1
    // const td = document.createElement('td');
    // td.textContent = value;
    // tr.appendChild(td);

    // Alternative 2 - Only works for tables
    const cell = tr.insertCell();
    cell.textContent = value;
}

function createOrder(form) {
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

    return {
        customerRef,
        date,
        amount,
        category,
        delivery
    }
}

function createOrderListRow(order) {
    const tr = document.createElement('tr');
    addCellToRow(order.customerRef, tr);
    addCellToRow(order.date, tr);
    addCellToRow(order.amount, tr);
    addCellToRow(order.category, tr);
    addCellToRow(order.delivery, tr);
    return tr;
}

function addOrder(order) {
    const month = monthIds[new Date(order.date).getMonth()];
    if (!orders[month]) {
        orders[month] = [];
    }
    orders[month].push(order);
}

function buildSummary(month) {
    const row = document.querySelector('#summary-' + month);
    const totalSum = row.querySelector('.amount');
    const numOrders = row.querySelector('.count');

    return {
        month: month,
        totalSum: totalSum,
        numOrders: numOrders
    }
}

const summaryRows = [];


// --- Begin create summaryRows ---

// Variant 1 -- enkel, standard
for (const monthId of Object.values(monthIds)) {
    const month = buildSummary(monthId);
    summaryRows.push(month);
}

// Variant 2 -- mer kompakt, kanske svårare att förstå (?)
// const summaryRows = Object.values(monthIds).map(buildSummary)

// --- End of create summaryRows ---



// Example of setting value in array of month rows. Variant 1
// for (const row of summaryRows) {
//     if (row.month === 'may') {
//         row.totalSum.textContent = '2222';
//         break;
//     }
// }

// Example of setting value in array of month rows. Variant 2
// summaryRows
//     .filter(row => row.month === 'may')
//     .forEach(row => row.totalSum.textContent = '1111')

function recomputeSummaries() {
    for (const month of Object.keys(orders)) {
        console.log('checking month', month);
        const orderList = orders[month];
        const count = orderList.length;
        const sum = orderList.reduce(
            (acc, order) => acc + parseFloat(order.amount), 0
        );

        summaryRows
            .filter(row => row.month === month)
            .forEach(row => {
                row.totalSum.textContent = sum;
                row.numOrders.textContent = count;
            })
    }
}

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;

    const order = createOrder(form);
    console.log('order', order);

    const tr = createOrderListRow(order);
    orderListRows.appendChild(tr);

    addOrder(order);
    recomputeSummaries();

    form.reset();
});
