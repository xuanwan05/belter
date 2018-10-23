/* @flow */

import { extendUrl } from '../../../src';

describe('extend url cases', () => {

    it('should add query parameters to url', () => {
        let query1 = {
            query: {
                bar: 'baz'
            }
        };

        let result1 = extendUrl('http://foo.com', query1);
        let expectedResult1 = 'http://foo.com?bar=baz';

        if (result1 !== expectedResult1) {
            throw new Error(`Expected result1 to equal ${ expectedResult1 }, got ${ result1 }`);
        }
    });

    it('should add query parameters to url when one is already there', () => {
        let query2 = {
            query: {
                bar: 'baz'
            }
        };

        let result2 = extendUrl('http://foo.com?a=b', query2);
        let expectedResult2 = 'http://foo.com?a=b&bar=baz';

        if (result2 !== expectedResult2) {
            throw new Error(`Expected result2 to equal ${ expectedResult2 }, got ${ result2 }`);
        }
    });

    it('should add query parameters and hashes to url', () => {
        let query3 = {
            query: {
                bar: 'baz'
            },
            hash: {
                blerp: 'blorp'
            }
        };

        let result3 = extendUrl('http://foo.com', query3);
        let expectedResult3 = 'http://foo.com?bar=baz#blerp=blorp';

        if (result3 !== expectedResult3) {
            throw new Error(`Expected result3 to equal ${ expectedResult3 }, got ${ result3 }`);
        }
    });

    it('should add query parameters and hashes to url when they already exist', () => {
        let query4 = {
            query: {
                bar: 'baz'
            },
            hash: {
                blerp: 'blorp'
            }
        };

        let result4 = extendUrl('http://foo.com?a=1#hello=goodbye', query4);
        let expectedResult4 = 'http://foo.com?a=1&bar=baz#hello=goodbye&blerp=blorp';

        if (result4 !== expectedResult4) {
            throw new Error(`Expected result4 to equal ${ expectedResult4 }, got ${ result4 }`);
        }
    });
});
