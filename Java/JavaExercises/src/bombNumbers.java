import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;


public class bombNumbers {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int[] array = Arrays.stream(reader
                .readLine().split("\\s"))
                .mapToInt(Integer::parseInt).toArray();

        int[] specNumbers = Arrays.stream(reader
                .readLine().split("\\s"))
                .mapToInt(Integer::parseInt).toArray();

        while (true) {
            boolean haveBomb = false;
            int bomb = specNumbers[0];
            int power = specNumbers[1];
            int index = 0;


            for (int i = 0; i < array.length; i++) {
                if (array[i] == bomb) {
                    index = i;
                    haveBomb = true;
                }
            }
            if (!haveBomb){
                break;
            }
            int startIndex = index - power;
            int endIndex = index + power;

            if (startIndex < 0) {
                startIndex = 0;
            }
            if (endIndex > array.length - 1) {
                endIndex = array.length - 1;
            }

            for (int i = startIndex; i <= endIndex; i++) {
                array[i] = 0;
            }

        }
        int sum=0;
        for (int i = 0; i < array.length; i++) {
            sum+=array[i];
        }

        System.out.println(sum);



    }
}
