//Objects


// const person = {
//     name : 'Animesh',
//     age : 26,
//     love: 'MS'
// };

// console.log(person);

// here this is a global variable so it will print undefined 
// const person = {
//     name : 'Animesh',
//     age : 26,
//     love: 'MS',
//     love: () => {
//         console.log('unable toprint :   ' + this.name)
//     }
// };

// person.love();


// object with function 
// const person = {
//     name : 'Animesh',
//     age : '25',
//     lovedOnes() {
//         console.log('My world')
//     }
// }

// person.lovedOnes();

// Object with function
const person = {
    name : 'Animesh',
    age: 256,
    loveMY: function() {
        console.log('Hi my loved once is in heaven, so be on earth. Haaaaaaaaa Haaaaaaaaaaaaaa Ha');
    }
}

person.loveMY();