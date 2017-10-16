const fetch = require("isomorphic-fetch");

function getSteamID(apiToken, steamID64) {
  const API_ENDPOINT = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiToken}&steamids=${steamID64}`;

  return fetch(API_ENDPOINT, {
		method: 'GET',
	})
		.then((response) => {
			if (!response.ok) {
				return Promise.reject(new Error(`Response status ${response.status}`));
			}

			const contentType = response.headers.get('content-type');

			if (!contentType || contentType.indexOf('application/json') === -1) {
				console.log('getSteamID', new Error('Response is not json'));
				return Promise.reject(new Error('Response is not json'));
			}

			return response.json();
		},
		(err) => {
			console.log('getSteamID', err);
			return Promise.reject(err);
		})
		.catch((err) => {
			console.log('getSteamID', err);
			return Promise.resolve();
		});
}

module.exports = getSteamID;
