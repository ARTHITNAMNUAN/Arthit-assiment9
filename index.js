const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Arthit Namnuan')
})
app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Arthit Namnuan',
        age: 21,
        apocalypse: 'Belive the Improssible is Possible',
        detail: 'More 2 Year ago I study at Rattanakonsin SomphotLatkrabang'
    }
    res.send(data)
})
app.get('/getabout', (req, res) => {
    let data = {
        name: 'Arthit Namnuan',
        age: 21,
        email: 'arthit.namn@bumail.net',
        address: '1171/41 Romklao Latkrabang 10520'
    }
    res.send(data)
})
app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'Arthit',
        project_description: 'You can see me',
        project_link: '-'
    }
    res.send(data)
})
app.get('/getcontact', (req, res) => {
    let data = {
        address: '1171/41 Romklao Latkrabang 10520',
        email: 'arthit.namn@bumail.net',
        phone_number: '0639236690'
    }
    res.send(data)
})
app.listen(3000, () => {
    console.log('Start server at port 3000')
})