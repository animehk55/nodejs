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
  


console.log(SummariseNNNNNNEW(name, age, hasHobbies));
