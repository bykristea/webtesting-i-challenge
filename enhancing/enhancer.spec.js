const enhancer = require('./enhancer.js');
// test away!
describe('the enhancer', () => {

    describe('the repair function', () => {
        it('should restore the durability to 100', () => {
            //arrange-> mock data
            const longsword = {};
            const bow = {};

            //act -> pass it into the function
            const result = enhancer.repair(longsword);

            //assert -> 
        });
    });

    describe('the enhancement success function', () => {
        it('increase items enhancement by one not to exceed 20', () => {

        })
    })

    describe('enhancement fail function', () => {
        it('will decrease durability by 5 when < 15, by 10 when >15, and will decrease enhancement level by 1 when > 16', () => {
            
        })
    })
});

// A.A.A Method
//Arrange
//Act
//Assert