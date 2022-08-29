const multer = require('multer')

module.exports.uploadFile = () => {
    console.log('here');
    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(req);
            cb(null, './files/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    });

    const fileFilter = (req, file, cb) => {
        if (!file.originalname.match(/\.(pdf)$/)) {
            return cb(new Error('You can upload only pdf files'), false);
        }
        cb(null, true)
    }

    return multer({ storage: fileStorage})
}