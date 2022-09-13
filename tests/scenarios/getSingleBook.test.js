import { assert } from 'chai';
import SimpleBookAPI from '../pages/simplebook.api';
import * as data from '../data/user.data.js';

describe('Get list and status', () => {
    it('Verify user able to get a single book', async () => {
        const response = await SimpleBookAPI.getvalidSingleBook(data);
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "name", "author", "type", "price", 'current-stock', "available"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.name);
        assert.isString(response.data.author);
        assert.isString(response.data.type);
        assert.isNumber(response.data.price);
        assert.isNumber(response.data["current-stock"]);
        assert.isBoolean(response.data.available);

    });


});