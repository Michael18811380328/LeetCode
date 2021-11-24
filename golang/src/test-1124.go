package main

import (
	"sort"
)

// 0167
func twoSum(numbers []int, target int) []int {
	for i, j := 0, len(numbers) -1; i < j; {
		if numbers[i] + numbers[j] == target {
			return []int{i + 1, j + 1}
		}
		if numbers[i] + numbers[j] < target {
			i++
			continue
		}
		if numbers[i] + numbers[j] > target {
			j--
			continue
		}
	}
	return []int{}
}

// 0231
func isPowerOfTwo(n int) bool {
	if n <= 0 {
		return false
	}
	if n == 1 {
		return true
	}
	for {
		if n == 1 {
			return true
		}
		if n % 2 != 0 {
			return false
		}
		n = n / 2
		if n <= 0 {
			break
		}
	}
	return false
}

// 292
func canWinNim(n int) bool {
	return (n % 4 != 0)
}

// 0663
func judgeSquareSum(c int) bool {
	for i, j := 0, int(math.Sqrt(float64(c))); i <= j; {
		var res = i * i + j * j
		if res == c {
			return true
		}
		if (res < c) {
			i++
			continue
		}
		if (res > c) {
			i--
			continue
		}
	}
	return false
}

// 0881
func numRescueBoats(pepple []int, limit int) int {
	sort.Ints(people)
	var res = 0
	var left = 0
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

// 1929
func getConcatenation(nums []int) []int {
	return append(nums, nums...)
}
