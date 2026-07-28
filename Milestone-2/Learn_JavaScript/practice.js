let number = [12, 67, 43, 65, 54, 76];
let value = 55;

function getFilterArr(arr, value) {
  let filterArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr
}
console.log(getFilterArr(number,value));