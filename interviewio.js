// #2
var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


/* 
Your previous Plain Text content is preserved below:

INPUT
anagrams(['xxy', 'cab', 'bca', 'cab', 'bac', 'dash', 'shad'])

OUTPUT
[
  ['xxy'],
  ['cab', 'bca’, 'bac'],
  ['dash', 'shad']
]

Group strings that are anagram of each other into a list without duplicate.

‘cab’ is an example duplicates removed. There are 2 ‘cab’ in the input and only 1 ‘cab’ in the output.
You can think of anagram as two words that have the same count per letter. You should treat upper and lower case differently.
'xxy’ is by itself because it doesn’t have any other strings that are anagram with ’xxy’

Abc and abc are NOT anagrams
abcc and abc are NOT anagrams
abc and cab are anagrams because each of them has 1 a, 1 b, and 1 c

You can assume it’s 256 ASCII

You don’t need to compile the code, let me know when you’re done implementing the code. If you’re unsure about the syntax, just make it up.


 */

/*
read word into character hash table
  compare to the next word -> char of next word doesn't exist in the curr word => compare to next word
  if they match all the characters -> [curr, next] => push result [ [...], ...]
*/

const buildCharHash = word => {
  let result = {};
  word.split('').forEach(char => {
    result[char] = result[char] ? result[char] + 1 : 1;
  });
  return result;
}

const areAnagrams = (charHash1, charHash2) => {
  for(let key1 in charHash1) {
    if(!charHash2[key1]) {
      return false;
    }
    charHash2[key1] -= 1;
  }
  for(let key2 in charHash2) {
    if(charHash2[key2] !== 0) {
      return false;
    }
  }
  return true;
}

const groupAnagrams = arr => {
  let result = [];
  let curr = 0;
  let next;
  while(curr < arr.length) {
    next = curr + 1;
    let currCharHash = buildCharHash(arr[curr]);
    let currGroup = [arr[curr]];
    while(next < arr.length) {
      let nextCharHash = buildCharHash(arr[next]);
      if(areAnagrams(currCharHash, nextCharHash)) {
        currGroup.push(arr[next]);
      }
      next++;
    }
    result.push(currGroup);
    curr++;
  }
  return result;
}



/* n = words.size
// k = max length of each word
// O(n*k*log(k)) but if word length is constant then hash function can be considered constant speed and we get O(n)
*/
function hash(word) {
  return word.split('').sort().join('');
}

function words_to_dic(word_list) {
  let dic = {};
  word_list.forEach(word => {
    const key = hash(word);
    if (dic[key]) {
      dic[key].add([word]);
    } else {
      dic[key] = new Set([word]);
    }
  });
  return dic;
}

function anagrams(word_list) {
  return Object.values(words_to_dic(word_list));
}

/*
Here's a variation for you think about: We want to maintain the relative ordering of the input and output. Let’s say CAB comes before ABC in the input, I would like to see CAB before ABC in the output. The output is a list of list. You should continue to remove duplicates.
*/


// #1
/* 
  Given 2 sorted arrays of integers
  return sorted array of squares
*/
