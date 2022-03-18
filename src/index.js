import html from './index.html';
import {getState, setState} from "./state";
import {fetchNews} from "./news-api";
import styles from "./index.scss";

document.body.innerHTML = html;

document.querySelector('button.load-more')
    .addEventListener('click', async () => {
        const state = getState();
        const news = await fetchNews(state);
        setState({
            news: [
                ...state.news,
                ...news
            ]
        })
    });

document.querySelector('input.input-source')
    .addEventListener('input', (event) => {
        const state = getState();
        setState({
            filter: {
                ...state.filter,
                source: event.target.value
            }
        })
    })

document.querySelector('input.input-query')
    .addEventListener('input', (event) => {
        const state = getState();
        setState({
            filter: {
                ...state.filter,
                query: event.target.value
            }
        })
    })

document.querySelector('form.filter-form')
    .addEventListener('submit', async () => {
        const state = getState();
        const news = await fetchNews(state);
        setState({
            news: [
                ...state.news,
                ...news
            ]
        })
    })
