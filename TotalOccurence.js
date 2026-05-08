let array = [1,2,3,4,5,6,1,2,2,2,10,1,2,3];

for(let i = 0; i < array.length; i++) {

    let count = 0;
    let alreadyChecked = false;

    // check if number already counted before
    for(let k = 0; k < i; k++) {
        if(array[i] === array[k]) {
            alreadyChecked = true;
            break;
        }
    }

    // count occurrences
    if(!alreadyChecked) {

        for(let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                count++;
            }
        }

        // print only duplicate numbers
        if(count > 1) {
            console.log(array[i] + " occurs " + count + " times");
        }
    }
}


let arr=[1,2,3,4,5,6,1,2,2,2,10,1,2,3];
let count={};
for(let i=0;i<arr.length;i++){
    if(count[arr[i]]){
       count[arr[i]]++;
    }
    else{
        count[arr[i]]=1;

    }
}
for (let key in arr){
    if(count[key]>1){
        console.log(key+" occurs "+count[key]+" times");
    }
}