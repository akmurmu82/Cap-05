const baseAPI = 'http://www.omdbapi.com/'
const key = `apikey=f4847bfe`
let title = 'RRR'

let searchBar = document.querySelector('#searchBar');
let searchBtn = document.querySelector('#searchBtn');
let container = document.querySelector('#container');
let searchResult = document.querySelector('#searchResult');

// complete form of api
// http://www.omdbapi.com/?i=tt3896198&apikey=f4847bfe

/*
i - id of any movie
t - title of any movie
*/

async function getMovie() {
    let res = await fetch(`${baseAPI}?t=${title}&${key}`)
    let result = await res.json();
    console.log(result)
}

async function searchMovie() {
    let quary = searchBar.value;
    let res = await fetch(`${baseAPI}?s=${quary}&${key}`)
    let result = await res.json();
    let moviesArr = result.Search;
    console.log(moviesArr);

    typeof moviesArr == 'undefined' ? searchResult.innerText = `no result found for: "${quary}"` : searchResult.innerText = `Search Result for: "${quary}"`

    document.querySelector('#container').innerHTML = ''
    if (typeof moviesArr !== 'undefined') {
        for (let movie of moviesArr) {
            let title = movie.Title.length > 30 ? movie.Title.substring(0, 28) + '...' : movie.Title
            let poster = movie.Poster;
            let year = movie.Year;
            let movieCard = createMovieCard(poster, title, year)
            appendMovieCard(movieCard)
        }
    }
}

let searchFor = 'ironman';

function createMovieCard(poster, title, year) {
    let card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${poster}">
        <h4>${title}</h4>
        <p>${year}</p>
        <button>Watch Now</button>
        `
    return card;
}

function appendMovieCard(movieCard) {
    document.querySelector('#container').appendChild(movieCard);
}

// getMovie();
searchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    searchMovie()
})

