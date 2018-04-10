import java.util.Arrays;
import java.util.Scanner;

public class treeIntegersSum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] arr = new int[3];
        int sumOfElements = 0;

        for (int i = 0; i < arr.length; i++) {
            arr[i] = input.nextInt();
        }

        Arrays.sort(arr);
        if (arr[0] + arr[1] == arr[2]) {
            System.out.println(String.format("%d + %d = %d", Math.min(arr[0], arr[1]), Math.max(arr[0], arr[1]),arr[2]));
        } else if (arr[2] + arr[1] == arr[0]) {
            System.out.println(String.format("%d + %d = %d", Math.min(arr[2], arr[1]), Math.max(arr[2], arr[1]),arr[0]));
        } else if (arr[0] + arr[2] == arr[1]) {
            System.out.println(String.format("%d + %d = %d", Math.min(arr[0], arr[2]), Math.max(arr[0], arr[2]), arr[1]));

        } else {
            System.out.println("No");

        }

    }
}
