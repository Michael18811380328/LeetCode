var replaceAllInserter = require('string.prototype.replaceall');

// Node 12 don't support String.replaceAll(), so use this polyfill for unit test
// https://stackoverflow.com/questions/65295584/jest-typeerror-replaceall-is-not-a-function
replaceAllInserter.shim();
