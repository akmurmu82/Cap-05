let form = document.querySelector('form');
let tbody = document.querySelector('tbody');
form.addEventListener('submit', submitForm);

let todos = [];
function submitForm(event) {
    event.preventDefault();
    
    let todo = {
        task: form.task.value,
        priority: form.priority.value
    }

    todos.push(todo);
    updateUI();
}

function updateUI() {
    tbody.innerHTML = '';
    todos.map((todo)=> {
        let tr = document.createElement('tr')
        
        for(let prop in todo) {
            let td = document.createElement('td');
            td.innerText = todo[prop];
            tr.append(td);
        }

        tbody.append(tr);
    })
}