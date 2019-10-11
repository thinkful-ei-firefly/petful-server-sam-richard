'use strict';

const express = require('express');
const DogsService = require('./dogs-service');

const dogsRouter = express.Router();


dogsRouter
    .route('/getAllDogs')
    .get((req, res) => {
        const dogsArr = DogsService.getAllDogs();
        res.json( dogsArr );
    });

dogsRouter
    .route('/adoptDog')
    .delete((req, res) => {
        DogsService.adoptDog();
        res
            .status(204)
            .end();
    });


module.exports = dogsRouter;