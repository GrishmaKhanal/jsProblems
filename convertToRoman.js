// Able to convert any decimal numbers to its roman counterpart range(0, 3999)!

console.log("\nConvert Decimal to Roman\n");
function convertToRoman(num) {
  var str =[];
  const romanOnes =[
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
  ];
  const romanTens = [
    ',', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' 
  ];
  const romanHundreds = [
    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'
  ];
  const romanThousands = [
    '', 'M', 'MM', 'MMM'
  ];
  var len = num.toString().length;

  let numOnes = num%10;
  let numTens = num%100 - numOnes;
  let numHundreds = num%1000 - num%100;
  let numThousands = num - num%1000;
  console.log(numOnes, numTens, numHundreds, numThousands);

  if(len == 4){
    if(numThousands/1000 < 4){
      str.push(romanThousands[numThousands/1000]); 
    }
  }
  if(len >= 3){
    str.push(romanHundreds[numHundreds/100]);
  }
  if(len >= 2){
    str.push(romanTens[numTens/10]);
  }
  if( len >= 1){
    str.push(romanOnes[numOnes]);
  }
  if(str[0] == ''){ 
    str.push('Zero');
  } 
  return str.join('');

}

console.log(convertToRoman(97));