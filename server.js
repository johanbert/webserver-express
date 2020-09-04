const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
// un middleware es una instruccion o callback que se va a 
// ejecutar siempre sin importar que URL pide la persona
app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// app.engine('html', require('hbs').__express);
app.get('/', (req, res) => {
    let jsonAnswer = {
        name: 'johanbert'
    }
    res.render('home', jsonAnswer);
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})