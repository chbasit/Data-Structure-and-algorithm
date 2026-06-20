let array=[1,2,4,5,6];
let n=array.length+1;
let totalsum=0;
let expectedsum=(n)*(n+1)/2;
for(let i=0;i<array.length;i++){
    totalsum+=array[i];
}
let missingnumber=expectedsum-totalsum;
console.log("Missing number "+missingnumber);

