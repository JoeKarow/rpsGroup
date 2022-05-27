document.querySelector('#clickMe').addEventListener('click', makeReq)
document.querySelector('#rpsPlayGame').addEventListener('click', playRPS)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  document.querySelector("#coinFlip").textContent = data.coinFlip
}


async function playRPS() {
  const playerChoice = document.querySelector("#rpsUserChoice").value;
  const res = await fetch(`/api?rps=${playerChoice}`)
  const data = await res.json()

  document.querySelector('#rpsBotChoice').textContent = data.aiPlayed;
  document.querySelector('#rpsResult').textContent = data.gameResult;
  
  console.log(data);
}