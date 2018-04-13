import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class MostFrequentNumber {
    public static void main(String[] args) throws IOException {

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int[] array = Arrays.stream(reader
                .readLine().split("\\s"))
                .mapToInt(Integer::parseInt).toArray();

        int best = 1;
        int curr = 1;
        int num = array[0];

        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    curr++;
                }
            }
            if (curr > best) {
                best = curr;
                num = array[i];
            }
            curr=1;
        }

        System.out.println(num);


    }
}
