
const greetings = "hello world"

const word = greetings.split(" ");

for(const char of word){
    // console.log(`split word is ${char}`)
}

const myobject = {
    js : 'javascript',

    cpp: 'c++',

    rb : 'ruby',

    ts: 'typescript'
}

for(const key in myobject){
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const mycoding = [
    {
        languagename:"javascript",
        languagefilename:'js'
    },
    {
        languagename:"c++",
        languagefilename:'cpp'
    },
    {
        languagename:"typescript",
        languagefilename:'ts'
    }
]

mycoding.forEach((name) => {

    // console.log(name.languagename);
})

// hello my world
// git doubt is solved my mee

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = []

mynums.forEach((num) => {
    if(num>4){
        newnums.push(num)
    }
})

console.log(newnums);