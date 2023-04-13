let express = require('express');

let app = express();

app.use(function(request, response) {
    let output = [];
    for (let i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        })
    }

    response.send(output);
})

app.listen(3434, function() {
    console.log('Server running at http://localhost:3434');
});