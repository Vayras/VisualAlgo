// create an array of 10 random numbers
const randomNumbers = [10, 5, 7, 3, 2, 8, 9, 6, 1, 4];

//create a bubble sort function that retuns each step of the sort

function bubbleSort(arr) {
  let steps = [];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        steps.push([...arr]);
        swapped = true;
      }
    }
  } while (swapped);
  return steps;
}

console.log(bubbleSort(randomNumbers));