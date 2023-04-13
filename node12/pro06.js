let express = require('express');
let app = express();

app.use(function(request, response) {
    response.status(404).send('<h1>404 ERROR</h1>');
});

app.listen(3434, function() {
    console.log('Server running at http://localhost:3434');
});