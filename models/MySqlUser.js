const fs = require('fs');
const User = require('./User');

class MySqlUser extends User {
    #money;
    #image;
    #role;

    /**
     * 
     * @param {String} name 
     * @param {String} surname 
     * @param {String} username 
     * @param {String} email 
     * @param {String} password 
     * @param {Date} birth 
     * @param {Int} money 
     * @param {Buffer} image 
     * @param {String} role 
     */
    constructor(name, surname, username, email, password, birth, money = 500, image = fs.readFileSync('./public/img/user/user_img.png'), role = 'user') {
        super(name, surname, username, email, password, birth);
        this.#money = money;
        this.#image = image;
        this.#role = role;
    }

    get money() {
        return this.#money;
    }

    set money(value) {
        this.#money = value;
    }

    get image() {
        return this.#image;
    }

    set image(value) {
        this.#image = value;
    }

    get role() {
        return this.#role;
    }

    set role(value) {
        this.#role = value;
    }
}

module.exports = MySqlUser;