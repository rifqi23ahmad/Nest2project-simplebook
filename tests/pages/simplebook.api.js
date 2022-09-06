import BaseAPI from '../pages/base.api.js';

const SimpleBookAPI = {
    getStatus: (data) => BaseAPI.get('/status', data),
    getListofBooks: () => BaseAPI.get('/books'),
    //untuk get bookId dengan data dynamic
    getvalidSingleBook: (bookId) => BaseAPI.get(`/books/${bookId}`)
}

export default SimpleBookAPI;