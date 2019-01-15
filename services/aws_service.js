require('dotenv').config();
const keys = process.env;
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: keys.Secret_Access_Key,
    accessKeyId: keys.Access_Key_ID,
    region: 'us-east-2'
});

const s3Bucket = new aws.S3({ params: { Bucket: keys.S3_Bucket } });

const upload = multer({
    storage: multerS3({
        s3: s3Bucket,
        bucket: keys.S3_Bucket,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, `user-image-${Date.now().toString()}`);
        }
    })
});

module.exports = upload;