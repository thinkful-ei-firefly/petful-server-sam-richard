'use strict';

const express = require('express');
const CatsService = require('./cats-service');

const catsRouter = express.Router();


catsRouter
    .route('/getAllCats')
    .get((req, res, next) => {
        const catsArr = CatsService.getAllCats();
        res.json( catsArr );
    });

catsRouter
    .route('/adoptCat')
    .delete((req, res, next) => {
        CatsService.adoptCat();
        res
            .status(204)
            .end();
    });


module.exports = catsRouter;