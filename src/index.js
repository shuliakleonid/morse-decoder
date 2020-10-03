const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' ',
};
 
function decode(expr) {
    let express = expr.split('')
let arrTen = express.reduce(function(result, value, index, array) {
  if (index % 10 === 0)
    result.push(array.slice(index, index + 10));
  return result;
 }, []);

  let arrayTen = arrTen.map( num => num.join(''));
let morse =[];
let find = "**********"
 for (let i= 0; i< arrayTen.length;i++){
   morse.push(arrayTen[i].replace(/00/gi,"").replace(/10/gi,".").replace(/11/gi,"-").replace(find," "))
 }
      let answer = morse
      
      return answer.map(a => MORSE_TABLE[a]).join('');
 
}

module.exports = {
    decode
}