# 967 find three numbers in a list to generate a triangle which C is max
def largestPerimeter(A):  
  if len(A) == 3:
    if (A[0] + A[1] + A[2]) > 2 * max(A[0], A[1], A[2]):
      return (A[0] + A[1] + A[2])
    else:
      return 0;

  A.sort(reverse=True)

  while (len(A) > 2 and not (A[0] + A[1] + A[2]) > 2 * max(A[0], A[1], A[2])):
    A.pop(0)

  if len(A) > 2:
    return (A[0] + A[1] + A[2])
  else:
    return 0
