let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send("<h1> Hello </h1>")
})
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/main.html")
})
app.all('*', function(request, response) {
    response.status(404).send('<h1>Error - Page Not Found</h1>');
});
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});