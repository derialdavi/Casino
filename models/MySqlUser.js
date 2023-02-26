const User = require('./User');

class MySqlUser extends User {
    #id;

    constructor(id, name, surname, username, email, password, birth) {
        super(name, surname, username, email, password, birth);
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }
}

module.exports = MySqlUser;