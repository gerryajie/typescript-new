"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};
let product1;
product1 = {
    id: 'Id-3',
    productName: 'Macbook Air',
    price: 2000,
    note: 'jpajf',
};
let product2;
let product3;
let product5;
product5 = {
    id: 'ID-1',
    productName: 'Asus xxx',
    price: 5000000,
    productDetail: {
        year: 2016,
        storage: 256,
    },
};
let user;
user = {
    id: 'U-1',
    name: 'Adi dodi',
    address: [
        {
            street: 'Jln. Setapak No.2',
            city: 'Jakarta',
        },
        {
            street: 'Jln. Lebar sekali no 10',
            city: 'Medan',
        },
    ],
};
console.log(user.address[0].city, 'usernya');
let cart;
cart = {
    idCart: 'C1',
    dateOrdered: new Date('2020-05-20'),
    item: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};
console.log(cart.item.p1.name, 'ini cart name');
let fullName = {
    firstName: 'Gerry',
    lastName: 'Pratama',
};
let fullName1 = {
    firstName1: 'Gerry',
    lastName1: 'Pratama',
};
let { firstName, lastName } = fullName;
let { firstName1, lastName1 } = fullName1;
console.log(fullName, 'ini fullName');
console.log(fullName1.firstName1, 'ini fullName 2');
