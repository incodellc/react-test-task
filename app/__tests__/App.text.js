const sum = (a, b) => {
    return a + b;
};

describe('tests', () => {
    it('test First', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});
