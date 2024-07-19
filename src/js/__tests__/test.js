import GameSavingLoader from '../app';

test('saving the game', async () => {
    const expected = {
        'id': 9,
        'created': 1546300800,
        'userInfo': {
            'id': 1,
            'name': 'Hitman',
            'level': 10,
            'points': 2000
        }
    };
    const result = await GameSavingLoader.load();
    expect(result).toEqual(expected);
});

test('error handling', async () => {
    await expect(GameSavingLoader.load()).rejects.toThrow('oops');
});