package utils

import "testing"

func TestGetConcatenation(t *testing.T) {
    tests := []struct {
        name     string
        nums     []int
        expected []int
    }{
        {"empty array", []int{}, []int{}},
        {"single element", []int{1}, []int{1, 1}},
        {"two elements", []int{1, 2}, []int{1, 2, 1, 2}},
        {"multiple elements", []int{1, 2, 3}, []int{1, 2, 3, 1, 2, 3}},
        {"with negative numbers", []int{-1, -2}, []int{-1, -2, -1, -2}},
        {"with zero", []int{0, 1, 0}, []int{0, 1, 0, 0, 1, 0}},
        {"mixed numbers", []int{-1, 0, 1}, []int{-1, 0, 1, -1, 0, 1}},
        {"large array", []int{1, 2, 3, 4, 5}, []int{1, 2, 3, 4, 5, 1, 2, 3, 4, 5}},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := getConcatenation(tt.nums)
            
            if len(result) != len(tt.expected) {
                t.Errorf("getConcatenation(%v) length = %d, want %d", tt.nums, len(result), len(tt.expected))
                return
            }
            
            for i := range result {
                if result[i] != tt.expected[i] {
                    t.Errorf("getConcatenation(%v)[%d] = %d, want %d", tt.nums, i, result[i], tt.expected[i])
                    return
                }
            }
        })
    }
}

func TestGetConcatenationOriginalUnmodified(t *testing.T) {
    original := []int{1, 2, 3}
    _ = getConcatenation(original)
    
    expected := []int{1, 2, 3}
    for i := range original {
        if original[i] != expected[i] {
            t.Errorf("original array was modified: got %v, want %v", original, expected)
            return
        }
    }
}
