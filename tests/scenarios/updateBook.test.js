import { assert } from 'chai';
import SimpleBookAPI from '../pages/simplebook.api';
import * as data from '../data/patchbook';
import BaseAPI from '../pages/base.api'
import request from 'supertest';


const TOKEN = '890047b9b69a433';
describe('Verify user can update with PATCH Method)', () => {
    it('Verify user name  should be update ', async () => {
        const response = await SimpleBookAPI.updateBook(data.PATCH_BOOK)
        request(BaseAPI)
        .put('/orders/PnYNjSX3bv76a5g1k8WZs' )
        .send(data.PATCH_BOOK.customerName)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${TOKEN}`)
        .end(function(err, response) {
            assert(response.body.customerName).to.be.equal(data.PATCH_BOOK.customerName);
            
            if (err) {
                throw err;
            };
            
        });
        console.log (response.data);
    });
   
});