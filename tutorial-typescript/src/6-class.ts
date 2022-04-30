/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> outputnya Object Instance
//object literal vs object instance => object instance fiturnya lebih komplit/banyak

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    // property
    id: number;
    firstName: string;
    lastName: string;
    private token: string;
    protected save: boolean;
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;

    //method
    login(userName: string, password: string) {
        this.retryLogin += 1; //jika sala akan bertambah 1
        if (userName == 'admin' && password == 'admin') {
            return true;
        }
        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'Max login Attempt';
        }
        return false;
    }
    register() {}
    constructor(id: number, firstName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = '';
        this.save = false;
        this.done = false;
    }
}

User.MAX_FAILED_LOGIN = 4;

let myUser = new User(1, 'gerry', 'pratama');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('admin', 'admin'));
class Enchaceuser extends User {
    location: string;
    constructor(location: string, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myNewUser = new Enchaceuser('jakarta', 2, 'ucok', 'cool');
