const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superrman", "Flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_arr = [1,2,3,4,[5,6,7] ,7,[7,6,5,4,3],[0,4,58,0],[1,23]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);



console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));

console.log(Array.from({name: "hitesh"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

