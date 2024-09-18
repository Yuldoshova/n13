const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
        console.log(path.join(process.cwd() + "src" + "./uploads"))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileExt = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + fileExt);
    }
})


module.exports = upload = multer({ storage: storage })