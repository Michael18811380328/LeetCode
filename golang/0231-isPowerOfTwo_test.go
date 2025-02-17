package utils

import "testing"

func Test_isPowerOfTwo(t *testing.T) {
    tests := []struct {
        n     int
        want bool
    }{
        {0, false},
        {1, true},
        {2, true},
        {3, false},
        {4, true},
        {5, false},
        {8, true},
        {9, false},
        {10, false},
        {16, true},
        {32, true},
        {64, true},
    }
    for _, tt := range tests {
        if got := isPowerOfTwo(tt.n); got != tt.want {
            t.Errorf("isPowerOfTwo(%d) = %v, want %v", tt.n, got, tt.want)
        }
    }
}
