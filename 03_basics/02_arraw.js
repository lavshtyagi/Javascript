const user = {

    username : "lavish",
    price: 999,

    welcomemessage : function(){

        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()

// user.username="sam"

// user.welcomemessage()

console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// const chai = ()=> {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


const addtwo = (num1 , num2) => {

    return num1 + num2
}

console.log(addtwo(3,4))
