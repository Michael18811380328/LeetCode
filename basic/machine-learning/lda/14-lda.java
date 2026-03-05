import java.util.Arrays;

public class LDA {
    public static double[] lda(double[][] data, int[] labels) {
        int n = data.length;
        int m = data[0].length;
        double[] meanOverall = new double[m];
        double[][] meanClasses = new double[2][m];
        int[] classCounts = new int[2];

        // Calculate overall mean and class means
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                meanOverall[j] += data[i][j];
                if (labels[i] == 0) {
                    meanClasses[0][j] += data[i][j];
                    classCounts[0]++;
                } else {
                    meanClasses[1][j] += data[i][j];
                    classCounts[1]++;
                }
            }
        }
        
        for (int j = 0; j < m; j++) {
            meanOverall[j] /= n;
            meanClasses[0][j] /= classCounts[0];
            meanClasses[1][j] /= classCounts[1];
        }

        // Calculate between-class and within-class scatter
        double[][] S_B = new double[m][m];
        double[][] S_W = new double[m][m];

        for (int c = 0; c < 2; c++) {
            double[] meanDiff = new double[m];
            for (int j = 0; j < m; j++) {
                meanDiff[j] = meanClasses[c][j] - meanOverall[j];
            }
            for (int j = 0; j < m; j++) {
                S_B[j][j] += classCounts[c] * meanDiff[j] * meanDiff[j];
            }
        }

        for (int i = 0; i < n; i++) {
            double[] meanDiff = new double[m];
            for (int j = 0; j < m; j++) {
                meanDiff[j] = data[i][j] - meanClasses[labels[i]][j];
            }
            for (int j = 0; j < m; j++) {
                S_W[j][j] += meanDiff[j] * meanDiff[j];
            }
        }

        // Calculate weights (not fully implemented, just a placeholder)
        double[] weights = new double[m];
        for (int j = 0; j < m; j++) {
            weights[j] = S_B[j][j] / S_W[j][j]; // Simplified calculation
        }

        return weights;
    }

    public static void main(String[] args) {
        double[][] data = {{1, 2}, {2, 3}, {1.5, 2.5}, {6, 7}, {7, 8}, {6.5, 7.5}};
        int[] labels = {0, 0, 0, 1, 1, 1};
        double[] weights = lda(data, labels);
        System.out.println("LDA weights: " + Arrays.toString(weights));
    }
}
