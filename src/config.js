

'use strict';

require(`dotenv`).config();

/* eslint-disable no-undef */
const NODE_ENV = process.env.NODE_ENV || `development`;
const PORT = process.env.PORT || 8000;
const POSTGRE_PORT = process.env.POSTGRE_PORT || 5432;
const ROLLBAR_ACCESS_TOKEN = process.env.ROLLBAR_ACCESS_TOKEN || ``;

const Pack = require(`../package.json`);

const config = {
	development: {
		serverConfig: {
			port: PORT,
		},
		postgreConfig: {
			username: `doadmin`,
			password: `AVNS_WR7k0GOIJ8u1l-r1bzB`,
			host: `dbs-do-user-14012136-0.c.db.ondigitalocean.com`,
			port: 25060,
			database: 'defaultdb',
			dialect: `postgres`,
		},
		rollbarConfig: {
			accessToken: ``,
			captureUncaught: true,
			captureUnhandledRejections: true,
			reportErrorRequest: true,
		},
	},
	production: {
		serverConfig: {
			port: PORT,
		},
		postgreConfig: {
			username: `doadmin`,
			password: `AVNS_WR7k0GOIJ8u1l-r1bzB`,
			host: `dbs-do-user-14012136-0.c.db.ondigitalocean.com`,
			port: 25060,
			database: 'defaultdb',
			dialect: `postgres`,
		},
		rollbarConfig: {
			accessToken: ROLLBAR_ACCESS_TOKEN,
			captureUncaught: true,
			captureUnhandledRejections: true,
			reportErrorRequest: true,
		},
	},
};

module.exports = config[NODE_ENV];