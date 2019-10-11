'use strict';

const store = {
    dogs: [
        {
            id: 1,
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'Golden Retriever',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
        },
        {
            id: 2,
            imageURL: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg',
            imageDescription: 'Chinook',
            name: 'Cooper',
            sex: 'Male',
            age: 5,
            breed: 'Chinook',
            story: 'Unknown'
        },
        {   id: 3,
            imageURL: 'http://cdn.akc.org/content/hero/gsd_bred_to_do_header_.jpg',
            imageDescription: 'German Shepherd',
            name: 'Lucy',
            sex: 'Female',
            age: 9,
            breed: 'German Shepherd',
            story: 'Dropped off at shelter'
        },
        {   id: 4,
            imageURL: 'https://www.k9ofmine.com/wp-content/uploads/2017/11/best-food-for-rottweilers-1150x700.jpg',
            imageDescription: 'Rottweiler',
            name: 'Rocky',
            sex: 'Male',
            age: 2,
            breed: 'Rottweiler',
            story: 'Rescue'
        },
        {   id: 5,
            imageURL: 'https://www.pets4homes.co.uk/images/articles/1532/large/five-useful-things-to-know-about-the-shih-tzu-puppy-5ce28dbbd4f12.jpg',
            imageDescription: 'Shih Tzu',
            name: 'Bear',
            sex: 'Male',
            age: 1,
            breed: 'Shih Tzu',
            story: 'Found and brought into shelter'
        },
        {   id: 6,
            imageURL: 'https://www.listland.com/wp-content/uploads/2019/01/Poodles-696x522.jpg',
            imageDescription: 'Poodle',
            name: 'Maggie',
            sex: 'Female',
            age: 4,
            breed: 'Poodle',
            story: 'Owner no longer wanted'
        },
        {   id: 7,
            imageURL: 'https://i.pinimg.com/originals/61/d6/14/61d614da16b48eb4817d94b2fad5e29a.jpg',
            imageDescription: 'Bedlington Terrier',
            name: 'Oliver',
            sex: 'Male',
            age: 2,
            breed: 'Bedlington Terrier',
            story: 'Owner Passed away'
        },
        {   id: 8,
            imageURL: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/clumber-spaniel-card-small.jpg?bust=1535569021',
            imageDescription: 'Clumber Spaniel',
            name: 'Daisy',
            sex: 'Female',
            age: 1,
            breed: 'Clumber Spaniel',
            story: 'Dropped off at shelter'
        },
        {   id: 9,
            imageURL: 'https://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23020_dachshund-dog-breed.jpg',
            imageDescription: 'Daschund',
            name: 'Sadi',
            sex: 'Female',
            age: 7,
            breed: 'Daschund',
            story: 'Found and brought into shelter'
        },
        {   id: 10,
            imageURL: 'https://i.ytimg.com/vi/bx7BjjqHf2U/maxresdefault.jpg',
            imageDescription: 'Beagle',
            name: 'Tucker',
            sex: 'Male',
            age: 3,
            breed: 'Beagle',
            story: 'Owner Passed away'
        },
        {   id: 11,
            imageURL: 'https://images.newscientist.com/wp-content/uploads/2009/01/dn16418-5_500.jpg?width=800',
            imageDescription: 'Bulldog',
            name: 'Luna',
            sex: 'Female',
            age: 4,
            breed: 'Bulldog',
            story: 'Unknown'
        },
        {   id: 12,
            imageURL: 'https://i.ytimg.com/vi/Fjo8xQf2QnY/maxresdefault.jpg',
            imageDescription: 'Siberian Husky',
            name: 'Max',
            sex: 'Male',
            age: 1,
            breed: 'Siberian Husky',
            story: 'Rescue'
        }
    ],

    cats: [
        {
            id: 1,
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Bengal',
            name: 'Casper',
            sex: 'Male',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
        },
        {
            id: 2,
            imageURL:'https://cdn3-www.cattime.com/assets/uploads/2011/12/file_2676_persian-460x290-460x290.jpg', 
            imageDescription: 'Persian',
            name: 'Fluffy',
            sex: 'Female',
            age: 1,
            breed: 'Persian',
            story: 'Owner Passed away'
        },
        {
            id: 3,
            imageURL:'https://www.pets4homes.co.uk/images/articles/4007/large/is-the-british-shorthair-cat-britains-most-popular-pedigree-58d3e0d540dda.jpg', 
            imageDescription: 'British Shorthair',
            name: 'Fluffy',
            sex: 'Female',
            age: 4,
            breed: 'British Shorthair',
            story: 'Found and brought into shelter'
        },
        {
            id: 4,
            imageURL:'https://www.thesprucepets.com/thmb/zWFJ8eKg2SWxBx0QVhiYYB2gQpM=/1080x721/filters:no_upscale()/37348687_179210919505845_8579658165484781568_n-5b69b1b346e0fb00500b0880.jpg', 
            imageDescription: 'Siamese',
            name: 'Lucky',
            sex: 'Male',
            age: 6,
            breed: 'Siamese',
            story: 'Wandered into the shelter one day'
        },
        {
            id: 5,
            imageURL:'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Elf-Cat_01.jpg', 
            imageDescription: 'Sphynx',
            name: 'Princess',
            sex: 'Female',
            age: 4,
            breed: 'Sphynx',
            story: 'Owner no longer wanted'
        },
        {
            id: 6,
            imageURL:'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555342701/shape/mentalfloss/mainecoonhed.png', 
            imageDescription: 'Maine Coon',
            name: 'Simba',
            sex: 'Male',
            age: 8,
            breed: 'Maine Coon',
            story: 'Thrown on the street'
        },
        {
            id: 7,
            imageURL:'https://www.thehappycatsite.com/wp-content/uploads/2018/06/ragdoll-cat-colors-header.jpg', 
            imageDescription: 'Ragdoll',
            name: 'Patch',
            sex: 'Female',
            age: 9,
            breed: 'Ragdoll',
            story: 'Owner passed away'
        },
        {
            id: 8,
            imageURL:'https://www.catster.com/wp-content/uploads/2017/10/Russian-Blue-on-blue-background.jpg', 
            imageDescription: 'Russian Blue',
            name: 'Smokey',
            sex: 'Male',
            age: 4,
            breed: 'Russian Blue',
            story: 'Dropped off at shelter'
        },
        {
            id: 9,
            imageURL:'https://i.redd.it/0nybg7zed9w21.png', 
            imageDescription: 'Munchkin',
            name: 'Sam',
            sex: 'Female',
            age: 11,
            breed: 'Munchkin',
            story: 'Thrown on the street'
        },
        {
            id: 10,
            imageURL:'https://imagevars.gulfnews.com/2018/8/3/1_16a08500d3c.2261003_127640103_16a08500d3c_large.jpg', 
            imageDescription: 'Scottish Fold',
            name: 'Tigger',
            sex: 'Male',
            age: 7,
            breed: 'Scottish Fold',
            story: 'Found and brought into shelter'
        }
    ]
};

module.exports = store;