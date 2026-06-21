
//  Two-Pointer Approach ($O(n^2)$ Time, $O(1)$ Space)let array = [2, 3, 5, 6, 1, 53, 21];
let target = 10;
const threeSum=(arr,target)=>{
    arr.sort((a,b)=>a-b)
for (let i=0; i<arr.length-2;i++)
{
    let left=i+1;
    let right=arr.length-1;

    while(left<right)
    {
        let currentSum=arr[i]+arr[left]+arr[right];
        if(currentSum==target)
        {
            console.log(`Three sum is ${arr[i]}, ${arr[left]}, ${arr[right]}`);
            return true;
        }
        else if(currentSum < target){
            left++;
        }
        else{
            right--;
        }
    }
}
return false;
}
threeSum(array,target)