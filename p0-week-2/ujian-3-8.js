/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  const dictionary = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < dictionary.length; i++) {
    const element = dictionary[i];
    const tmp = [];
    for (let j = 0; j < animals.length; j++) {
      const animal = animals[j];
      if (animal[0] === element) {
        tmp.push(animal);
      }
    }

    if (tmp.length > 0) {
      result.push(tmp);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
