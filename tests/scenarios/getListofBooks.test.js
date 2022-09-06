//import { assert } from 'chai'; => bisa tanpa ini
import chai, { expect } from 'chai';
import jsonSchema from 'chai-json-schema';
chai.use(jsonSchema);

import SimpleBookAPI from '../pages/simplebook.api';
// import * as data from '../data/user.data.js';
import { GET_LISTOFBOOKS_SCHEMA } from '../schema/getListofBooks.schema';

describe('Get list and status', () => {
    it('Verify user able to get list of books', async () => {
        const response = await SimpleBookAPI.getListofBooks()
        //console.log(response.data)
        //kenapa pakai expect karena kita mau get data hanya dengan endpoint, tanpa auth atau apapun
        expect(response.data).to.jsonSchema(GET_LISTOFBOOKS_SCHEMA)
        
        //jika semisal ingin mencari byid=1 yaitu => expect(response.data[0].id).to.equal(1)

    });
});