//console.log('two sum solutions !!');

// function twosum(arr , target){
//   for(let i =0 ; i < arr.length;i++){
//     for(let j =0 ; j < arr.length;j++){
//       if(i == j)
//         continue;
//       if(arr[i] + arr[j] == target)
//         return `[${i} , ${j}] `
//     }
//   }
// }

// function twosum2(nums , target){
//   const numObj = {};
//   // make object and put numbers of array as key and index is value
//   for(let i =0 ; i < nums.length;i++){
//     numObj[nums[i]] = i;
//   }
//   if(nums.length == 2 && nums[0] + nums[1] == target){
//     return [0,1];
//   }
//   // looping to find complement number
//   for(let i =0 ;i<nums.length;i++){
//     let complementNum = target- nums[i];

//     if(numObj[complementNum] !== undefined && numObj[complementNum] !== i){

//       return [i ,numObj[complementNum]]
//     }
//   }
//   return [];
// }

// console.log(twosum2([3,2,3] ,6)) ;

//
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


  