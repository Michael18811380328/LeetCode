// 双指针实现两数之和-167
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

// 双指针实现两数平方和-633
// 判断一个数是否为两个数的平方和
func judgeSquareSum(c int) bool {
	for i, j :=0, int(math.Sqrt(float64(c))); i<= j; {
		if i * i + j * j == c {
			return true
		}
		if i * i + j * j < c {
			i++
			continue
		}
		if i * i + j * j > c {
			j--
			continue
		}
	}
	return false
}
