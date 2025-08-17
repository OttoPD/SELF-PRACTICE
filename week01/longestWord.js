function longestWord(sentence) {
    if ( typeof sentence !== "string"  || sentence === null  || sentence === undefined ||sentence.trim() === "") 
    {
    return "";
  } 
  const words = sentence.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}


module.exports = longestWord
