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
            //toEqual will compare objects or arrays
            expect(enhancer.repair(item).durability).toEqual(100);

            //assert -> 
        });
    });

    describe('the enhancement success function', () => {
        it('increase items enhancement by one', () => {
            const item ={
                enhancement: 15
            };
            expect(enhancer.succeed(item).enhancement).toBe(16)
        })

        it('should not exceed 20', () => {
            const item = {
                enhancement: 20
            };
            expect(enhancer.succeed(item).enhancement).toBe(20)
        })
    })

    describe('enhancement fail function', () => {
        it('will decrease durability by 5 when less than 15', () => {
            const item = {
                enhancement: 13,
                durability: 40
            };
            expect(enhancer.fail(item).durability).toBe(35)
        })

        it('will decrease durability by 10 when greater than 15', () => {
            const item = {
                enhancement: 15,
                durability: 70
            };
            expect(enhancer.fail(item).durability).toBe(60)
        })

        it('will decrease enhancement level by 1 when greater than 16', () => {
            const item = {
                enhancement: 25,
                
            };
            expect(enhancer.fail(item).enhancement).toBe(24)
        })

    })
});

// A.A.A Method
//Arrange
//Act
//Assert

// matchers in Jest
/* 
-toBe
-toEqual
- toBeLessThan/GreaterThan/OrEqual
- 

*/