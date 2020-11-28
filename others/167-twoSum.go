// 双指针实现两数之和-167
// 执行用时：4 ms 在所有 Go 提交中击败了 97.00%
// 内存消耗：2.9 MB , 在所有 Go 提交中击败了100.00%
func twoSum(numbers []int, target int) []int {
	for i, j :=0, len(numbers) - 1; i < j; {
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