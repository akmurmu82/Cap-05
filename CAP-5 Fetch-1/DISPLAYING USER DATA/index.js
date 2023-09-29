let getUser = document.getElementById('getUser')
let container = document.querySelector('.container')

// async func
async function fetchUser() {
    const response = await fetch('https://reqres.in/api/users')
    const data = await response.json()

    let userData = data.data; // [{}, {}, {}...]
    for (let user of userData) {
        let name = `${user.first_name} ${user.last_name}`
        let email = `${user.email}`
        let img = `${user.avatar}`
        // displayUsers(name, email, img); // calling
        createCard(name, email, img) // 
    }
} // >1 sec

function displayUsers(userName, userEmail, userImg) {
    console.log(userName, userEmail, userImg);
    let card = document.createElement('div'); //card
    card.setAttribute('class', 'card') // setting the classname

    // method 1
    let nameTag = document.createElement('h3');
    nameTag.setAttribute('id', 'userName');
    nameTag.innerText = userName;

    let email = document.createElement('p');
    email.setAttribute('id', 'userEmail')
    email.innerText = userEmail;

    let img = document.createElement('img');
    img.setAttribute('id', 'userImg')
    img.setAttribute('src', `${userImg}`)

    // method

    card.append(img, nameTag, email)
    container.append(card);
}

function createCard(userName, userEmail, userImg) {
    console.log(userName, userEmail, userImg);
    let card = document.createElement('div'); //card
    card.setAttribute('class', 'card') // setting the classname

    card.innerHTML = `
            <img src=${userImg} alt="">
            <h3 id='userName'>${userName}</h3>
            <p id='userEmail'>${userEmail}</p>
    `
    container.append(card);
}
getUser.addEventListener('click', fetchUser)