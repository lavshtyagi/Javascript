const tinderuser = new Object()

tinderuser.id = "132abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    email : "sone@gmail.com",

    fullname : {

        userfullname: {
            firstname : "hitesh",

            lastname : "jaat"
        }
    }
    
}

// console.log(regularuser.fullname?.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3: "a" , 4:"b"}

const obj4 = {5: "a" , 6:"b"}


// const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id : 1,

        email : "email.com"
    },
    {


    },
    {

    },
    {

    }
]

users[1].email

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));

// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));

const course = {

    coursename : "js in hindi",

    price : "999",

    courseinstructor: "hitesh"

}

// course.courseinstructor

const {courseinstructor : instructor} = course

// console.log(courseinstructor);

console.log(instructor);


// const navbar = ({company}) => {
// this is called destructuring
// }

// navbar(company = "hitesh")

// {
//     "name" : "lavish",

//     "coursename" : "js in hindi",

//     "price" : "free"
// }


