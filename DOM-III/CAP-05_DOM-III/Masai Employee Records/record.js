let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

form.addEventListener('submit', submitData);

function submitData(event) {
    event.preventDefault();
    let name = form.name.value;
    let employeeID = form.employeeID.value;
    let department = form.department.value;
    let exp = form.exp.value;
    let email = form.email.value;
    let mbl = form.mbl.value;

    createRow(name, employeeID, department, exp, email, mbl);
}

function createRow(name, empId, dep, exp, email, mob) {
    let paramArr = [name, empId, dep, exp, email, mob];
    let tr = document.createElement('tr');
    
    for(let param of paramArr) {
        let td = document.createElement('td');
        td.innerText = param;
        tr.append(td);
    }
    console.log(tr, tbody)
    tbody.append(tr);
}