const jwt = require("jsonwebtoken");

class JWT {
  /**
   *
   * @param {*} dataForToken payload to encode
   * @param {*} secretWorld it is recommended that it be an environment variable
   */
  static encode(dataForToken, secretWorld) {
    return jwt.sign(dataForToken, secretWorld);
  }

  /**
   *
   * @param {*} token the token previously generated with encode
   * @param {*} secretWorld the secret word i use to encode
   */
  static verify(token, secretWorld) {
    try {
      if (jwt.verify(token, secretWorld)) {
        return "El token es valido";
      }
      return;
    } catch (error) {
      throw Error("El token es invalido");
    }
  }

  /**
   *
   * @param {*} token the token previously generated with encode
   * @param {*} secretWorld the secret word i use to encode
   */
  static decode(token, secretWorld) {
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, secretWorld);
      return decodedToken;
    } catch (error) {
      throw Error("El token es invalido");
    }
  }
}

module.exports = {
  JWT,
};
