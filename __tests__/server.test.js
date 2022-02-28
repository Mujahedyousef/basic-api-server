"use strict";
const server = require('../src/server')
const supertest = require('supertest');
const request = supertest(server.start)
let id;
describe('testing API', () => {

    it("test home route", async () => {
        let response = await request.get('/')
        expect(response.text).toEqual("Welcom in home page.")
    });

    it("test 404 on a bad route", async () => {
        let response = await request.get('/notFound')
        expect(response.status).toEqual(404)
    });

    it("404 on a bad method", async () => {
        let response = await request.head('/clothes')
        expect(response.status).toEqual(404)
    });
})

describe("testing clothes route", () => {


    it('test for get all clothes', async () => {
        let response = await request.get('/clothes')
        expect(response.status).toEqual(200)
    });


    it('test added new clothes post', async () => {
        let response = await request.post('/clothes')
            .send({
                clothesType: "Casual wear ", clothesSize: "[s,m,L,XL,XXL]"
            })
        expect(response.status).toEqual(201)
        id = response.body.id

    });

    it('test get clothes by id', async () => {
        let response = await request.get(`/clothes/${id}`)
        expect(response.status).toEqual(200)

    });

    it('test update clothes by id', async () => {
        let response = await request.put(`/clothes/${id}`).send({
            clothesType: "Business attire", clothesSize: "[XL,XXL]"
        })
        expect(response.status).toEqual(201)

    });

    it('test delete clothes by id', async () => {
        let response = await request.delete(`/clothes/${id}`)
        expect(response.status).toEqual(204)

    });

});

describe("testing food route", () => {


    it('test for get all food', async () => {
        let response = await request.get('/food')
        expect(response.status).toEqual(200)
    });

    it('test added new food post', async () => {
        let response = await request.post('/food').send({
            foodName: "Mansaf(The National Dish)", amountFood: "Big amount form meat and rice"
        })
        expect(response.status).toEqual(201)
        id = response.body.id

    });

    it('test get food by id', async () => {
        let response = await request.get(`/food/${id}`)
        expect(response.status).toEqual(200)

    });

    it('update food by id', async () => {
        let response = await request.put(`/food/${id}`).send({
            foodName: "Yalanji", amountFood: "where vine leaves are stuffed with rice and vegetables"
        })
        expect(response.status).toEqual(201)

    });

    it('delete food by id', async () => {
        let response = await request.delete(`/food/${id}`)
        expect(response.status).toEqual(204)

    });

});