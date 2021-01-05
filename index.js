const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
const jsesc = require('jsesc');

(async () => {

    app.use(async ctx => {

            ctx.body = "Please specify the URL in the 'url' query string.";

    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`running on port ${PORT}`));

})();
