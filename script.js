/* Calculator operations */
const add      = (n1, n2) => { return n1 + n2 };
const subtract = (n1, n2) => { return n1 - n2 };
const multiply = (n1, n2) => { return n1 * n2 };
const divide   = (n1, n2) => { return n1 / n2 };


/* Swaps the inputted numbers */
function swapNumbers() {
    const n1Box = document.getElementById('num1');
    const n2Box = document.getElementById('num2');
    const n1 = n1Box.value;
    const n2 = n2Box.value;

    n1Box.value = n2;
    n2Box.value = n1;
    drawResults();
}


/* Generates instruction or results table */
function drawResults() {
    const outDiv = document.getElementById('output');

    const n1 = parseInt(document.getElementById('num1').value);
    const n2 = parseInt(document.getElementById('num2').value);
    if (isNaN(n1) || isNaN(n2)) {
        outDiv.innerText = 'Please enter a number for "Number 1" and "Number 2".';
        return;
    }

    const addChecked = document.getElementById('add').checked;
    const subChecked = document.getElementById('subtract').checked;
    const mulChecked = document.getElementById('multiply').checked;
    const divChecked = document.getElementById('divide').checked;
    if (!addChecked && !subChecked && !mulChecked && !divChecked) {
        outDiv.innerText = 'Please check at least one operation to perform.';
        return;
    }

    const table = generateTable(n1, n2, addChecked, subChecked, mulChecked, divChecked);
    outDiv.innerHTML = '';
    outDiv.appendChild(table);
}

function generateTable(n1, n2, doAdd, doSub, doMul, doDiv) {
    const table = document.createElement('table');
    table.id = 'result';

    let data = [];
    if (doAdd)    data.push(['Addition',       add(n1,n2)]);
    if (doSub)    data.push(['Subtraction',    subtract(n1,n2)]);
    if (doMul)    data.push(['Multiplication', multiply(n1,n2)]);
    if (doDiv)    data.push(['Division',       divide(n1,n2)]);
    
    const colHeads = ['Operation', 'Result'];
    generateHeader(table, colHeads);

    const tBody = table.createTBody();
    data.forEach(r => {
        generateRow(tBody, r);
    });

    return table;
}

function generateHeader(table, colHeads) {
    const header = table.createTHead();
    const row = header.insertRow();
    let th, text;
    colHeads.forEach(headName => {
        th = document.createElement('th');
        text = document.createTextNode(headName);
        th.appendChild(text);
        row.appendChild(th);
    });
}

function generateRow(body, rowData) {
    const row = body.insertRow();
    let cell, text;
    rowData.forEach(e => {
        cell = row.insertCell();
        text = document.createTextNode(e);
        cell.appendChild(text);
    });
}
