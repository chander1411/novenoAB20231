let times =0;



const syncFunction = ()=>{
    times++;
    console.log(`Mostrar número cada  5 segundos: ${times}`);
    return times;
}


module.exports={
    syncFunction
}