//singleton => 

// object literals

// Object.create

const mysym = Symbol("key1")

const jsuser = {
    name : "Lavish",

    [mysym] :"mykey1",

    age: 18,

    location : "jaipur",

    email: "lavish@google.com",

    isloggedin : false,

    lastlogindays :["monday" , "saturday"]
     
}

// console.log(jsuser.email)

jsuser.email = "lavish@gpt.com"

// console.log(jsuser.email)

// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwo = function(){
    console.log(`hello js user , ${this.name} here and location based on ${this.location}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());