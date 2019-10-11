'use strict';

const Queue = require('../Queue/queue');

let peopleQueue = '';

const cuid = require('cuid');

const PeopleService = {

    //send back all people in queue
    getAllPeople() {
        if(!peopleQueue) {
            return [];
        }
        else{
            console.log(`GetAll queue = ${peopleQueue}`);
            return this.queueToArray(peopleQueue);
        }
    },
    //add a person to the queue
    addPerson(userName) {
        if(!peopleQueue) {
            peopleQueue = new Queue();
        }
        const userId = cuid();
        const person = {id: userId, name: userName};
        peopleQueue.enqueue(person);
        console.log(`AddPerson queue = ${peopleQueue}`);
        return userId;
    },

    //remove a person from the queue
    removePerson() {
        if(peopleQueue) {
            peopleQueue.dequeue();
        }
        console.log(peopleQueue);
    },

    //turn queue to an array
    queueToArray(queue) {
        let results = [];
        let curr = queue.first;
        while(curr !== null) {
            results.push(curr.value);
            curr = curr.next;
        }
        return results;
    }

};

module.exports = PeopleService;