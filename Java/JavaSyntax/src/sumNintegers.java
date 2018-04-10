import java.util.Scanner;

public class sumNintegers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int inputLines = scanner.nextInt();
        int sumOfElements = 0;

        for (int i = 0; i < inputLines; i++) {
            int currNum = scanner.nextInt();
            sumOfElements += currNum;
        }

        System.out.format(("Sum = %d"),sumOfElements);
    }
}
