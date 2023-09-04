public class SearchBinary {
    // Método para realizar a busca binária em um array ordenado
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int middle = left + (right - left) / 2;

            // Verifica se o elemento alvo está no meio do array
            if (arr[middle] == target) {
                return middle; // Elemento encontrado, retorna o índice
            }

            // Se o elemento alvo for menor, ajusta o índice direito
            if (arr[middle] > target) {
                right = middle - 1;
            } else {
                // Se o elemento alvo for maior, ajusta o índice esquerdo
                left = middle + 1;
            }
        }

        return -1; // Elemento não encontrado
    }
}
