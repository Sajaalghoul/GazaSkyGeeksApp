// task2
const numbers = [1, 5, 3, 6, 8, 7, 8];
// sum function using reduce
function sum(nums) {
  const startValue = 0;
  const result = nums.reduce((total,num) => {
    return total + num;
  }, startValue);
  return result;
}
// average function using sum(reusable function) and then dividung it to the length
function average(nums) {
  const numberSum = sum(nums);
  const numbersLength = nums.length;
  return numberSum / numbersLength;
}
// calling the function
console.log("Average:", average(numbers));
// taks 3
// removing duplicates using set method and spread operator to make it array
function duplicatesRemove(arr) {
  return [...new Set(arr)];
}

const nums = [1, 5, 6, 8, 3, 1, 6, 8];
console.log("Unique Array:", duplicatesRemove(nums));
