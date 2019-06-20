const enhancer = require('./enhancer.js');
// test away!
describe('the enhancer', () => {

    describe('the repair function', () => {
        it('should restore the durability to 100', () => {
            //arrange-> mock data
            const item = {
                name:'longbow',
                enhancement: 2,
                durability: 42
            };

            

            //act -> pass it into the function
            expect(enhancer.repair(item).durability).toEqual(100);

            //assert -> 
        });
    });

    describe('the enhancement success function', () => {
        it('increase items enhancement by one', () => {

        })

        it('should not exceed 20', () => {

        })
    })

    describe('enhancement fail function', () => {
        it('will decrease durability by 5 when less than 15', () => {

        })

        it('will decrease durability by 10 when greater than 15', () => {

        })

        it('will decrease enhancement level by 1 when greater than 16', () => {

        })

    })
});

// A.A.A Method
//Arrange
//Act
//Assert