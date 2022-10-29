import './index';

describe('index', () => {
    describe('test', () => {
        it('should return set', () => {
            const array  = ["1","2","3"];
            const set = array.copyAsSet();
            expect(set.has("1")).toBeTruthy();
            expect(set.has("2")).toBeTruthy();
            expect(set.has("3")).toBeTruthy();
        });
    });
});
