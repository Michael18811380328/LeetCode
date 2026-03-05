import java.util.Random;

public class AntColony {
    static final int NUM_ANTS = 10;
    static final int NUM_CITIES = 5;
    static final int MAX_ITER = 100;
    static final double ALPHA = 1.0;
    static final double BETA = 2.0;
    static final double RHO = 0.5;
    static final double Q = 100;

    static double[][] pheromone = new double[NUM_CITIES][NUM_CITIES];
    static double[][] distance = new double[NUM_CITIES][NUM_CITIES];
    static int[] bestPath = new int[NUM_CITIES];
    static double bestLength = Double.MAX_VALUE;

    static Random rand = new Random();

    static void init() {
        for (int i = 0; i < NUM_CITIES; i++) {
            for (int j = 0; j < NUM_CITIES; j++) {
                pheromone[i][j] = 1.0;
                distance[i][j] = rand.nextInt(10) + 1; // 随机距离
            }
        }
    }

    static double calculateLength(int[] path) {
        double length = 0;
        for (int i = 0; i < NUM_CITIES - 1; i++) {
            length += distance[path[i]][path[i + 1]];
        }
        length += distance[path[NUM_CITIES - 1]][path[0]]; // 回到起点
        return length;
    }

    static void updatePheromone(int[] path, double length) {
        for (int i = 0; i < NUM_CITIES - 1; i++) {
            pheromone[path[i]][path[i + 1]] += Q / length;
            pheromone[path[i + 1]][path[i]] += Q / length;
        }
        pheromone[path[NUM_CITIES - 1]][path[0]] += Q / length;
    }

    static void antColony() {
        for (int iter = 0; iter < MAX_ITER; iter++) {
            for (int ant = 0; ant < NUM_ANTS; ant++) {
                int[] path = new int[NUM_CITIES];
                for (int i = 0; i < NUM_CITIES; i++) {
                    path[i] = i; // 初始化路径
                }

                // 随机打乱路径
                for (int i = 0; i < NUM_CITIES; i++) {
                    int j = rand.nextInt(NUM_CITIES);
                    int temp = path[i];
                    path[i] = path[j];
                    path[j] = temp;
                }

                double length = calculateLength(path);
                if (length < bestLength) {
                    bestLength = length;
                    System.arraycopy(path, 0, bestPath, 0, NUM_CITIES);
                }
                updatePheromone(path, length);
            }

            // 挤压信息素
            for (int i = 0; i < NUM_CITIES; i++) {
                for (int j = 0; j < NUM_CITIES; j++) {
                    pheromone[i][j] *= RHO;
                }
            }
        }
    }

    public static void main(String[] args) {
        init();
        antColony();

        System.out.println("最佳路径长度: " + bestLength);
        System.out.print("最佳路径: ");
        for (int city : bestPath) {
            System.out.print(city + " ");
        }
        System.out.println();
    }
}
