import { assert } from 'chai';
import SimpleBookAPI from '../pages/simplebook.api';
import * as data from '../data/user.data.js';

describe('Order Book', () => {
    it('User get orderID', async () => {
        const response = await SimpleBookAPI.submitOrder(data.ORDER_BOOK);
        //console.log(response.data)
        assert.equal(response.status, 201);
        assert.containsAllKeys(response.data, ["created", "orderId"]);
        assert.isBoolean(response.data.created);
        assert.isString(response.data.orderId);
        

    });


});
