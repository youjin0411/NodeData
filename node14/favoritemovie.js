//영화 제목, 감독을 입력받아 업로드하는 프로그램

// http를 사용하는 이유는 웹 서버를 만들기 위해서이다. express가 아닌 http를 사용하면 더 많은 기능을 사용할 수 있다. 이 프로그램의 경우에는 express를 사용하지 않고 http를 사용하여 웹 서버를 만들어보자.
const http = require('http');
const querystring = require('querystring');
const port = 3333;

let movieList = [{ title: '스타워즈4', director: '조지루카스' }];

const server = http.createServer((request, response) => {
    // post 방식이면 
    if (request.method === 'POST') {
        addNewMovie(request, response);
    }
    // get이면 목록 출력
    else {
        showList(request, response);
    }
});

server.listen(port, () => {
    console.log(`Server on${port} port`);
});

// form 태그를 작성해서 title, director 입력받기
function showList(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.write('<h1>Favorite Movie</h1>');
    // movieList에 있는 데이터를 출력한다.
    response.write('<ul>');
    for (let i = 0; i < movieList.length; i++) {
        response.write(`<li>${movieList[i].title}(${movieList[i].director})</li>`);
    }
    response.write('</ul>');
    response.write('<h1>새 영화 입력</h1>');
    response.write('<form method="post">');
    response.write('<div><input type="text" name="title" placeholder="영화제목🤍"></div>');
    response.write('<div><input type="text" name="director" placeholder="영화감독🤷‍♀️"></div>');
    response.write('<input type="submit" value="영화 업로드 ✔">');
    response.write('</form>');
    response.end();
}

function addNewMovie(request, response) {
    // post 방식으로 전송된 데이터를 qeurysting으로 받아온다.
    let add = '';
    // request.on은 request에서 받은 데이터를 body에 추가한다. 
    request.on('data', (data) => {
        add += data;
    });
    // querystring으로 받아온 데이터를 movieList에 추가한다.
    request.on('end', () => {
        const postmovie = querystring.parse(add);
        movieList.push(postmovie);
        showList(request, response);
    });
}