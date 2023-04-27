const { syncFunction } =  require('../../tasks/syncFunction')


describe('Prueba de la funciOn sincrOnica', ()=>{
    test('debe ser ejecutada 1 o 2 veces la funciOn', ()=>{
        syncFunction()
        const result =syncFunction();
        expect(result).toBe(2);
    })
})