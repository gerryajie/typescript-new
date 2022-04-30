"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mySong = {
    nameArtist: 'lala',
    song: 'munaroh',
};
let myData = {
    id: 1,
    propA: 'test a',
    propB: 'test B',
};
let myDataUnion = {
    id: 1,
    propA: 'test a',
};
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName(id) {
        return 'yessss';
    }
}
class People1 {
    constructor(name, age, street) {
        this.name = name;
        this.age = age;
        this.street = street;
    }
    getName(id) {
        return 'yessss';
    }
}
