let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,11,19,20,1,2,3]
let duplicate=[];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j] && !duplicate.includes(array[i])){
            duplicate.push(array[i]);
        }
    }
}
console.log("Duplicate number in array are "+duplicate);


// Remove duplicate from array using Set
let duplicatenumber=[1,2,3,4,5,6,7,8,9,10,1,2,3]
function removeDuplicate(arr){
    return [...new Set(arr)]
}
console.log("Array after removing duplicate is "+ removeDuplicate(duplicatenumber));



