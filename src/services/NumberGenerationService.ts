export const NumberGenerationService = {
    generatePrimeNumbers: (minValue: number, maxValue: number) => {
        const numbers = [];
        for (let i = minValue; i < maxValue; i++) {
            if (NumberGenerationService.checkIsPrime(i)) {
                numbers.push(i, i);
            }
        }
        return NumberGenerationService.shuffleArray(numbers);
    },

    shuffleArray: (arr: number[]) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    },

    checkIsPrime: (value: number) => {
        if (value <= 1) {
            return false;
        } else {
            for (let i = 2; i < value; i++) {
                if (value % i == 0) {
                    return false;
                }
            }
            return true;
        }
    }
}