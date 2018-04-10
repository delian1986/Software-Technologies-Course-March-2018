import java.util.Arrays;
import java.util.Scanner;

public class largest3Numbers {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        String[] line = scanner.nextLine().split("\\s+");
        int[] array = new int[line.length];
        for (int i = 0; i < line.length; i++) {
            array[i] = Integer.parseInt(line[i]);
        }

        Arrays.sort(array);
        int arrayElements = array.length;
        if (arrayElements > 3) {
            arrayElements = 3;
        }
        for (int i = array.length - 1; i >= array.length-arrayElements; i--) {
            System.out.println(array[i]);
        }
    }
}
