import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class sumsByTown {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        int lines = scanner.nextInt();
        scanner.nextLine();
        TreeMap<String,Double> towns=new TreeMap<>();

        for (int i = 0; i < lines; i++) {
            String inputLine= scanner.nextLine();
            String[] tokens=inputLine.split("\\|");
            String city=tokens[0].trim();
            Double income=Double.parseDouble(tokens[1].trim());

            if (!towns.containsKey(city)){
                towns.put(city, income);
            }else {
                towns.put(city,towns.get(city)+income);
            }
        }

        for (Map.Entry<String,Double> entry: towns.entrySet()) {
            String city=entry.getKey();
            Double income=entry.getValue();

            System.out.printf("%s -> %.1f\n",city,income);
        }
        

    }
}
