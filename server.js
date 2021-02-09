const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const conversor = require('./converteNumero')

app.use(express.static('.'))
app.use(express.json({limit: '1mb'}))
app.listen(3003, () => console.log('Executando'))

app.post('/formulario', (req, res) => {
    const decimal = conversor.calcula(req.body)
    // console.log(JSON.stringify(decimal))
    res.send(decimal)
    })

