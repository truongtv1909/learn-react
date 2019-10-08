function renderList(arr,render){
    for(let ar of arr){
        render(ar);
    }
}

let data = ['A','B','C'];

function test(x){
    console.log(x);
}

renderList(data,test);