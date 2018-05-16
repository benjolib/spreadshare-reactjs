// server.js
const next = require('next')
// const routes = require('./routes')
// const forceSSL =  require('express-force-ssl')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const {parse} = require('url')
// const handler = routes.getRequestHandler(app)
const dev = process.env.NODE_ENV !== 'production'
const prod = process.env.NODE_ENV == 'production'
const handle = app.getRequestHandler()

// With express
const express = require('express')
app.prepare().then(() => {

    const server = express();
    server.use('/static', express.static('static'))
    // server.use('_next/static', express.static('/_next/static'))
    // server.use(handler).listen(3000)

    /*if(prod){
        server.set('forceSSLOptions', {
            enable301Redirects: true,
            trustXFPHeader: false,
            httpsPort: 443,
            sslRequiredMessage: 'SSL Required.'
        });
        server.use(forceSSL);
    }*/


    server.get('/', (req, res) => {
        const {pathname, query} = parse(req.url, true)
        if (pathname === '/') {
            return app.render(req, res, '/index', query)
        }
    })
    server.get('/feed', (req, res) => {
        const {pathname, query} = parse(req.url, true)
        return app.render(req, res, '/Feed', query)
    })

    server.get('/list', (req, res) => {
        return app.render(req, res, '/List')
    })

    server.get('/faq', (req, res) => {
        const {pathname, query} = parse(req.url, true)
        return app.render(req, res, '/Faq', {
            slug: 'company'
        })
    })

    server.get('/faq/:slug', (req, res) => {
        const {pathname, query} = parse(req.url, true)
        return app.render(req, res, '/Faq', {
            slug: req.params.slug
        })
    })

    server.get('/about', (req, res) => {
        const {pathname, query} = parse(req.url, true)
        return app.render(req, res, '/About', {
            slug: 'vision'
        })
    })

    server.get('/about/:slug', (req, res) => {
        const {pathname, query} = parse(req.url, true)
        return app.render(req, res, '/About', {
            slug: req.params.slug
        })
    })

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    })

    server.listen(prod ? 80 : 3000, err => {
        if (err) throw err
        console.log('> Ready 80:3000')
    })

    /*if(prod){

        let options = {
            key: fs.readFileSync('/root/ssl/privatekey.pem'),
            cert: fs.readFileSync('/root/ssl/cert.pem'),
        };

        https.createServer(options, server).listen(443, ()=>{
            console.log("Express server listening on port " + 443);
        });
    }*/

})

// Without express
/*
const {createServer} = require('http')
app.prepare().then(() => {
	createServer(handler).listen(3000)
})*/
