function run(){
    console.log('running..');
}

withRun =(func)=>{
    let n = 0;
    return function () {
        console.log(`${++n}`);
        return func();
    }
}


let count = withRun(run);
count();
count();
count();
count();