/* eslint-disable unicorn/prefer-spread */
/* eslint-disable no-restricted-syntax */

import * as glob from 'glob';

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

    public static searchPathRecursive(pattern : string[], cwd : string) : string[] {
        let results : string[] = [];
        for(const patternIdx of pattern) {
            const srcSearch = new glob.GlobSync(patternIdx,{
                "cwd" : cwd
            });
            const buffer : string[] = [];
            for(const res of srcSearch.found)
                buffer.push(res);
            results = results.concat(buffer);
        } 
        return results;
    }
}