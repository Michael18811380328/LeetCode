import numpy as np

NUM_ANTS = 10
NUM_CITIES = 5
MAX_ITER = 100
ALPHA = 1.0
BETA = 2.0
RHO = 0.5
Q = 100

pheromone = np.ones((NUM_CITIES, NUM_CITIES))
distance = np.random.randint(1, 10, size=(NUM_CITIES, NUM_CITIES))
np.fill_diagonal(distance, 0)  # 自身距离为0
best_path = []
best_length = float('inf')

def calculate_length(path):
    length = sum(distance[path[i], path[i + 1]] for i in range(NUM_CITIES - 1))
    length += distance[path[NUM_CITIES - 1], path[0]]  # 回到起点
    return length

def update_pheromone(path, length):
    for i in range(NUM_CITIES - 1):
        pheromone[path[i], path[i + 1]] += Q / length
        pheromone[path[i + 1], path[i]] += Q / length
    pheromone[path[NUM_CITIES - 1], path[0]] += Q / length

def ant_colony():
    global best_length, best_path
    for _ in range(MAX_ITER):
        for _ in range(NUM_ANTS):
            path = np.random.permutation(NUM_CITIES)  # 随机路径
            length = calculate_length(path)
            if length < best_length:
                best_length = length
                best_path = path.copy()
            update_pheromone(path, length)

        # 挤压信息素
        global pheromone
        pheromone *= RHO

ant_colony()
print("最佳路径长度:", best_length)
print("最佳路径:", best_path)
