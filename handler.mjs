import dotenv from 'dotenv';
dotenv.config();

// import AWS from 'aws-sdk';
// import { v4 as uuidv4 } from 'uuid';
// import JSZip from 'jszip';
// import * as formidable from 'formidable';

// const s3 = new AWS.S3();

// export const generateBulkDownloadUrls = async (event) => {
//   try {
//     console.log('---- event ----> ', event.body);
//     console.log('------- Received headers: -->', event.headers);

//     const form = new formidable.IncomingForm();
//     const parsed = await new Promise((resolve, reject) => {
//       form.parse(event.body, (err, fields, files) => {
//         if (err) reject(err);
//         resolve({ fields, files });
//       });
//     });

//     const filesData = Object.values(parsed.files).map(file => ({
//       name: file.originalFilename,
//       data: file.newFilename,
//     }));

//     console.log('Files Data --> ', filesData);

//     const zip = new JSZip();

//     for (const file of filesData) {
//       const uniqueKey = uuidv4();
//       if (!file.name) {
//         throw new Error('Missing filename in the part data.');
//       }
//       const key = `${uniqueKey}.${file.name.split('.').pop()}`;

//       const fileData = await fs.promises.readFile(file.data);
//       zip.file(key, fileData);
//     }

//     const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

//     const zipKey = `${uuidv4()}.zip`;
//     await s3.upload({
//       Bucket: 'fileuploadtransfer',
//       Key: zipKey,
//       Body: zipContent,
//       ContentType: 'application/zip',
//       ACL: 'private',
//     }).promise();

//     const downloadUrl = await s3.getSignedUrlPromise('getObject', { Bucket: 'fileuploadtransfer', Key: zipKey, Expires: 3600 });
//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Accept': '*/*',
//         'Access-Control-Allow-Credentials': true,
//       },
//       body: JSON.stringify({ downloadUrl }),
//     };
//   } catch (e) {
//     console.error('Error --> ', e);
//     console.error('Error --> ', e);
//     return {
//       statusCode: 500,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true,
//       },
//       body: JSON.stringify({ error: e.message }),
//     };
//   }
// };



// import AWS from 'aws-sdk';
// import { v4 as uuidv4 } from 'uuid';
// import JSZip from 'jszip';
// import * as formidable from 'formidable';

// const s3 = new AWS.S3();

// export const generateBulkDownloadUrls = async (event) => {
//   try {
//     console.log('---- event ----> ', event.body);

//     // Parse the JSON body if it's a string
//     const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

//     // Pass the parsed body to formidable
//     const form = new formidable.IncomingForm();
//     const parsed = await new Promise((resolve, reject) => {
//       form.parse(body, (err, fields, files) => {
//         if (err) reject(err);
//         resolve({ fields, files });
//       });
//     });

//     const filesData = Object.values(parsed.files).map(file => ({
//       name: file.originalFilename,
//       data: file.newFilename,
//     }));

//     console.log('Files Data --> ', filesData);

//     const zip = new JSZip();

//     for (const file of filesData) {
//       const uniqueKey = uuidv4();
//       if (!file.name) {
//         throw new Error('Missing filename in the part data.');
//       }
//       const key = `${uniqueKey}.${file.name.split('.').pop()}`;

//       const fileData = await fs.promises.readFile(file.data);
//       zip.file(key, fileData);
//     }

//     const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

//     const zipKey = `${uuidv4()}.zip`;
//     await s3.upload({
//       Bucket: 'fileuploadtransfer',
//       Key: zipKey,
//       Body: zipContent,
//       ContentType: 'application/zip',
//       ACL: 'private',
//     }).promise();

//     const downloadUrl = await s3.getSignedUrlPromise('getObject', { Bucket: 'fileuploadtransfer', Key: zipKey, Expires: 3600 });
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ downloadUrl }),
//     };
//   } catch (e) {
//     console.error('Error --> ', e);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: e.message }),
//     };
//   }
// };


/* ----------------------------------------------------------------3----------------------------------------------------------------------------------------- */

// import AWS from 'aws-sdk';
// import { v4 as uuidv4 } from 'uuid';
// import JSZip from 'jszip';

// const s3 = new AWS.S3();

// export const generateBulkDownloadUrls = async (event) => {
//   try {
//     console.log('Event Body --> ', event.body);
//     const filesData = JSON.parse(event.body);

//     if (!Array.isArray(filesData)) {
//       throw new Error('Input data is not an array');
//     }

//     console.log('Files Data --> ', filesData);

//     const zip = new JSZip();
//     const promises = filesData.map(async (fileData) => {
//       const uniqueKey = uuidv4();
//       const key = `${uniqueKey}.${fileData.extension || 'jpg'}`;

//       let fileContent;
//       if (fileData.data) {
//         fileContent = fileData.data;
//       } else {
//         const s3Object = await s3.getObject({ Bucket: fileData.bucket, Key: fileData.key }).promise();
//         fileContent = s3Object.Body;
//       }

//       zip.file(key, fileContent);

//       return { key };
//     });

//     await Promise.all(promises);

//     const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

//     const zipKey = `${uuidv4()}.zip`;
//     await s3.upload({
//       Bucket: 'fileuploadtransfer',
//       Key: zipKey,
//       Body: zipContent,
//       ContentType: 'application/zip',
//       ACL: 'private',
//     }).promise();

//     const downloadUrl = await s3.getSignedUrlPromise('getObject', { Bucket: 'fileuploadtransfer', Key: zipKey, Expires: 3600 });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ downloadUrl }),
//     };
//   } catch (e) {
//     console.error('Error --> ', e);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: e.message }),
//     };
//   }
// };

/* ----------------------------------------------------------------4----------------------------------------------------------------------------------------- */


// import AWS from 'aws-sdk';
// import { v4 as uuidv4 } from 'uuid';
// import JSZip from 'jszip';
// import fs from 'fs';
// import formidable from 'formidable';

// const s3 = new AWS.S3();

// export const generateBulkDownloadUrls = async (event) => {
//   try {
//     console.log('---- event ----> ', event.body);

//     // Parse the JSON body if it's a string
//     const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

//     // Pass the parsed body to formidable
//     const form = new formidable.IncomingForm();
//     const parsed = await new Promise((resolve, reject) => {
//       form.parse(body, (err, fields, files) => {
//         if (err) reject(err);
//         resolve({ fields, files });
//       });
//     });

//     const filesData = Object.values(parsed.files).map(file => ({
//       name: file.originalFilename,
//       path: file.path,
//     }));

//     console.log('Files Data --> ', filesData);

//     const zip = new JSZip();

//     for (const file of filesData) {
//       const uniqueKey = uuidv4();
//       if (!file.name) {
//         throw new Error('Missing filename in the part data.');
//       }
//       const key = `${uniqueKey}.${file.name.split('.').pop()}`;

//       const fileData = fs.readFileSync(file.path);
//       zip.file(key, fileData);
//     }

//     const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

//     const zipKey = `${uuidv4()}.zip`;
//     await s3.upload({
//       Bucket: 'fileuploadtransfer',
//       Key: zipKey,
//       Body: zipContent,
//       ContentType: 'application/zip',
//       ACL: 'private',
//     }).promise();

//     const downloadUrl = await s3.getSignedUrlPromise('getObject', { Bucket: 'fileuploadtransfer', Key: zipKey, Expires: 3600 });
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ downloadUrl }),
//     };
//   } catch (e) {
//     console.error('Error --> ', e);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: e.message }),
//     };
//   }
// };



/* ----------------------------------------------------------------5----------------------------------------------------------------------------------------- */

// import AWS from 'aws-sdk';
// import { v4 as uuidv4 } from 'uuid';
// import JSZip from 'jszip';
// import fs from 'fs';

// const s3 = new AWS.S3();

// export const generateBulkDownloadUrls = async (event) => {
//   try {
//     console.log('---- event ----> ', event.body);

//     // Parse the JSON body if it's a string
//     const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

//     const filesData = body.files.map(file => ({
//       name: file.originalname,
//       data: file.data,
//     }));

//     console.log('Files Data --> ', filesData);

//     const zip = new JSZip();

//     for (const file of filesData) {
//       const uniqueKey = uuidv4();
//       if (!file.name) {
//         throw new Error('Missing filename in the part data.');
//       }
//       const key = `${uniqueKey}.${file.name.split('.').pop()}`;

//       const fileData = Buffer.from(file.data, 'base64');
//       zip.file(key, fileData);
//     }

//     const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

//     const zipKey = `${uuidv4()}.zip`;
//     await s3.upload({
//       Bucket: 'fileuploadtransfer',
//       Key: zipKey,
//       Body: zipContent,
//       ContentType: 'application/zip',
//       ACL: 'private',
//     }).promise();

//     const downloadUrl = await s3.getSignedUrlPromise('getObject', { Bucket: 'fileuploadtransfer', Key: zipKey, Expires: 3600 });
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ downloadUrl }),
//     };
//   } catch (e) {
//     console.error('Error --> ', e);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: e.message }),
//     };
//   }
// };

/* ----------------------------------------------------------------6----------------------------------------------------------------------------------------- */

import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import formidable from 'formidable';
import { Transform } from 'stream';
const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;

const region = process.env.region;
const Bucket = process.env.bucket;
console.log(accessKeyId, secretAccessKey, region, Bucket);
const generateBulkDownloadUrls = async (req) => {
  return new Promise((resolve, reject) => {
    let options = {
      maxFileSize: 100 * 1024 * 1024,
      allowEmptyFiles: false
    }

    const form = formidable(options);

    form.parse(req, (err, fields, files) => { });

    form.on('error', error => {
      reject(error.message)
    })

    form.on('fileBegin', (formName, file) => {
      file.open = async function () {
        this._writeStream = new Transform({
          transform(chunk, encoding, callback) {
            callback(null, chunk)
          }
        })

        this._writeStream.on('error', e => {
          form.emit('error', e)
        });

        // upload to S3
        new Upload({
          client: new S3Client({
            credentials: {
              accessKeyId,
              secretAccessKey
            },
            region
          }),
          params: {
            Bucket,
            Key: `${Date.now().toString()}-${this.originalFilename}`,
            Body: this._writeStream
          },
        })
          .done()
          .then(data => {
            form.emit('successUpload', data);
          }).catch((err) => {
            form.emit('error', err);
          })
      }

      file.end = function (cb) {
        this._writeStream.on('finish', () => {
          this.emit('end')
          form.emit('successUpload', { name: "complete" });
          cb()
        })
        this._writeStream.end()
      }

    })

    form.on('successUpload', data => {
      resolve(data);
    })

  })
}

export default generateBulkDownloadUrls;



/* ----------------------------------------------------------------7----------------------------------------------------------------------------------------- */

// import { Upload } from "@aws-sdk/lib-storage";
// import { S3Client } from "@aws-sdk/client-s3";
// import formidable from 'formidable';
// import archiver from 'archiver';
// import { PassThrough } from 'stream';
// import fs from 'fs';

// const accessKeyId = '';
// const secretAccessKey = '';
// const region = 'us-east-1';
// const Bucket = 'fileuploadtransfer';

// const generateBulkDownloadUrls = async (req) => {
//   return new Promise((resolve, reject) => {
//     let filesToZip = [];
//     let options = {
//       maxFileSize: 100 * 1024 * 1024, // Adjust if necessary
//       allowEmptyFiles: false
//     };

//     const form = formidable(options);

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         reject(err.message);
//         return;
//       }
//     });

//     form.on('file', (formName, file) => {
//       filesToZip.push(file);
//     });

//     form.on('end', async () => {
//       if (filesToZip.length === 0) {
//         reject("No files to upload.");
//         return;
//       }

//       // Zip files
//       const zipStream = new PassThrough();
//       const archive = archiver('zip', { zlib: { level: 9 } });
//       archive.pipe(zipStream);

//       for (const file of filesToZip) {
//         archive.append(fs.createReadStream(file.filepath), { name: file.originalFilename });
//       }

//       archive.finalize();

//       // Upload to S3
//       const key = `zipped-${Date.now()}.zip`;
//       const upload = new Upload({
//         client: new S3Client({
//           credentials: { accessKeyId, secretAccessKey },
//           region
//         }),
//         params: {
//           Bucket,
//           Key: key,
//           Body: zipStream
//         },
//       });

//       try {
//         const result = await upload.done();
//         const downloadUrl = `https://${Bucket}.s3.${region}.amazonaws.com/${key}`;
//         resolve({ key, downloadUrl, result });
//       } catch (err) {
//         reject(err);
//       }
//     });
//   });
// };

// export default generateBulkDownloadUrls;