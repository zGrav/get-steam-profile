/* eslint-env jest */
require('isomorphic-fetch');
const getSteamID = require('../index');
const apiToken = '';
const steamID64 = '76561198028360350';

describe('API using Promises', () => {

	test('getSteamID', async function() {
    await getSteamID(apiToken, steamID64).then(function(result) {
       expect(result).toBeDefined();
    })
	}, 30000);
});
