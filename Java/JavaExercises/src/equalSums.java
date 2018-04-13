import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class equalSums {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int[] array = Arrays.stream(reader
                .readLine().split("\\s"))
                .mapToInt(Integer::parseInt).toArray();


        int pos = 0;
        boolean isFound = false;

        for (int i = 0; i < array.length; i++) {
            int leftSum = 0;
            int rightSum = 0;

            for (int j = 0; j < i; j++) {
                leftSum += array[j];
            }
            for (int k = i + 1; k < array.length; k++) {
                rightSum += array[k];
            }
            if (leftSum == rightSum) {
                pos = i;
                isFound=true;
                break;
            }
        }
        if (!isFound) {
            System.out.println("no");
        } else {
            System.out.println(pos);
        }
    }
}
