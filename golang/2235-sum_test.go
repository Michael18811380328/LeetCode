package utils

import "testing"

func TestSum(t *testing.T) {
    tests := []struct {
        name     string
        num1     int
        num2     int
        expected int
    }{
        {"positive numbers", 2, 3, 5},
        {"negative numbers", -2, -3, -5},
        {"mixed numbers", -2, 3, 1},
        {"zero with number", 0, 5, 5},
        {"both zeros", 0, 0, 0},
        {"large numbers", 1000000, 2000000, 3000000},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := sum(tt.num1, tt.num2)
            if result != tt.expected {
                t.Errorf("sum(%d, %d) = %d, want %d", tt.num1, tt.num2, result, tt.expected)
            }
        })
    }
}
