import java.util.Arrays;
import java.util.Scanner;

public class compareCharArrays {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] arrayOne = scanner.nextLine().split("\\s+");
        String[] arrayTwo = scanner.nextLine().split("\\s+");
        boolean areEqual = true;

        for (int i = 0; i < Math.min(
                arrayTwo.length, arrayOne.length); i++) {
            int equality = arrayOne[i].compareTo(arrayTwo[i]);
            if (equality < 0) {
                System.out.println(String.join("", arrayOne));
                System.out.println(String.join("", arrayTwo));
                areEqual = false;
                break;
            } else if(equality>0) {
                System.out.println(String.join("", arrayTwo));
                System.out.println(String.join("", arrayOne));
                areEqual = false;
                break;
            }
        }
        if (areEqual){
            if (arrayOne.length>arrayTwo.length){
                System.out.println(String.join("", arrayTwo));
                System.out.println(String.join("", arrayOne));
            }else{
                System.out.println(String.join("", arrayOne));
                System.out.println(String.join("", arrayTwo));

            }
        }
    }
}
