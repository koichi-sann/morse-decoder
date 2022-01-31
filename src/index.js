const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  MORSE_TABLE[''] = ' '
  // console.log(expr)
  //regex101.com helped alot
  const char_of_10 = /.{1,10}/g // regex to find 10 chars that paired
  const char_of_2 = /\d{1,2}/g // regex to find 2 chars that paired
  const space = /\*{1,10}/g // regex to find space

  const letArr = expr.match(char_of_10) // divide expr on array from strings of 10 chars
  // console.log(letArr)
  let result = ''

  letArr.forEach((item) => {
    let charArr = !space.test(item) ? item.match(char_of_2) : ['space'] // divide pairs of 10 to pairs of 2 (thanks stackoverflow)
    // console.log(charArr)

    const decoded = charArr.map((item) => {
      switch (item) {
        case '10':
          return '.'
        case '11':
          return '-'
        case '00':
          return ''
        case 'space':
          return ''
      }
    })

    result += MORSE_TABLE[decoded.join('')] // make result from decoded array as key of morse_table
    // console.log(result)
  })
  return result
}
module.exports = {
  decode,
}
