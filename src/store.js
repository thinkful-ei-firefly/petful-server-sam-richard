'use strict';

const store = {
    dogs: [
        {
            id: 1,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {
            id: 2,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 3,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 4,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 5,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 6,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 7,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 8,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 9,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {   id: 10,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        }
    ],

    cats: [
        {
            id: 1,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 2,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 3,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 4,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 5,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 6,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 7,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 8,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 9,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 10,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        }
    ]
};

module.exports = store;