public class App {
    public static void main(String[] args) throws Exception {
        int[] arr = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 };
        int target = 10;

        int result = SearchBinary.binarySearch(arr, target);

        if (result != -1) {
            System.out.println("Elemento " + target + " encontrado no índice " + result);
        } else {
            System.out.println("Elemento " + target + " não encontrado na lista.");
        }
    }
}
