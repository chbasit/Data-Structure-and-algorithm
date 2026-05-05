let array=[1,2,4,5,6];
let totalsum=0;
let expectedsum=(array.length+1)*(array.length+2)/2;
for(let i=0;i<array.length;i++){
    totalsum+=array[i];
}
let missingnumber=expectedsum-totalsum;
console.log("Missing number is "+missingnumber);
