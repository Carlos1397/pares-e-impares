const express = require('express')
const app = express();
const port = 3000;
app.set("view engine", "pug");
app.set("views", "views");
app.get('/', (req, res) => {
    const num = 50
    res.render('index', { num })
})
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`http:\\localhost:${port}`)
});