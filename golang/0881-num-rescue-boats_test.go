package utils

import "testing"

func TestNumRescueBoats(t *testing.T) {
    tests := []struct {
        name     string
        people   []int
        limit    int
        expected int
    }{
        {"two people can share", []int{1, 2}, 3, 1},
        {"two people need separate", []int{3, 3}, 3, 2},
        {"mixed weights", []int{1, 2, 3, 4}, 5, 2}, // (1,4) and (2,3)
        {"all light", []int{1, 1, 1, 1}, 3, 2},     // (1,1), (1,1)
        {"all heavy", []int{3, 3, 3, 3}, 3, 4},     // each needs own boat
        {"single person", []int{5}, 10, 1},
        {"empty array", []int{}, 10, 0},
        {"leetcode example 1", []int{1, 2}, 3, 1},
        {"leetcode example 2", []int{3, 2, 2, 1}, 3, 3},
        {"leetcode example 3", []int{3, 5, 3, 4}, 5, 4},        
        {"max capacity pairing", []int{2, 2, 2, 2}, 4, 2},
        {"one heavy others light", []int{5, 1, 1, 1}, 5, 3}, // (5), (1,1), (1)
        {"alternating weights", []int{1, 3, 5, 2, 4}, 6, 3}, // (1,5), (3,2), (4)        
        {"maximum people", []int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, 2, 5},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := numRescueBoats(tt.people, tt.limit)
            if result != tt.expected {
                t.Errorf("numRescueBoats(%v, %d) = %d, want %d", tt.people, tt.limit, result, tt.expected)
            }
        })
    }
}

func TestNumRescueBoatsOriginalUnmodified(t *testing.T) {
    original := []int{3, 1, 2}
    _ = numRescueBoats(original, 3)
    
    expected := []int{1, 2, 3}
    for i := range original {
        if original[i] != expected[i] {
            t.Errorf("array should be sorted after function call: got %v, want %v", original, expected)
            return
        }
    }
}
