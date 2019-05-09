/**
 * A pangram is a sentence that contains every letter of the alphabet.
 * The function below checks if a given string `s` is a pangra or not
 * @param {String} s 
 */
function pangrams(s) {
    let result = "not pangram",
        alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
        given = s.toUpperCase().split(''),
        missingLetters = alphabets.filter(l => given.indexOf(l) === -1);
    if (missingLetters.length === 0)
        result = "pangram";

    return result;
}