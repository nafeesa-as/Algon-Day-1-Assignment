/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  if (str1 == null || str2 == null) return false;

  const cleanStr1 = str1.toLowerCase();
  const cleanStr2 = str2.toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) return false;

  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

