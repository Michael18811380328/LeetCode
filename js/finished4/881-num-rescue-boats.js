// 881-numRescueBoats
// 小船逃生问题-881

// 对撞指针
// 180 ms击败了95.04%
// 45.4 MB击败了12.25%

function numRescueBoats(people, limit) {
  people.sort((a, b) => (b - a));
  let res = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    res++;
  }
  return res;
}

export { numRescueBoats };
