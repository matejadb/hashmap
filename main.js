import { HashMap } from './hashmap.js';

const test = new HashMap();

test.set('yeah', 'Prrah prrah prrah');
test.set('yah', 'YEAH YEAH YEAHH');
test.set('ya', 'YEAH YEAHH');

/* console.log(test.get('yeah'));
console.log(test.remove('yeah'));
console.log(test.has('yeah'));
console.log(test.remove('yh'));
 */
//console.log(test.length());
//test.clear();
//console.log(test.length());
//console.log(test.has('yeah'));
//console.log(test.has('yah'));
//console.log(test.has('ya'));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
