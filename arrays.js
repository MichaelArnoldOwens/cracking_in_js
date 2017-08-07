// 1.1 isUnique: Implement an algorithm to determine if a string has all unique ccharacters.
let isUnique = (str) => {
  let set = {};
  for(indx in str) {
   if(set.hasOwnProperty(str[indx])) {
     return false;
   }
    set[str[indx]] = set[str[indx]];
  }
  return true;
}

// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other
let isAnagram = (str1, str2) => {
  if(str1.length != str2.length) {
    return false;
  }
  let charSet = {};
  for(indx in str1) {
    if(charSet.hasOwnProperty(str1[indx])) {
      charSet[str1[indx]] += 1;
    } else {
        charSet[str1[indx]] = 0;
    }
  }
  for(indx in str2) {
    if(charSet.hasOwnProperty(str2[indx])) {
      charSet[str2[indx]] -= 1;
    } else {
      return false;
    }
    return true;
  }
}

// 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
/**
Example:
Input: "Mr John Smith     ", 13
Output: "Mr%20John%20Smith"
*/
let URLify = (str) => {
  let input = str.split(' ')
  let output = [];
  for(indx in input) {
    if(input[indx] != '') {
      output.push(input[indx]);
    }
  }
  return output.join('%20');
}

// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
let isPalindromePermutation = (str) => {
  
}
