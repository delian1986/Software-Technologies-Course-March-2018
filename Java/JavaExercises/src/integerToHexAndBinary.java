import java.util.Scanner;

public class integerToHexAndBinary {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        int num = scanner.nextInt();

        String hex= Integer.toHexString(num);
        String binary=Integer.toBinaryString(num);

        System.out.println(hex.toUpperCase());
        System.out.println(binary);
    }
}
