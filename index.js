import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.set('json spaces', 5); // to pretify json response

import generateBulkDownloadUrls from './handler.mjs';

app.get('/', (req, res) => {
    res.send(`
    <h2>File Upload With <code>"Node.js"</code></h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Select a file: 
        <input name="file" type="file" />
      </div>
      <input type="submit" value="Upload" />
    </form>

  `);
});

app.post('/api/upload', async (req, res) => {
    await generateBulkDownloadUrls(req)
        .then(data => {
            res.status(200).json({
                message: "Success",
                data
            })
        })
        .catch(error => {
            res.status(400).json({
                message: "An error occurred.",
                error
            })
        })
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})