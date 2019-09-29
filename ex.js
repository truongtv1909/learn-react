var obj = {name:"Truong", gfs:['Huyen','Trong','Luan']}
var c = {...obj}
c.name = "Tran van truong"
console.log('gfs: ',c.gfs)
var cc = c.gfs.push('hai ha');
// var a = {...obj}
console.log({obj,c});
console.log(cc);