// funkcje z bibliotek
import { v4 as uuidv4 } from 'uuid';
// funkcje z moich plików
import { sayHello, name } from './hello';
import calculate from './calculate';

sayHello();
console.log(name)
console.log(calculate(2, 6))
console.log(uuidv4())

