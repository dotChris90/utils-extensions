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
        it('should be empty', () => {
            const arr = new Array<string>();
            expect(arr.isEmpty()).toBeTruthy();
            arr.push("1");
            expect(arr.isEmpty()).toBeFalsy();
            const set = new Set<string>();
            expect(set.isEmpty()).toBeTruthy();
            set.add("1");
            expect(set.isEmpty()).toBeFalsy();
            const map1 = new Map<string,string>();
            expect(map1.isEmpty()).toBeTruthy();
            map1.set("key","value");
            expect(map1.isEmpty()).toBeFalsy();
        });
    });
});
