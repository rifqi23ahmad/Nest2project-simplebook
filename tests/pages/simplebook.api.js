import BaseAPI from '../pages/base.api.js';

const SimpleBookAPI = {
    getStatus: (data) => BaseAPI.get('/status', data),
    getListofBooks: () => BaseAPI.get('/books'),
    //untuk get bookId dengan data dynamic
    //getvalidSingleBook: (bookId) => BaseAPI.get(`/books/${bookId}`),
    //ini untuk data static
    getvalidSingleBook: (data) => BaseAPI.get('/books/1', data),
    getBookbyType: () => BaseAPI.get('/books?type=fiction'),
    getBookbyLimit: () => BaseAPI.get('/books?limit=2'),
    submitOrder: (data) => BaseAPI.post('/orders', data),
    getAllorder: () => BaseAPI.get('/orders'),
    updateBook: () => BaseAPI.patch('/orders'),

}

export default SimpleBookAPI;
