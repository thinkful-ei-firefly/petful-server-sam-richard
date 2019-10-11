'use strict';

const express = require('express');
const jsonBodyParser = express.json();
const PeopleService = require('./people-service');

const peopleRouter = express.Router();

peopleRouter
    .route('/')
    .get((req, res) => {
        const peopleArr = PeopleService.getAllPeople();
        res.json(peopleArr);
    })
    .post(jsonBodyParser, (req, res) => {
        const name = req.body.name;
        const userId = PeopleService.addPerson(name);
        res
            .json(userId)
            .status(201);
    })
    .delete((req, res) => {
        PeopleService.removePerson();
        res
            .status(204)
            .end();
    });

module.exports = peopleRouter;

// people array [ {id: #, name: 'userName'}, . . .]
