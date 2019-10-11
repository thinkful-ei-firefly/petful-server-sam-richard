'use strict';

const Queue = require('../Queue/queue');
const store = require('../store');

let dogsQueue = '';

const DogsService = {

    // get all dogs
    getAllDogs() {
        //check if dogQueue exists
        if(!dogsQueue) 
            dogsQueue = new Queue();
        let qSize = this.queueToArray(dogsQueue).length;
        while(qSize < 8) {
            this.addDog(dogsQueue);
            qSize++;
        }
        let results = this.queueToArray(dogsQueue); 
        return results;
    },
    // add a dog to the queue
    addDog(queue) {
        const dogNum = Math.ceil(10 * Math.random() - 1);
        const dog = store.dogs[dogNum];
        queue.enqueue(dog);
    },
    // remove the next dog from the queue
    adoptDog() {
        if(dogsQueue) {
            dogsQueue.dequeue();
        }
    },
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

module.exports = DogsService;