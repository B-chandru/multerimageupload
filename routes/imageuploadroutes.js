
const router = require('express').Router();
const upload = require('../middlewares/upload')
const imageuploadctrl = require("../controller/imageuploadctrl");



router.route("/")
.get(imageuploadctrl.getuploadedImage)
.post(upload.single('image'),imageuploadctrl.postImage)

router.route("/:id")
.delete(imageuploadctrl.deleteImage)

module.exports = router;