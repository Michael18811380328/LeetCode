import numpy as np

def linear_regression(x, y):
    m, b = np.polyfit(x, y, 1)
    return m, b

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
m, b = linear_regression(x, y)
print(f"y = {m:.2f}x + {b:.2f}")
