// Since we use `async` / `await` we need babel-polyfill
import '@babel/polyfill';

// // import your test files
// import './tests/countdown-test';

// // we import our tests using webpack's require.context
const requireTest = require.context('.', true, /-test/);
requireTest.keys().forEach(requireTest);
