import newsItemHtml from './news-item.html';

let state = {
    pageSize: 5,
    news: [],
    filter: {
        query: '',
        source: ''
    }
}

export function redrawState(state) {
    document.querySelector('.input-query').value = state.filter.query;
    document.querySelector('.input-source').value = state.filter.source;
    const newsItemsContainer = document.querySelector('.news-items');
    const visibleNews = state.news
        .filter(p => !state.filter.query || p.title.includes(state.filter.query))
        .filter(p => !state.filter.source || p.source.name.includes(state.filter.source));
    newsItemsContainer.innerHTML = visibleNews
        .map(p =>
            newsItemHtml.replace('{{title}}', p.title)
                .replace('{{author}}', p.author || 'Unknown')
                .replace('{{publishedAt}}', p.publishedAt.toString())
                .replace('{{url}}', p.url)
        ).join('');
    if (newsItemsContainer.innerHTML === '') {
        newsItemsContainer.innerHTML = 'There are no articles matching your request';
    }
}

export function setState(newState, shouldRedraw = true) {
    console.log(state);
    state = {...state, ...newState};
    if (shouldRedraw) {
        redrawState(state);
    }
}

export function getState() {
    return {
        ...state
    }
}
