/**
 * Please implement this method to return count of chunks in given array of numbers.
 *
 * Chunk is defined as continous sequence of one or more numbers separated by one or more zeroes.
 * Array can contain leading and trailing zeroes.
 *
 * Example: array [5, 4, 0, 0, -1, 0, 2, 0, 0] contains 3 chunks
 */
 export const countChunks = (arrayOfNumbers: number[]) => {
    let count = 0;
  
    // to preserve original field
    let arr = Array.from(arrayOfNumbers);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === 0) {
                    arr[j] = false;
                } else {
                    break;
                }
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    
    // end case exception
    if (arr[arr.length - 1] !== 0 && arr[arr.length - 1] !== false) {
        for (let i = arr.length - 1; i >= 0; i++) {
            if (arr[i] === false) {
                continue;
            } else {
                count++;
                break;
            }
        }
    }
    return count;
}