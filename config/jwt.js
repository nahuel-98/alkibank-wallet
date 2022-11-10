const jwt = require("jsonwebtoken");

class JWT {
  /**
   *
   * @param {*} dataForToken payload to encode
   * @param {*} secretWord it is recommended that it be an environment variable
   */
  static encode(dataForToken, secretWord) {
    if (!dataForToken || !secretWord) {
      throw new Error("Arguments missing");
    }
    return jwt.sign(dataForToken, secretWord);
  }

  /**
   *
   * @param {*} token the token previously generated with encode
   * @param {*} secretWord the secret word i use to encode
   */
  static verify(token, secretWord) {
    try {
      if (jwt.verify(token, secretWord)) {
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
   * @param {*} secretWord the secret word i use to encode
   */
  static decode(token, secretWord) {
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, secretWord);
      return decodedToken;
    } catch (error) {
      throw Error("El token es invalido");
    }
  }
}

module.exports = {
  JWT,
};
