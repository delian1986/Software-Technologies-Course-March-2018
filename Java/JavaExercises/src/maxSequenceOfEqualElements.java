import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class maxSequenceOfEqualElements {
    public static void main(String[] args) throws IOException {

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int[] array = Arrays.stream(reader
                .readLine().split("\\s"))
                .mapToInt(Integer::parseInt).toArray();

        int startPost = 0;
        int best = 1;
        int curr = 1;

        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] == array[i + 1]) {
                curr++;

            } else {

                curr = 1;
            }
            if (curr > best) {
                best = curr;
                startPost = (i+1)-best+1;
            }
        }

        for (int i = startPost; i < startPost + best; i++) {
            System.out.print(array[i] + " ");
        }
    }
}
