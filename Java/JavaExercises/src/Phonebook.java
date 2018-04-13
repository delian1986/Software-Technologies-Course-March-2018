import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Scanner;

public class Phonebook {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        LinkedHashMap<String, String> phoneBook = new LinkedHashMap<>();
        while (true) {
            String input = scanner.nextLine();
            if (input.equals("END")) {
                break;
            }

            String[] tokens = input.split("\\s+");
            String command = tokens[0];
            String name = tokens[1];

            if (command.equals("A")) {
                String phone = tokens[2];
                if (!phoneBook.containsKey(name)) {
                    phoneBook.put(name,"");
                }
                phoneBook.put(name, phone);
            } else {
                if (phoneBook.containsKey(name)) {
                    for (HashMap.Entry<String, String> entry : phoneBook.entrySet()) {
                        if (entry.getKey().equals(name)) {
                            System.out.println(entry.getKey() + " -> " + entry.getValue());
                        }
                    }
                }else{
                    System.out.printf("Contact %s does not exist.\n",name);

                }
            }


        }
    }
}
