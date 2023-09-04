function changeMe(arr) {
  // you can only write your code here!
  let profile = {};

  for (let i = 0; i < arr.length; i++) {
    const [firstName, lastName, gender, birthYear] = arr[i];
    console.log(birthYear ? new Date().getFullYear() - birthYear : "Invalid Birth Year");

    profile = {
      ...profile,
      [`${firstName} ${lastName}`]: {
        firstName,
        lastName,
        gender,
        birthYear: birthYear ? new Date().getFullYear() - birthYear : "Invalid Birth Year",
      },
    };
  }

  console.log(arr.length > 0 ? profile : "");
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
