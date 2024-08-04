import GameSavingLoader from '../app';

jest.mock('../reader');
afterEach(() => {
    jest.resetModules();
});

test('error handling', () => {
    return expect(GameSavingLoader.load()).rejects.toThrow(Error);
});