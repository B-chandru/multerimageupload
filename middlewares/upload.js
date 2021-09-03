 
var multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var dir ="././uploads";
        if(!fs.existsSync(dir))
        {
            fs.mkdirSync(dir);
        }
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}
 
var upload = multer({ storage: storage , fileFilter: filefilter});

module.exports = upload;