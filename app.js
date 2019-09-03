const express = require('express')
var path = require('path');
var router = express.Router()


const app = express()
const port = 3000

// router.get('/', (req, res) => res.send('index.html'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.get('/storedAttackStore', (req, res) => res.sendFile(path.join(__dirname + '/storedAttackStore.html')))
app.get('/storedAttackRetrieve', (req, res) => res.sendFile(path.join(__dirname + '/storedAttackRetrieve.html')))
app.get('/reflectedAttack', (req, res) => res.sendFile(path.join(__dirname + '/reflectedAttack.html')))
app.get('/domAttack', (req, res) => res.sendFile(path.join(__dirname + '/domAttack.html')))
app.get('/js', (req, res) => res.sendFile(path.join(__dirname + '/learnjs.html')))

app.use(function (req, res, next) {
    res.status(404).send("Sorry couldn't find that!")
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))