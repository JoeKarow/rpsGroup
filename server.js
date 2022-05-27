const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
// const generateResult = require('rockPaperScis')
// const rps = rockPaperScis
// import resultChecker from './rockPaperScis'

const generateResult = () =>{
    const results = ['rock','paper','scissors']
    const resultKey = Math.floor(Math.random() * 3 )
    console.log('result key: ', resultKey)
    return results[resultKey]
}

const resultChecker = (playerInput) => {
    const aiPlayerResult = generateResult()
    console.log('AI plays:', aiPlayerResult)
    console.log('Human plays:', playerInput)
    let gameResult
    if (aiPlayerResult == playerInput ) gameResult = 'Draw'
    else if (aiPlayerResult == 'rock' && playerInput == 'scissors' ||
        aiPlayerResult == 'scissors' && playerInput == 'paper' ||
        aiPlayerResult == 'paper' && playerInput == 'rock') gameResult =  'AI wins'
    else gameResult = 'Player wins'

    const response = {
        aiPlayed: aiPlayerResult,
        gameResult: gameResult
    }
    console.table(response)
    return response
}


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('rps' in params){
      const playerChoice = params['rps'];
        res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(resultChecker(playerChoice)))
    }

    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const flipResult = Math.ceil((Math.random()*2))==1?'Heads':'Tails';
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
          coinFlip: flipResult
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
          coinFlip: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      } 
    //   if(params['playerInput']== 'rock'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     
    //     const objToJson = {
    //       return: "gameResult"
    //   }
    // }//student if
  }
}//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('D a n g i t    B o b b y ! !', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
