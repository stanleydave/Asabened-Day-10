const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

let countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
//EXercise 1

const set = new Set();
// NO 2
for (let i = 0; i <= 10; i++) {
  set.add(i);
}
console.log(set);

// NO 3
set.delete(1);
console.log(set);

//NO  4
set.clear();
console.log(set);

// NO 5
let arr = ["she", "he", "goat", "sheep", "ram"];
let set2 = new Set(arr);
console.log(set2);

// NO 6
let map = new Map(countries2);
console.log(map);

for (const [country, city] of map) {
  console.log(`${country}: ${country.length}, ${city}: ${city.length}`);
}

// EXERCISE 2
//  N0 1
let c = [...a, ...b];
let cSet = new Set(c);
console.log(cSet);

// NO 2
let A = new Set(a);
let B = new Set(b);
let filter = a.filter((num) => B.has(num));
console.log(filter);

// NO 3
let diffFilter = a.filter((num) => !B.has(num));
console.log(diffFilter);

// EXERCISE 3
let languages = [
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 },
];

//   NO 1
console.log("\n");
let langSet = new Set(languages);
console.log(langSet.size);

// NO 2
console.log("\n");
function mostSpokenLanguages(num) {
  let slice = languages.slice(0, num);
  return slice;
}
console.log(mostSpokenLanguages(4));
