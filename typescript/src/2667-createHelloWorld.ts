function createHelloWorld() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return function (...args): string {
    return 'Hello World';
  };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

export {createHelloWorld};
