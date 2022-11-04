const bcrypt = require("bcryptjs");

class Security {
  static async encryptPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = {
  Security,
};
