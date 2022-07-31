const {
  allSongsRuntimeSum,
  getMaxRuntime,
  countVotes,
} = require('../src/01-reduce-no-tests');

describe('allSongsRuntimeSum()', () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require('../data/songs');
  });

  test('should use the `.reduce()` method', () => {
    const hasReduce = !!allSongsRuntimeSum.toString().match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test('should return an array of all song titles', () => {
    const actual = allSongsRuntimeSum(songs);
    const expected = 1680;
    expect(actual).toEqual(expected);
  });
});


describe('getMaxRuntime()', () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require('../data/songs');
  });

  test('should use the `.reduce()` method', () => {
    const hasReduce = !!getMaxRuntime
      .toString()
      .match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test('should the Object with the maximum runtimeInSeconds.', () => {
    const actual = getMaxRuntime(songs);
    const expected = {
      title: 'Regular Guy',
      album: 'Regular Guy',
      artist: 'Peanut',
      runtimeInSeconds: 215
    };
    expect(actual).toEqual(expected);
  });
});


describe('countVotes()', () => {
  let votes;
  beforeEach(() => {
    jest.resetModules();
    votes = require('../data/votes');
  });

  test('should use the `.reduce()` method', () => {
    const hasReduce = !!countVotes.toString().match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test('should an object with the vote value as key and the number of votes for that vote value as the value', () => {
    const actual = countVotes(votes);
    const expected = {
      'Pink Elephants': 3,
      'Kyona': 1,
      'In the Middle of Nowhere': 1,
      undecided: 2,
      'Samui Sunrise': 2
    };
    expect(actual).toEqual(expected);
  });
});
