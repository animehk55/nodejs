const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); //Allow the request to continue to the next middleware in line
// });

// app.use('/', (req, res, next) => {
//     console.log('In another middleware: This always runs');
//     res.send('This always runs');
// });

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware: Add product to this page');
    res.send('<h1>Add product to this page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware: Hello from Express');
    res.send('<h1>Hello from Expresss</h1>');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);