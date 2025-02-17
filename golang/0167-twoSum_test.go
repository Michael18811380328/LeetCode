package utils

import "reflect"
import "testing"

func Test_twoSum(t *testing.T) {
	tests := []struct {
		numbers []int
		target  int
		want    []int
	}{
		{[]int{2, 7, 11, 15}, 9, []int{1, 2}},
		{[]int{2, 7, 11, 15}, 18, []int{2, 3}},
		{[]int{2, 7, 11, 15}, 26, []int{3, 4}},
	}
	for _, tt := range tests {
		if got := twoSum(tt.numbers, tt.target); !reflect.DeepEqual(got, tt.want) {
			t.Errorf("twoSum() = %v, want %v", got, tt.want)
		}
	}
}
