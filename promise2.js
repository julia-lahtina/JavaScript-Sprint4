
import axios from "axios";

const configOMB = {
    baseURL: 'http://www.omdbapi.com'
};

const key = '995f97b1';
const axiosInstance = axios.create(configOMB);

export const  API = {
    searchFilmByTitle: (title) => {
        const query = `/?apikey=${key}&s=${title}`;
        return axiosInstance.get(query)
    },
    searchFilmByType: (title, type) => {

    }
}


const handleClickSearch = async () => {
    try {
        const {data} = await API.searchFilmByTitle(searchName);
        const {Search, Error, Response} = data;
        Response === 'True' ? JSON.stringify(Search) : Error;
    } catch (err) {
        console.log('err', err)
    }
}

const handleChange = (e) => {
    const text = e.currentTarget;
    console.log(text)
}

//----------------------------------------------------------------------------------------------------------------------
let bodyEl = document.querySelector('#root');
bodyEl.style.margin = '100px 0 0 250px'

let h1El = document.createElement('h1');
h1El.innerText = 'Promise';
bodyEl.appendChild(h1El);

let h2El = document.createElement('h2');
h2El.innerText = 'Search by name';
bodyEl.appendChild(h2El);

let inputEl = document.createElement('input');
bodyEl.appendChild(inputEl)
inputEl.addEventListener('change', handleChange)

let buttonEl = document.createElement('button');
buttonEl.innerText = 'Search'
bodyEl.appendChild(buttonEl)
buttonEl.addEventListener('click', handleClickSearch)

let h2El2 = document.createElement('h2');
h2El2.innerText = 'Search by type';
bodyEl.appendChild(h2El2);

let inputEl2 = document.createElement('input');
bodyEl.appendChild(inputEl2)

let buttonEl2 = document.createElement('button');
buttonEl2.innerText = 'Movie'
bodyEl.appendChild(buttonEl2)

let buttonEl3 = document.createElement('button');
buttonEl3.innerText = 'Series'
bodyEl.appendChild(buttonEl3)

//----------------------------------------------------------------------------------------------------------------------


