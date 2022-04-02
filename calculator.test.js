/**
 * ::::::AAA Patern:::::
 * Arrange -> prepara 
 * Act -> ejecuta 
 * Assert -> valida
 */

const cal = require('./calculator');

describe('add operator', ()=> {
  test('adds 1 + 2 to equal 3', () => {
    const expected = cal.add(1,2); // Act
    expect(expected).toBe(3); // Assert
  });
  
  test('adds 1 + 2 to equal 3', () => {
    const expected = cal.add(4,5);
    expect(expected).toBe(9);
  });
})

describe('Sub operator', ()=> {
  test('adds 5 - 4 to equal 1', () => {
    const expected = cal.sub(5,4);
    expect(expected).toBe(1);
  });
  
  test('adds 10 - 0 to equal 1', () => {
    const expected = cal.sub(10,0);
    expect(expected).toBe(10);
  });
})


