
import java.util.Scanner;

public class fitString20Chars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sentance=scanner.nextLine();

        if (sentance.length()>20){
            System.out.println(sentance
                    .substring(0,20));
        }else{
            int asterxLenght=20-sentance.length();
            System.out.println(String.format("%-20s", sentance).replace(' ', '*'));

        }

    }
}
