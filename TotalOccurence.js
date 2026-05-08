let array = [1,2,3,4,5,6,1,2,2,2,10,1,2,3];

for(let i = 0; i < array.length; i++) {

    let count = 0;
    let alreadyChecked = false;

    for(let k = 0; k < i; k++) {
        if(array[i] === array[k]) {
            alreadyChecked = true;
            break;
        }
    }

    if(!alreadyChecked) {

        for(let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                count++;
            }
        }

        if(count > 1) {
            console.log(array[i] + " occurs " + count + " times");
        }
    }
}