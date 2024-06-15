// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// ** IMPORTANT **
// ** Polyfill core-js and regenerator-runtime needed for transpiling new ES6+ features (if used).
// ** Only for build process since there are some unknown issues with core-js in dev mode.
// ** I tried to resolve the issue so hard but I could not find a solution
// ** it appears to be a bug in core-js or a conflict between packages, the configured environment or something else.
// ** This is my first time using core-js and regenerator-runtime so I am learning yet
// ** **

import test, { greeting, objectTest } from './components/test.mjs';

// TEMP: Testing the confuration of babel and core-js in build process -> success
const testFunction = () => {
  var array = Array.of(1, 2, 3);
  console.log(array);
  var set = new Set([1, 2, 3]);
  console.log(set);
  console.log(Array.from('test'));
};

testFunction();

const testingImports = () => {
  console.log(test);
  greeting('Hello JS!');
  console.log(objectTest.test);
};

testingImports();
