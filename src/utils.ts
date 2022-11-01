/* eslint-disable unicorn/prefer-spread */
/* eslint-disable no-restricted-syntax */

export class Utils {
    public static GetMapValuesFlat<Key,Value>(map : Map<Key,Value[]>) : Value[] {
        const keys : Value[] = [];
        const keysSet : Set<Value> = new Set<Value>();
        for(const element of map) {
            const element1 = element[1];
            for(const elementInside of element1) {
                keysSet.add(elementInside);
            }
        }
        for(const element of keysSet) {
            keys.push(element);
        }
        return keys;
    }
}