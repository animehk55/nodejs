let name = 'Max';
const age = 29;
let hasHobbies = true;


name = 'shyam';
// age = 45;       // Assignment to constant variable.

// function summarizeUseer (userName, userAge, userHasHobby) {
//   return (
//     'Student name is ' +
//     userName +
//     'his age as mentioned BOD is ' +
//     userAge +
//     '. And his hobies as described will be as follows ' +
//     userHasHobby
//   );
// }


// Another way of writing function : named function 
// const SummariseNNNNNNEW = function (userName, userAge, userHasHobby) {
//     return (
//       'Student name is ' +
//       userName +
//       'his age as mentioned BOD is ' +
//       userAge +
//       '. And his hobies as described will be as follows ' +
//       userHasHobby
//     );
//   }
  
// Arrow function 
const SummariseNNNNNNEW = (userName, userAge, userHasHobby)  => {
    return (
      'Student name is ' +
      userName +
      'his age as mentioned BOD is ' +
      userAge +
      '. And his hobies as described will be as follows ' +
      userHasHobby
    );
  }
  

  //small function
  const add = (a,b) => {
      return a + b
  } 

  const addS = (a,b) => a + b;


  const addSS = a => a + 2;
  console.log(addSS(0));

  const Random = () => 1+ 10000000;
  console.log(Random());
  
console.log(add(2,3));
console.log(addS(20,3));
console.log(SummariseNNNNNNEW(name, age, hasHobbies));
