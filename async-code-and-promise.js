// What willl be the output of this
// 1) 
console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
console.log('d');
// Output a  b  d  c




// 2) 
console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)
console.log('e');
// OutPut-a b e d c


/*Challenge
Can you make the above code print in the following sequence using promises 
and async/await. Write the code and paste it here
Expected Output
a
b
c
d
e*/
setTimeout(() =>console.log('a'),5);
setTimeout(() =>console.log('b'),10);
setTimeout(() => console.log('c'), 30)
setTimeout(() => console.log('d'), 80)
setTimeout(() =>console.log('e'),100);