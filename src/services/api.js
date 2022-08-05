import  axios  from  'axios' ;

const  URL  =  'https://pixabay.com/api/?q=' ;
const API_KEY = '12026790-4d5cc9bbcb714fa6b48cd35d3';

export class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImg() {
        const response = await axios.get(
            `${URL}${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        ) ;
        this.incrementPage();
        return response.data.hits;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}