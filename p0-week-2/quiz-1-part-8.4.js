/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here! example blanket, length 7
  let isPalindrome = true;
  for (let i = 0; i < kata.length; i++) {
    // i = 0
    const element = kata[i]; // example = k , 6 - i = 6,
    if (element !== kata[kata.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
