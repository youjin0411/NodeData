let express = require('express');
let app = express();

app.get('/a', function(request, response) {
    // response.send('<a href="/b">Go to B</a>');
    response.sendFile(__dirname + '/public/a.html');
});
app.get('/b', function(request, response) {
    response.send('<a href="/a">Go to A</a>');
})
app.all('*', function(request, response) {
    response.status(404).send('<h1>Error - Page Not Found</h1>');
});
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});