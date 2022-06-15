const add = function(a, b) {
  return a + b;
}

it('should add to numbers from an es module', () => {
  assert.equal(add(3, 5), 8);
});
