"use strict";
const logger = require('../src/middleware/logger')
describe('testing logger middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn()
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    })
    afterAll(() => {

        consoleSpy.mockRestore();
    })
    it('tests log', () => {
        logger(req, res, next)
        expect(consoleSpy).toHaveBeenCalled();


    })
    it('tests next function', () => {
        logger(req, res, next)
        expect(next).toHaveBeenCalled();
    })
})