import Player from './Player';

const player1 = new Player('Player 1');

describe('Player', () => {
  it('has name', () => {
    expect(player1.getName()).toBe('Player 1');
  });
});
