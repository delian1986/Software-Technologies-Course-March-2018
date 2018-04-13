import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class censorEmailAddress {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //read email
        String email=scanner.nextLine();

        //find "@"
        int indexOfKliomba=email.indexOf("@");

        //censoring the username
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < indexOfKliomba; i++) {
            builder.append("*");
        }

        //appending domain name
        String domain=email.substring(indexOfKliomba,email.length());
        builder.append(domain);

        //finally building replecement string
        String replacement=builder.toString();

        //read text
        String text=scanner.nextLine();

        //regex stuff
        Pattern p=Pattern.compile(email);
        Matcher matcher= p.matcher(text);
        String censoredText= matcher.replaceAll(replacement);

        System.out.println(censoredText);

    }
}
