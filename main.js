import { HashMap } from './hashmap.js';

const test = new HashMap();

test.set('yeah', 'Prrah prrah prrah');
test.set('yah', 'YEAH YEAH YEAHH');
console.log(test.get('yeah'));
console.log(test.remove('yeah'));
console.log(test.has('yeah'));
console.log(test.remove('yh'));
