import java.util.Scanner;

public class symmetricNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();


        for (int i = 1; i <= num; i++) {
            boolean isSimetric = true;
            char[] current = Integer.toString(i).toCharArray();
            for (int j = 0; j < current.length / 2; j++) {
                if (current[j] != (current[current.length - 1 - j])) {
                    isSimetric = false;
                    break;
                }
            }
            if (isSimetric) {
                System.out.print(i + " ");
            }
        }
//        char[] word= scanner.nextLine().toCharArray();
//        char letter = word[2];
    }
}

