// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments');

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Use the comments router for requests to the api
app.use('/api/comments', comments);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});