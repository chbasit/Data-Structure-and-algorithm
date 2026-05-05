// by using while loop
let number=[10,20,30,40,50];
let start=0;
let end=number.length-1;
while(start<end){
    let temp=number[start];
    number[start]=number[end];
    number[end]=temp;
    start++;
    end--;
}
console.log("Reverse of array is "+number);

// by using reverse() function

let array=[1,2,3,4,5];
array.reverse();
console.log("Reverse of array by using reverse function "+array);
