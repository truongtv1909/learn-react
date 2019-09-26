function list(arr,render){
    for(item of arr){
        render(item);
    }
}

// function as(i){
//     console.log('+',i)
// }

let isArray = ["A","B","C"];

list(isArray,(a)=>console.log(`~${a}~`));