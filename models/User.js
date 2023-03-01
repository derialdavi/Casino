class User {
    #name;
    #surname;
    #username;
    #email;
    #password;
    #birth;

    /**
     * 
     * @param {String} name 
     * @param {String} surname 
     * @param {String} username 
     * @param {String} email 
     * @param {String} password 
     * @param {Date} birth 
     */
    constructor(name, surname, username, email, password, birth) {
        this.#name = name;
        this.#surname = surname;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#birth = birth;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        this.#username = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    get birth() {
        return this.#birth;
    }

    set birth(value) {
        this.#birth = value;
    }

    /**
     * 
     * @param {String} email 
     * @returns {boolean} true if it's valid
     */
    isValidEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {String} pwd 
     * @returns {boolean} true if it's strong enough
     */
    isStrongPwd(pwd) {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pwd)) {
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {Date} birth 
     * @returns {boolean} true if age of user >= 18
     */
    isAdult(birth) {
        let year = new Date(birth).getFullYear();
        year = parseInt(year);
        let todayYear = new Date().getFullYear();
        if (todayYear - year >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}


module.exports = User;