import chai, { expect } from 'chai';
import { assert } from 'chai';
import jsonSchema from 'chai-json-schema';
chai.use(jsonSchema);

import SimpleBookAPI from '../pages/simplebook.api';
import { GET_LISTOFBOOKS_SCHEMA } from '../schema/getListofBooks.schema';

describe('Get list and status', () => {
    it('Verify user can get list of books filter by type', async () => {
        const response = await SimpleBookAPI.getBookbyType()
        assert.equal(response.status, 200);
        expect(response.data).to.jsonSchema(GET_LISTOFBOOKS_SCHEMA);
    
    });

    it('Verify all type are fiction', async () => {
        const response = await SimpleBookAPI.getBookbyType()
        assert.equal(response.status, 200);
        //looping to check all the list of book
        for (let index = 0; index < response.data.length; index++) {
            //console.log(response.data[index])
            const type = response.data[index].type;
            assert.equal(type,"fiction")
        }
    });

});
