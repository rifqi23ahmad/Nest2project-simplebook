import { assert } from 'chai';
import SimpleBookAPI from '../pages/simplebook.api';
import * as data from '../data/user.data.js';

describe('Get list and status', () => {
    it('Verify user get the status API', async () => {
        const response = await SimpleBookAPI.getStatus(data.GET_STATUS);
        //console.log(response.data)
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["status"]);
        assert.isString(response.data.status);

    });


});
