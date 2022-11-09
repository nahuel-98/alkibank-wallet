const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// example of a controller. First call the service, then build the controller method
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadImage = multer({
    storage,
    limits: {fileSize: 1000000}
}).single('image');

module.exports = {
  uploadImages: (req, res, next) => {
    try {
        uploadImage(req, res, (err) => {
            if (err) {
                err.message = 'The file is so heavy for my service';
                return res.send(err);
            }
            endpointResponse({
                res,
                message: "Image uploaded successfully",
                body: req.file.filename,
              });
        });

    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error uploading image] - [Image - POST]: ${error.message}`
      );
      next(httpError);
    }
  }
}