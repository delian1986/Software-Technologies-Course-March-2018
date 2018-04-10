import java.util.Scanner;

public class vowelOrDigit {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        char symbol=scanner.next().charAt(0);
        String result = "";

        if (symbol=='a'||symbol=='e'||
                symbol=='o'||symbol=='u'||
                symbol=='i'||symbol=='y'){
            result="vowel";
        }else if((int)symbol>=48&&
                (int)symbol<=57){
            result="digit";
        }else {
            result="other";
        }

        System.out.println(result);
    }
}
