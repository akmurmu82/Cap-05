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

    let role = exp<=1 ? 'Fresher': exp>=2 && exp<=5 ? 'Junior': exp>5 ? 'Senior': null;

    createRow(name, employeeID, department, exp, email, mbl, role, 'Delete');
}

function createRow(name, empId, dep, exp, email, mob, role, del) {
    let paramArr = [name, empId, dep, exp, email, mob, role, del];
    let tr = document.createElement('tr');
    
    tr.addEventListener('click', (event)=> {
        event.target.parentNode.remove();
    })
    
    for(let param of paramArr) {
        if(param == role) {
        }
        let td = document.createElement('td');
        td.innerText = param;
        tr.append(td);
    }
    tbody.append(tr);
}