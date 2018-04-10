import java.util.Scanner;

public class variableInHexFormat {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        String numInHex=scanner.nextLine();
        Integer decNum=Integer.parseInt(numInHex,16);
        System.out.println(decNum);
    }
}
