package utils

import "testing"

func Test_judgeSquareSum(t *testing.T) {
	tests := []struct {
		c     int
		want bool
	}{
		{1, true},
		{2, true},
		{3, false},
		{4, true},
	}
	for _, tt := range tests {
		if got := judgeSquareSum(tt.c); got != tt.want {
			t.Errorf("judgeSquareSum(%d) = %v, want %v", tt.c, got, tt.want)
		}
	}
}
