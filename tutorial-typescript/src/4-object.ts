/* eslint-disable no-unused-labels */
/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/
//type infrence
let product = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};
//inline interface
let product1: {
    id: string;
    productName: string;
    price: number;
    note: string;
};

product1 = {
    id: 'Id-3',
    productName: 'Macbook Air',
    price: 2000,
    note: 'jpajf',
};

interface Product {
    id: string;
    productName: string;
    price: number;
    note: string;
}
let product2: Product;
let product3: Product;

/**
 * 2. Nested Object
 */

//inline interface

interface Item {
    id: string;
    productName: string;
    price: number;
    productDetail: ItemDetail;
}
interface ItemDetail {
    year: number;
    storage: number;
}

let product5: Item;
product5 = {
    id: 'ID-1',
    productName: 'Asus xxx',
    price: 5000000,
    productDetail: {
        year: 2016,
        storage: 256,
    },
};

/*
  


/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

//solution

interface Address {
    street: string;
    city: string;
}

interface User {
    id: string;
    name: string;
    address: Array<Address>;
}

let user: User;
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
/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/
//solution

interface CartItem {
    id: string;
    name: string;
    qty: number;
}

interface Cart {
    idCart: string;
    dateOrdered: Date;
    item: {
        [key: string]: CartItem;
    };
}
let cart: Cart;
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
/**
 * 5. Object Destructuring
 */

let fullName = {
    firstName: 'Gerry',
    lastName: 'Pratama',
};
let fullName1 = {
    firstName1: 'Gerry',
    lastName1: 'Pratama',
};
// type infrence
let { firstName, lastName } = fullName;

//inline interface
let { firstName1, lastName1 }: { firstName1: string; lastName1: string } = fullName1;
console.log(fullName, 'ini fullName');
console.log(fullName1.firstName1, 'ini fullName 2');
