//first solution
var moveZeroes = function (nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        newArr.push(nums[i]);
      }
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        newArr.push(nums[i]);
      }
    }
    nums = newArr;

  return nums;
}
  console.log(moveZeroes([0, 1, 0,0, 0, 3, 0,12]));


//second solution
var moveZeroes = function (nums) {
  let numsLength = nums.length;
  let newArr =[];
  for (let i = 0; i < numsLength; i++) {
    if (nums[0] === 0) {
      nums.push(0);
      nums.shift();
    }else if (nums[0] !== 0) {
      newArr.push(nums[0]);
      nums.shift();
    }
    
  }
  newArr.reverse();
  for (let i = 0; i < newArr.length; i++) {
    nums.unshift(newArr[i]);
  }

return nums;
}
console.log(moveZeroes([0, 1, 0,0, 0, 3, 0,12]));
