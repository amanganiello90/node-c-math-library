node-c-math-library
===============================
An example of C Math library built with [node-gyp](https://github.com/nodejs/node-gyp) and used in a node project with [ffi](https://www.npmjs.com/package/ffi)

> Please attention to install globally node-gyp (and its build tools) as explained in the related link. For more information refers to [example](https://www.sysleaf.com/nodejs-ffi/)

## Getting started

Install the module in your javascript/typescript project:

```
npm install  node-c-math-library
```

Then you can access to the api with:

```
import myMath=require('node-c-math-library');

myMath.add(3,2);
myMath.minus(3,2);
myMath.multiply(3,2);
```

The ts function definitions are enabled from [index.d.ts](index.d.ts)
