//https://www.chaijs.com/api/bdd/
describe('#createBoard()', function () {
  it('should create the board', function () {
    expect(createBoard()).to.not.be.null;
  });
  it('should have an id of board', function () {
    expect(createBoard().getAttribute("id")).to.equal('Board');
  });
});
  