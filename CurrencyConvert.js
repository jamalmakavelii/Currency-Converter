import java.util.Scanner;

public class CurrencyConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Exchange rates (you should replace these with actual rates)
        double usdToEurRate = 0.85;
        double usdToGbpRate = 0.73;
        double usdToJpyRate = 110.42;

        System.out.println("Welcome to Currency Converter!");
        System.out.print("Enter the amount in USD: ");
        double amountInUSD = scanner.nextDouble();

        System.out.println("Select the currency to convert to:");
        System.out.println("1. EUR (Euro)");
        System.out.println("2. GBP (British Pound)");
        System.out.println("3. JPY (Japanese Yen)");
        System.out.print("Enter your choice (1/2/3): ");

        int choice = scanner.nextInt();
        double convertedAmount = 0.0;
        String currencyName = "";

        switch (choice) {
            case 1:
                convertedAmount = amountInUSD * usdToEurRate;
                currencyName = "EUR (Euro)";
                break;
            case 2:
                convertedAmount = amountInUSD * usdToGbpRate;
                currencyName = "GBP (British Pound)";
                break;
            case 3:
                convertedAmount = amountInUSD * usdToJpyRate;
                currencyName = "JPY (Japanese Yen)";
                break;
            default:
                System.out.println("Invalid choice.");
                return;
        }

        System.out.println(amountInUSD + " USD is equal to " + convertedAmount + " " + currencyName);

        scanner.close();
    }
}