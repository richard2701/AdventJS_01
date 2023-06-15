export default function isValid(letter) {
  console.log(letter)
 // ¡No dejes que el Grinch gane!
 const formatText = letter.replace(/\s+/g, '')
 const validText = validFunction(letter)
 const cleanText = formatText.split('')

 if (!validText) {
  return false
 } else {
   let left = 0
   let rigth = 0
   cleanText.forEach((word, index) => {
     if (word === '(') {
       left = index
     } else if (word === ')') {
       rigth = index
     }
   })
   if ((left + 1) === rigth || rigth < left) {
    return false
   } else {
     return true
   }
 }
}

const word = '()'
function validFunction(letter) {
  if (
    letter.includes('[')
    ||
    letter.includes(']')
    ||
    letter.includes('{')
    ||
    letter.includes('}')
  ) {
    return false
  } else if (letter.includes('(') && !letter.includes(')') ) {
    return false
  } else if (letter.includes('()')) {
    return false
  } else {
    return true
  }
}
isValid(word)
console.log(isValid(word))