import {  expect } from 'chai';
import SimpleBookAPI from '../pages/simplebook.api';
import * as data from '../data/user.data';
import BaseAPI from '../pages/base.api'
import request from 'supertest';


const TOKEN = '890047b9b69a433';
describe('Verify user can update with PATCH Method)', () => {
    it('Verify user name  should be update ', async () => {
        const response = await SimpleBookAPI.updateBook(data.PATCH_BOOK)

        request(BaseAPI)
        .patch('/orders/PnYNjSX3bv76a5g1k8WZs' )
        .send(data.PATCH_BOOK)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${TOKEN}`)
        .end(function(err, response) {
            expect(response.body.customerName).to.be.equal(data.PATCH_BOOK.customerName);
            
            if (err) {
                throw err;
            };
            
        });
    });
   
});