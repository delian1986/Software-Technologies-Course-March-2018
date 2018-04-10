import java.util.Scanner;

public class booleanVariable {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        String input= scanner.nextLine().toLowerCase();
        switch (input){
            case "true":
                System.out.println("Yes");
                break;
            case "false":
                System.out.println("No");
                break;
        }
    }
}
