const KoaRouter = require('koa-router');
const createAuthRoutes = require('./routes/auth');
const createBTCRoutes = require('./routes/btc');

const router = new KoaRouter();
// const protectedRouter = new KoaRouter();

createAuthRoutes(router);
createBTCRoutes(router);

module.exports = {
	router,
	// protectedRouter,
};