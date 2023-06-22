function createHelloWorld() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return function (...args): string {
    return 'Hello World';
  };
}

export {createHelloWorld};
