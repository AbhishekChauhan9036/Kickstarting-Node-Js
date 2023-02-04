// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into
// ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
const ans = array.map((element) => {
  return element == " " ? "empty string" : element;
});
console.log(ans);



const obj1 = { key1: 1 };
const obj2 = { ...obj1 };
if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects");
}
//Output - different objects



const obj3 = { key1: 1, key2: 2 };
const obj4 = { ...obj3, key1: 1000 };
console.log(obj3);
console.log(obj4);

//Output- { key1: 1, key2: 2 }
// { key1: 1000, key2: 2 }
