// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

function consonantCount(str) {
    let consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
    string = str.toUpperCase()
    conCount = 0
    for (const letter of string){
        if(consonants.includes(letter)){
            conCount++
        };
    }; 
    return conCount;
};

console.log(consonantCount("jkhfskjdhkdEFUOQKSLLksfhks"))
console.log(consonantCount("I'm not counting consonants here"))
console.log(consonantCount("For here there are 15 consonants"))