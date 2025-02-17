package utils

import "testing"

func Test_canWinNim(t *testing.T) {
    tests := []struct {
        n     int
        want bool
    }{
        {0, false},
        {1, true},
        {2, true},
        {3, true},
        {4, false},
        {5, true},
        {6, true},
        {7, true},
        {8, false},
        {9, true},
        {10, true},
        {11, true},
        {12, false},
        {13, true},
        {14, true},
        {15, true},
        {16, false},
        {17, true},
        {18, true},
        {19, true},
        {20, false},
    }
    for _, tt := range tests {
        if got := canWinNim(tt.n); got != tt.want {
            t.Errorf("canWinNim(%d) = %v, want %v", tt.n, got, tt.want)
        }
    }
}
