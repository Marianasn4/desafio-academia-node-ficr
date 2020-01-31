const express = require('express');
const router = express.Router();
const port = 3000;
const app = express();


app.get('/curriculo',(req, res, next) => {
    res.render('curriculo');
});

module.exports = router;

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})