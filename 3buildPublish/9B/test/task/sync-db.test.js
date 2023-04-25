const { syncDB } = require('../../task/sync-db');


describe('Prueba de la funciOn', ()=>{

    test("Ejecuta correctamente el proceso al invocarse", ()=>{
        syncDB();
        const times = syncDB();
        expect(times).toBe(2);
    })

})