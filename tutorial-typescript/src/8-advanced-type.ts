/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: User) {}
// function CreateUser(data: Partial<User>) {}
// function CreateUser(data: Required<User>) {}
// function CreateUser(data: Pick<User, 'id' | 'name'>) {} //meilih  properti yang akan di asigned
// function CreateUser(data: Omit<User, 'id' | 'name'>) {} // ambil semua property selain id dan name
function CreateUser(data: Readonly<User>) {} // tidak bisa di assigned cuma bisa di baca

CreateUser({
    id: 1,
    name: 'doe',
    age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
/*
// case 1 : membuat record dengan flexible prperty name dan type :
// case 2 : membuat object dalam object





/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/

//  case 1:
type Response = Record<string, string | number>;
const message: Response = {
    id: '1',
    name: 'gerry',
    address: '',
    age: 10,
};

//case 2:

type Users = Record<string, User>;
const allUsers: Users = {
    '1': { id: 1, name: 'gerry', age: 20, createdAt: new Date() },
    '2': { id: 2, name: 'pratama', age: 25, createdAt: new Date() },
};

console.log(allUsers);

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

// type ExtType = Extract<'id' | 'name', 'id' | 'title'>; // kalo di hover akan id yang sama
// type a=keyof User

type EXtType = Extract<keyof User, keyof Post>;
type EXcType = Exclude<keyof User, keyof Post>;

type myNewtype = Record<string, EXtType>;
// let exampelnewtype: myNewtype = {};
// console.log(exampelnewtype);
