
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

    console.log(name.languagename);
})


