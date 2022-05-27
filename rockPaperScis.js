

const generateResult = () =>{
    const results = ['rock','paper','scissors']
    const resultKey = Math.floor(Math.random * 3 )
    return results[resultKey]
}




const resultChecker = (playerInput) => {
    const aiPlayerResult = generateResult()
    console.log('AI plays:', aiPlayerResult)
    console.log('Human plays:', playerInput)
    let gameResult
    if (aiPaiPlayerResult == playerInput ) gameResult = 'Draw'
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

// module.exports = generateResult
// export default resultChecker