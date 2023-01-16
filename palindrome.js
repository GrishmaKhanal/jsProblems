// find palindrome of any word, ignores non-alphanumeric characters.\
// Eg: _eye! will be classified as a palindrome

console.log("\nPalindrome Checker\n")
function palindrome(str) {
    var ans = str.replace(/[^a-z0-9]/gi, '');;
    ans = ans.toLowerCase();
    var len = ans.length;
    for(let i = 0; i< len/2; i++){
        if(ans[i] !== ans[len-i-1]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("_eYe"));