let a = {
    foo: 'bar',
    run: function () {
        // var that = this;
        return setInterval( ()=> {
            console.log(this.foo);    
        },2000);
        
    }
}
a.run();