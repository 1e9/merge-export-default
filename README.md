# merge-export-default

> Try to [merge the export default](https://github.com/1e9/merge-export-default)

## Install

```
$ npm install -S merge-export-default
```

## Usage

```js
// a.js
export const A = 'A';
export default function foo () {}; 
```

```js
// b.js
export const B = 'B';
```

```js
import mergeModules from 'merge-export-default';
import * as a from './a.js';
import * as b from './a.js';

// { A: 'A', B: 'B', a_default: [Function: foo] }
export default mergeModules({ a, b }); 
```
