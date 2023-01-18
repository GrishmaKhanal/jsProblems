/* In Caesar Cipher, or shift cipher the meanings of letters are shifted by some amount,
    here the function taks a ROT13 encoded string as input and returns a decoded string.
    The non-alphanumeric characters willnot be transformed.
*/
console.log("\nDecode Caesar Cipher 'ROT13'\n");
function rot13(str) {
    let ans = str.toUpperCase();
    let len = ans.length, i;
    str = [];
    for(i = 0; i<len; i++)
    {
        let charCode = ans.charCodeAt(i);
        if(charCode<91 && charCode>64){
            charCode -= 65;
            charCode = (26 + charCode -13)%26;
            str.push(String.fromCharCode(charCode+65));
        } else {
            str.push(ans[i]);
        }
    }
    return str.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));