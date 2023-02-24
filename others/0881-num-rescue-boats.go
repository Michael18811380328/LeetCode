package main

import (
  "sort"
)

// 100 ms, 在所有 Go 提交中击败了17.89%
func numRescueBoats(people []int, limit int) int {
  sort.Ints(people)
  var res = 0;
  var left = 0;
  var right = len(people) - 1
  for {
    if people[left] + people[right] <= limit {
      left++
    }
    right--
    res++
    if left > right {
      break
    }
  }  
  return res
}
