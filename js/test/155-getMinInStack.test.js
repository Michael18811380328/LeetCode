import { MinStack, MinStack2 } from '../src/155-getMinInStack';

test('155-get-min-number-in-stack', () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toEqual(-3);
  minStack.pop();
  expect(minStack.top()).toEqual(0);
  expect(minStack.getMin()).toEqual(-2);
});

test('155-get-min-number-in-stack', () => {
  const minStack = new MinStack2();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toEqual(-3);
  minStack.pop();
  expect(minStack.top()).toEqual(0);
  expect(minStack.getMin()).toEqual(-2);
});

test('155-get-min-number-in-stack', () => {
  const minStack = new MinStack2();
  minStack.push(1);
  minStack.push(2);
  expect(minStack.getMin()).toEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toEqual(1);
});
