/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */
// user =>name,age
interface user {
    name: string;
    age: number;
}

type Tuser = {
    name: string;
    age: number;
};

/**
 * Merge
 */
// kalau ada nama interface yang sama pasti akan di gabung

interface Song {
    nameArtist: string;
}
interface Song {
    song: string;
}

const mySong: Song = {
    nameArtist: 'lala',
    song: 'munaroh',
};
// kalo type tidak bisa dengan nama yang sama
/**
 * Intersection & Union
 */
type TypeA = {
    id: number;
    propA: string;
};
type TypeB = {
    id: number;
    propB: string;
};

//Cara intersection

type intersactionAB = TypeA & TypeB;

// Cara union

type unionAB = TypeA | TypeB;

let myData: intersactionAB = {
    id: 1,
    propA: 'test a',
    propB: 'test B',
};

let myDataUnion: unionAB = {
    id: 1,
    propA: 'test a',
    // propB: 'test B',
};

/**
 * Implements
 */

// bisa di pakai interface dan type
interface Person {
    name: string;
    age: number;
    getName(id: number): string;
}
class People implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(id: number): string {
        return 'yessss';
    }
}

/**
 * Extend
 */
interface Address {
    street: string;
}

interface Person1 extends Address {
    name: string;
    age: number;
    getName(id: number): string;
}
class People1 implements Person1 {
    name: string;
    age: number;
    street: string;
    constructor(name: string, age: number, street: string) {
        this.name = name;
        this.age = age;
        this.street = street;
    }
    getName(id: number): string {
        return 'yessss';
    }
}
