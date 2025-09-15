// function addtwonumber(number1 , number2){

//     let result = number1 + number2
//     return result
// }

// const result = addtwonumber(3,4)

// console.log(result);

function calculate(...num1){
    // rest operator spreed like a array

    return num1

}

// console.log(calculate(200 , 400 , 500 ))

const user = {
    //username : "hitesh",
    price : 199
}

function handle(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handle(user);

function one(){
    const username = "lavish tyagi"

    function two (){
        const website = "youtube"

        console.log(username);
        console.log(website);
    }

    // console.log(website);

    two()
}

one()

if(true){

    const username = "lavish"

    if(username == "lavish"){
        const website = "youtube"
        // console.log(username+website);
    }

}
// console.log(username);





 