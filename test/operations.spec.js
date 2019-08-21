//describe A quien voy a testear
describe('operations', () => {
  // it Que voy a testear
  it('Debería se un objeto', () => {
    //assert Mi comparación
    assert.equal(typeof operations, 'object');
  });

  describe('operations.add', () => {
    it('Debería ser una función', () => {
      assert.equal(typeof window.operations.add, 'function');
    });
    it('Debería retornar la suma de dos números', () => {
      assert.equal(window.operations.add(2, 2), 4);
    });
    it('Debería retornar Error si falta un parametro', () => {
      assert.equal(window.operations.add(2), "Error");
    });

  })

})
