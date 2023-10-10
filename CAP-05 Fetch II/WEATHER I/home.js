function container() {
    let container = document.createElement('div')
    container.setAttribute('id', 'container')
}

function container(city,cloud, desc ) {
    let container = document.createElement('div')
    container.innerHTML = ''
    container.innerHTML = `
    <span id="cityName">${city}</span>
    <div id="temp-container">
        <span id="temp">25 <p>°C</p></span>
        <span>Cloudy 24 ~ 30°C</span>
    </div>`

    container.setAttribute('id', 'container')
    return container;
}

export {container};