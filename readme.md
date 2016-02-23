# Deep Lockdown

----

Recursively call `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()` on objects.

This is based on the [deep-freeze](https://github.com/substack/deep-freeze) library but takes it a step further and prevents new properties from being added or removed to the object. It also marks all existing properties as non-configurable.

----

### Install

`npm install deep-lockdown`

----

### Usage

```javascript
var deepLockdown = require('deep-lockdown');

var myObj = {
  a: 'a',
  b: 'b',
  c: {
    e: {
      q: 'word'
    }
  }
};

deepLockdown(myObj);

myObj.d = 'd';
myObj.a = 'jkl';
myObj.c.e.q = 'different-word';
myObj.c.e.f = 'add-some-words';

console.log(myObj);
/**
 * Result Unchanged
 *
 var myObj = {
   a: 'a',
   b: 'b',
   c: {
     e: {
       q: 'word'
     }
   }
 };
*/
```
