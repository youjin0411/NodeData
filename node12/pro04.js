const express = require('express');
const path = require('path');

const app = express();
const multipleNumber = 9;
const result = [];
for (let i = 1; i <= 5; i++) {
    result.push({
        number: `${multipleNumber} X ${i}`,
        multiple: multipleNumber * i,
    });
}

app.get('/error', (req, res) => {
    res.status(404).send('404 ERROR');
});

app.listen(3434, () => {
    console.log('Server running at http://localhost:3434');
});