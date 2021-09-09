// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/
const words = [
  "eat",
  "omelet",
  "are",
  "egg",
  "explain",
  "always",
  "ends",
  "every",
  "another",
  "under",
  "island",
  "elegant",
];
  // if it starts with a vowel, add yay at the end. //
function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'],
      result = str.split('');

  if (vowels.includes(str.charAt(0))) {
    return str += 'yay';
  } else {
    for (var i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
      }
    }
  }
  console.log();
}




/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
const testSimpleConsonantWords = {
  latin: "atin-lay",
  banana: "anana-bay",
  happy: "appy-hay",
  duck: "uck-day",
  dopest: "opest-day",
  me: "e-may",
  too: "oo-tay",
  will: "ill-way",
  moist: "oist-may",
  wet: "et-way",
  real: "eal-ray",
  simple: "imple-say",
  say: "ay-say",
  bagel: "agel-bay",
  you: "ou-yay",
};

function encodeConsonantWord(word) {
  return ""; // replace this!

}


/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
const testClusteredConsonantWords = {
  cheers: "eers-chay",
  shesh: "esh-shay",
  smile: "ile-smay",
  string: "ing-stray",
  thanks: "anks-thay",
  trash: "ash-tray",
  stupid: "upid-stay",
  glove: "ove-glay",
};

function encodeWord(word) {
  return ""; // replace this!
}

// Write your unit tests here

/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
  return ""; // replace this!
}

// Write your unit tests here
