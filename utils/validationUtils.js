const sha256 = require('js-sha256');

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

module.exports = {encrypt}