const express = require('express')

const server = express()

const nunjucks = require('nunjucks')

server.use(express.static('views'))
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.post('/', (req, res) => {
    const name = req.body.name;
    const telephone = req.body.tel;
    const howWeMet = [
        req.body.inputGroupSelect
    ];
    const socialNetworks = [
        req.body.facebook,
        req.body.linkedin,
        req.body.instagram
    ];
    
    res.json({ 
        name,
        telephone,
        howWeMet,
        socialNetworks
    })
})

server.get('/', (req, res) => {
    res.render('index.html')
})

server.listen(8080, () => {
    console.log('SERVIDOR NO AR!')
})