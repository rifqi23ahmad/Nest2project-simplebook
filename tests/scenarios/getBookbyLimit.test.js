import chai, { expect } from 'chai';
import { assert } from 'chai';
import jsonSchema from 'chai-json-schema';
chai.use(jsonSchema);

import SimpleBookAPI from '../pages/simplebook.api';
import { GET_LISTOFBOOKS_SCHEMA } from '../schema/getListofBooks.schema';

describe('Get list and status', () => {
    it('Verify user can get list of books filter by limit', async () => {
        
        const response = await SimpleBookAPI.getBookbyLimit()
        
        assert.equal(response.status, 200);
        expect(response.data).to.jsonSchema(GET_LISTOFBOOKS_SCHEMA);
    });

    it('Verify the limit are correct', async () => {
        const response = await SimpleBookAPI.getBookbyLimit()
        assert.equal(response.status, 200);
        assert.equal(response.data.length, 2);
        
    });
});

