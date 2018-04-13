import java.util.Scanner;

public class indexOfLetters {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        char[] word=scanner.nextLine().toLowerCase().toCharArray();

        for (int i = 0; i < word.length; i++) {
            System.out.printf("%s -> %d\n",word[i],((int)word[i])-97);
        }
    }
}
