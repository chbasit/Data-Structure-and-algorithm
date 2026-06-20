// by using two loops O(n^2) TIME COMPLEXITY
// let array=[2,3,5,6];
// let number=8;
// let sum=0;
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]+array[j]===number){
//             console.log("Two sum is "+array[i]+" and "+array[j]);
//             return
//         }

//     }
// }

// using while loop time complexity is $O(N \log N)$
let array = [2, 3, 5, 6, 1, 53, 21];
let target = 11;
const twosum=(array,target)=>{


array.sort((a, b) => a - b);
let left = 0;
let right = array.length - 1;
while (left < right) {
  let sum = array[left] + array[right];
  if (sum === target) {
    console.log("Two sum is " + array[left] + " and " + array[right]);
    return true;
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
  }
}
twosum(array,target)
