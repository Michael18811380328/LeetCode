public class LinearRegression {
    public static double[] linearRegression(double[] x, double[] y) {
        int n = x.length;
        double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

        for (int i = 0; i < n; i++) {
            sumX += x[i];
            sumY += y[i];
            sumXY += x[i] * y[i];
            sumX2 += x[i] * x[i];
        }

        double m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        double b = (sumY - m * sumX) / n;

        return new double[]{m, b};
    }

    public static void main(String[] args) {
        double[] x = {1, 2, 3, 4, 5};
        double[] y = {2, 3, 5, 7, 11};
        double[] result = linearRegression(x, y);
        System.out.printf("y = %.2fx + %.2f%n", result[0], result[1]);
    }
}
