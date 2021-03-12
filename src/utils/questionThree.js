const fs = require('fs')

const getSumFromTextFile = (filename) => {

    //assuming file is in same directory
    const data = fs.readFileSync(__dirname + filename, 'utf8')

    const cleanQuotes = data.replace(/"/g, "")
    const cleanComma = cleanQuotes.replace(/,/g, "")

    const strings = cleanComma.split('\n')

    let sum = 0

    for(let string of strings){
        const splitArr = string.split(" ")
        if(!isNaN(parseInt(splitArr[2]))){
            sum += (splitArr[2] * 1)
        }

    }

    return sum

}

const answer = getSumFromTextFile('/filename')