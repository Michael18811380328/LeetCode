#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define NUM_ANTS 10
#define NUM_CITIES 5
#define MAX_ITER 100
#define ALPHA 1.0
#define BETA 2.0
#define RHO 0.5
#define Q 100

double pheromone[NUM_CITIES][NUM_CITIES];
double distance[NUM_CITIES][NUM_CITIES];
int best_path[NUM_CITIES];
double best_length = 1e9;

void init() {
    for (int i = 0; i < NUM_CITIES; i++) {
        for (int j = 0; j < NUM_CITIES; j++) {
            pheromone[i][j] = 1.0;
            distance[i][j] = rand() % 10 + 1; // 随机距离
        }
    }
}

double calculate_length(int path[]) {
    double length = 0;
    for (int i = 0; i < NUM_CITIES - 1; i++) {
        length += distance[path[i]][path[i + 1]];
    }
    length += distance[path[NUM_CITIES - 1]][path[0]]; // 回到起点
    return length;
}

void update_pheromone(int path[], double length) {
    for (int i = 0; i < NUM_CITIES - 1; i++) {
        pheromone[path[i]][path[i + 1]] += Q / length;
        pheromone[path[i + 1]][path[i]] += Q / length;
    }
    pheromone[path[NUM_CITIES - 1]][path[0]] += Q / length;
}

void ant_colony() {
    for (int iter = 0; iter < MAX_ITER; iter++) {
        for (int ant = 0; ant < NUM_ANTS; ant++) {
            int path[NUM_CITIES];
            for (int i = 0; i < NUM_CITIES; i++) {
                path[i] = i; // 初始化路径
            }

            // 随机打乱路径
            for (int i = 0; i < NUM_CITIES; i++) {
                int j = rand() % NUM_CITIES;
                int temp = path[i];
                path[i] = path[j];
                path[j] = temp;
            }

            double length = calculate_length(path);
            if (length < best_length) {
                best_length = length;
                for (int i = 0; i < NUM_CITIES; i++) {
                    best_path[i] = path[i];
                }
            }
            update_pheromone(path, length);
        }

        // 挤压信息素
        for (int i = 0; i < NUM_CITIES; i++) {
            for (int j = 0; j < NUM_CITIES; j++) {
                pheromone[i][j] *= RHO;
            }
        }
    }
}

int main() {
    srand(time(NULL));
    init();
    ant_colony();
    
    printf("最佳路径长度: %f\n", best_length);
    printf("最佳路径: ");
    for (int i = 0; i < NUM_CITIES; i++) {
        printf("%d ", best_path[i]);
    }
    printf("\n");
    return 0;
}
