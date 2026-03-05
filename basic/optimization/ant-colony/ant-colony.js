const NUM_ANTS = 10; // 蚂蚁数量
const NUM_CITIES = 5; // 城市数量
const MAX_ITER = 100; // 最大迭代次数
const ALPHA = 1.0; // 信息素重要程度参数
const BETA = 2.0; // 启发函数重要程度参数
const RHO = 0.5; // 信息素蒸发参数
const Q = 100; // 信息素释放参数

let pheromone = Array.from({ length: NUM_CITIES }, () => Array(NUM_CITIES).fill(1));
let distance = Array.from({ length: NUM_CITIES }, () => 
    Array.from({ length: NUM_CITIES }, () => Math.floor(Math.random() * 10) + 1)
);
for (let i = 0; i < NUM_CITIES; i++) {
    distance[i][i] = 0; // 自身距离为0
}

let bestPath = [];
let bestLength = Infinity;

function calculateLength(path) {
    let length = 0;
    for (let i = 0; i < NUM_CITIES - 1; i++) {
        length += distance[path[i]][path[i + 1]];
    }
    length += distance[path[NUM_CITIES - 1]][path[0]]; // 回到起点
    return length;
}

function updatePheromone(path, length) {
    for (let i = 0; i < NUM_CITIES - 1; i++) {
        pheromone[path[i]][path[i + 1]] += Q / length;
        pheromone[path[i + 1]][path[i]] += Q / length;
    }
    pheromone[path[NUM_CITIES - 1]][path[0]] += Q / length;
}

function antColony() {
    for (let iter = 0; iter < MAX_ITER; iter++) {
        for (let ant = 0; ant < NUM_ANTS; ant++) {
            let path = Array.from({ length: NUM_CITIES }, (_, i) => i);
            for (let i = path.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [path[i], path[j]] = [path[j], path[i]]; // 随机打乱路径
            }

            let length = calculateLength(path);
            if (length < bestLength) {
                bestLength = length;
                bestPath = [...path];
            }
            updatePheromone(path, length);
        }

        // 挤压信息素
        for (let i = 0; i < NUM_CITIES; i++) {
            for (let j = 0; j < NUM_CITIES; j++) {
                pheromone[i][j] *= RHO;
            }
        }
    }
}

antColony();
console.log("最佳路径长度:", bestLength);
console.log("最佳路径:", bestPath);
