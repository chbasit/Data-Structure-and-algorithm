// let text = "This is a **bold** word in a **string**.";
// let cleanedText = text.replaceAll("**", "");

// console.log(cleanedText);


// let str="1234**82834*"
// let result=str.split("*").join("");
// console.log(result);


let str="*abdul**basit*software**engineer**";
let array=str.split("");
let stack=[];
const removeAllStars=(()=>{

for(let i=0;i<array.length;i++)
{
    let currentcharacter=array[i];
    if(currentcharacter=="*"){
        continue;
    }
    stack.push(currentcharacter);
}
return stack.join("");
})
let cleanString = removeAllStars(array);
console.log("clean string",cleanString);
