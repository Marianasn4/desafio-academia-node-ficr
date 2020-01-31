const express = require('express');
const router = require('express');
const routenotfound = require('./routenotfound')


app.get('/api/curriculo',(req, res,) => {
    res.render('curriculo');
});

router.use(routenotfound)

module.exports = router;

