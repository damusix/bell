'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');


const { before, describe, it } = exports.lab = Lab.script();
const expect = Code.expect;


describe('import()', () => {

    let Bell;

    before(async () => {

        Bell = await import('../lib/index.js');
    });

    it('exposes all methods and classes as named imports', () => {

        const needed = [
            'default',
            'oauth',
            'plugin',
            'providers',
            'simulate'
        ]

        const keys = Object.keys(Bell);

        for (const k in needed) {

            expect(keys, `method or key: ${k}`).to.include(k);
        }

    });
});
