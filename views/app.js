const express = require('express');
const app = express();
const port = 3001;

// Datos ficticios de noticias (puedes reemplazarlos con tus propios datos)
const noticias = [
    {
        titulo: 'Noticia 1',
        fecha: '2023-09-20',
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        titulo: 'Noticia 2',
        fecha: '2023-09-19',
        contenido: 'Praesent vitae cursus nulla, sit amet tristique libero.'
    },
    {
        titulo: 'Noticia 3',
        fecha: '2023-09-18',
        contenido: 'Vestibulum sed efficitur quam. Suspendisse potenti.'
    }
];

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/noticias', (req, res) => {
    res.render('noticias', { noticias });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
