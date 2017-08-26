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
/**
Example:
Input: 'Tact Coa'
Output: True ('taco cat', 'atco, cta', etc.)
*/
let isPalindrome = (str) => {
  let frontIndx = 0;
  let backIndx = str.length-1;
  while(frontIndx != backIndx) {
    if(str[frontIndx].toLowerCase() != str[backIndx].toLowerCase()) {
      return false;
    }
    frontIndx++;
    backIndx--;
  }
  return true;
}

let checkCharSet = (charSet, length) => {
  let oddFlag = false;
  let willHaveOddFlag = length % 2;
  for(key in charSet) {
    if(willHaveOddFlag) {
      if(charSet.key % 2 !== 0 && !singleFlag) {
        oddFlag = true;
      } else {
        return false;
      }
    } else {
      if(charSet.key % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
}

let isPalindromePermutation = (str) => {
  let charSet = {};
  let input = str.toLowerCase().replace(/ /g, '');
  for(indx in input) {
    if(charSet.hasOwnProperty(input[indx])) {
      charSet[input[indx]] += 1;
    } else {
      charSet[input[indx]] = 1;
    }
    return checkCharSet(charSet, input.length);
  }
}

// 1.5 One Away: There are 3 types of edits that can be performed on strings: insert, remove, replace a char. Given 2 strings, write a function to check if they are one edit or zero edits away.
/**
Example:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/
let isOneAway => (str1, str2) => {
  let input1 = str1.toLowerCase();
  let input2 = str2.toLowerCase();
  let greaterLengthStr;
  let lesserLengthStr;
  if(input1.length >= input2.length) {
    greaterLengthStr = input1;
    lesserLengthStr = input2;
  } else {
    greaterLengthStr = input2;
    lesserLengthStr = input1;
  }
  let charArr;
  if( (input1.length !== input2.length)
    || Math.abs(input1.length - input2.length) !== 1) {
      return false;
  }
  for(i in greaterLengthStr) {

  }
}
