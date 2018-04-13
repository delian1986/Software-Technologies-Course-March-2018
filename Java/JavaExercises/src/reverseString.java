import java.util.Scanner;

public class reverseString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String word=scanner.nextLine();
        System.out.println(new StringBuilder(word)
        .reverse());
    }
}
