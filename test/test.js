const elect = require ("../elections/Electoral");
const assert = require("assert")
describe("Проверка функции подсчета голосов", function(){

    it("Победитель с максимальным колличеством голосов", function(){
    const rezultat = {
        Kostya: 44,
        Sergey: 28,
        Tolya:28,
    };
     const electedCondidat = elect(rezultat);
assert.deepStrictEqual(electedCondidat,"Kostya");
});

it("Победитель с > 100  голосов", function(){
    const rezultat = {
        Kostya: 57,
        Sergey: 122,
        Tolya: 17,
    };
     const electedCondidat = elect(rezultat);
assert.deepStrictEqual(electedCondidat,"wrong data");

    });

    it("Победитель с < 30  голосов", function(){
        const rezultat = {
            Kostya: 7,
            Sergey: 6,
            Tolya: 5,
        };
         const electedCondidat = elect(rezultat);
    assert.deepStrictEqual(electedCondidat,"not conclusive");
    
        });

        it("Победитель с если есть - голосов", function(){
            const rezultat = {
                Kostya: 72,
                Sergey: 28,
                Tolya:-28,
            };
             const electedCondidat = elect(rezultat);
        assert.deepStrictEqual(electedCondidat,"wrong data");
        });
});