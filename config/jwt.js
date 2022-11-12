const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_JWT_SEED;

class JWT {
  /**
   *
   * @param {*} dataForToken payload to encode
   */
  static encode(dataForToken) {
    if (!dataForToken) {
      throw new Error("Argument missing");
    }
    return jwt.sign(dataForToken, secret);
  }

  /**
   *
   * @param {*} token the token previously generated with encode
   */
  static verify(token) {
    try {
      if (jwt.verify(token, secret)) {
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
   */
  static decode(token) {
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, secret);
      return decodedToken;
    } catch (error) {
      throw Error("El token es invalido");
    }
  }
}

module.exports = {
  JWT,
};
