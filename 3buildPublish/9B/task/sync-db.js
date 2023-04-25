
let times=0;

const syncDB=  ()=>{
    times++;
    console.log(`Múltiplo de 5`, times);
    return times;
}




module.exports= {
    syncDB
}