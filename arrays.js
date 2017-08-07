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
