/* The function user-input string as phone number or not. it will provide boolean true or false as output.
    the valid phone number might contain country code. need to update to check for erros like 15 55-555-55 55
*/
console.log("\nTelephone Number Validation\n");
function telephoneCheck(str) {
    let ans = str.replace(/[^0-9]/g, '');
    let len = ans.length;
    let i, sign = 1;
    console.log(str);
    if(len > 11 || len < 10)
        return false;
    if(len == 11 && ans[0] !== '1' || str[0]== '-'){
        return false;
    }
    for(i = 0; i<len; i++){
        if (str[i] == '('){
            sign *= -1;
        } else if (str[i] == ')'){
            sign *= -1;
        }
    }
    if(sign == -1){
        return false;
    }
    return true;
}

console.log(telephoneCheck("-1 (757) 622-7382"));