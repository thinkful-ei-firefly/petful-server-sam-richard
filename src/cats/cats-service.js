'use strict';

const Queue = require('../Queue/queue');
const store = require('../store');

let catsQueue = '';

const CatsService = {

    // get all dogs
    getAllCats() {
        //check if catsQueue exists
        if(!catsQueue) 
            catsQueue = new Queue();
        let qSize = this.queueToArray(catsQueue).length;
        while(qSize < 8) {
            this.addCat(catsQueue);
            qSize++;
        }
        let results = this.queueToArray(catsQueue); 
        console.log(`results = ${results[0].name}`);
        return results;
    },
    // add a dog to the queue
    addCat(queue) {
        const catnum = Math.ceil(10* Math.random() - 1);
        const cat = store.cats[catnum];
        queue.enqueue(cat);
    },
    // remove the next dog from the queue
    adoptCat() {
        if(catsQueue) {
            catsQueue.dequeue();
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

module.exports = CatsService;