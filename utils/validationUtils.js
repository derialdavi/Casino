const sha256 = require('js-sha256');

/**
 * 
 * @param {String} email 
 * @returns {boolean} true if it's valid
 */
function isValidEmail(email) {
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
function isStrongPwd(pwd) {
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
function isAdult(birth) {
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

/**
 * 
 * @param {String} pwd 
 * @returns {String} encrypted password
 */
function encrypt(pwd) {
    let val = sha256.create()
    val.update(pwd);
    return val.hex();
}

module.exports = {isValidEmail, isStrongPwd, isAdult, encrypt}