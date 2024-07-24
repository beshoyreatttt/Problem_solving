var moveZeroes = function (nums) {
    function foundZerosIndex(nums){
      let zeroIndexes = [];
      if(nums == [0])
        return nums;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
          zeroIndexes.push(i);
        }
      }
      return zeroIndexes;
    }
   // console.log(foundZerosIndex(nums));
    function removeZeros(nums) {
      let zeros = foundZerosIndex(nums);
      for (let i = 0; i < zeros.length; i++) {
        nums.splice(zeros[i] ,1);
      }
      return nums;
    }
    console.log(removeZeros(nums));


    
      
    return nums;
  };
  console.log(moveZeroes([0, 1, 0,0, 0, 3, 0,12]));
