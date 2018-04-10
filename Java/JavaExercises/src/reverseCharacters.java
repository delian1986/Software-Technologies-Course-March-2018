import java.util.Scanner;

public class reverseCharacters {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        StringBuilder text= new StringBuilder();
        for (int i = 0; i < 3; i++) {
            String letter= scanner.nextLine();
            text.append(letter);
        }
        System.out.println(text.reverse());
    }
}
