// 1)
const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 }
const { key1, key3 } = { ...obj1 }
console.log(key1, key3)
// OutPut 1 1000



// 2) 
const arr1 = ['value1', 'value2']
const [val1, val2] = arr1
console.log(val1)
console.log(val2)
// OutPut value1
//        value2



// 3) 
const obj2 = { 'key1': 1, "key2": 2, "key3": 1000 }
let { key4, key5 } = obj2
key4 = 20;
key5 = 123
console.log(obj2.key4, obj2.key5)
// Output undefined undefined