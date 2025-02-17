package utils

func isPowerOfTwo(n int) bool {
    if n <= 0 {
        return false
    }
    if n == 1 {
        return true
    }
    for {
        if n == 1{
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

// golang 里面没有 while 关键字，可以用for+break实现
// i:=0
// for {
//     do something
//     if i <= 10 {
//         break;
//     }
// }
