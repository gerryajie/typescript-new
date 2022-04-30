"use strict";
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firstName, lastName) {
            super();
            this.retryLogin = 0;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.token = '';
            this.save = false;
            this.done = false;
        }
        login(userName, password) {
            this.retryLogin += 1;
            if (userName == 'admin' && password == 'admin') {
                return true;
            }
            if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
                return 'Max login Attempt';
            }
            return false;
        }
        register() { }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
User.MAX_FAILED_LOGIN = 4;
let myUser = new User(1, 'gerry', 'pratama');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('admin', 'admin'));
class Enchaceuser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myNewUser = new Enchaceuser('jakarta', 2, 'ucok', 'cool');
