/* eslint-disable func-names */
/* eslint-disable unicorn/import-style */
/* eslint-disable import/first */
/* eslint-disable unicorn/prefer-spread */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
eslint no-extend-native: ["error", { "exceptions": ["String","Array"] }]
*/

export {Utils} from './utils';

import * as path from 'path';

declare global {
  
  interface Set<T> {
    copyAsSet() : Set<T>;
    copyAsArray() : T[];
    addArray(arr : T[]) : void;
    delArray(arr : T[]) : void;
    isEmpty() : boolean;
  }
  interface Array<T> {
    copyAsSet() : Set<T>;
    copyAsArray() : T[];
    diffAndCopyResult(arr : T[]) : T[];
    addPrefixPathCopyResult(prefixPath : string) : Array<string>;
    addPostfixPathCopyResult(postfixPath : string) : Array<string>;
    isEmpty() : boolean;
  }
  interface Map<K,V> {
    getKeysAsArray() : K[];
    getValuesAsArray() : V[];
    mergeWithMap2NewMap(map2 : Map<K,V>) : Map<K,V>;
    isEmpty() : boolean;
  }
}
if (!Set.prototype.isEmpty) {
  Set.prototype.isEmpty = function<T>(this : Set<T>) : boolean {
    return (this.size === 0);
  }
}
if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function<T>(this : Array<T>) : boolean {
    return (this.length === 0);
  }
}
if (!Map.prototype.isEmpty) {
  Map.prototype.isEmpty = function<K,V>(this : Map<K,V>) : boolean {
    let elements = 0;
    for(const element of this)
      elements++;
    return (elements === 0);
  }
}
if (!Array.prototype.addPrefixPathCopyResult) {
  Array.prototype.addPrefixPathCopyResult = function<T>(this : T[], prefixPath : string) : string[]  {
    const result = new Array<string>();
    for(let idx = 0; idx < this.length;idx++) {
      result.push(prefixPath + path.sep + this[idx]);
    }
    return result;
  }
}
if (!Array.prototype.addPostfixPathCopyResult) {
  Array.prototype.addPostfixPathCopyResult = function<T>(this : T[], postfixPath : string) : string[]  {
    const result = new Array<string>();
    for(let idx = 0; idx < this.length;idx++) {
      result.push(this[idx] + path.sep + postfixPath);
    }
    return result;
  }
}
if (!Array.prototype.diffAndCopyResult) {
  Array.prototype.diffAndCopyResult = function<T>(this : T[], arr : T[]) : T[]  {
    const set1 = this.copyAsSet();
    for(const element of arr) {
        if (set1.has(element)) {
            set1.delete(element);
        }
    }
    return set1.copyAsArray();
  }
}
if (!Set.prototype.addArray) {
  Set.prototype.addArray = function<T>(this : Set<T>, arr : T[]) : void {
    for(const element of arr) 
      this.add(element);
  }
}
if (!Set.prototype.delArray) {
  Set.prototype.delArray = function<T>(this : Set<T>, arr : T[]) : void {
    for(const element of arr) 
      if (this.has(element))
        this.delete(element);
  }
}
if (!Map.prototype.mergeWithMap2NewMap) {
  Map.prototype.mergeWithMap2NewMap = function<K,V>(this : Map<K,V>,map2 : Map<K,V>) : Map<K,V>{
    return new Map([...Array.from(this.entries()), ...Array.from(map2.entries())]);
  }
}
if (!Map.prototype.getKeysAsArray) {
  Map.prototype.getKeysAsArray = function<K,V>(this : Map<K,V>) : K[] {
    const keys : K[] = [];
    for(const element of this)
      keys.push(element[0]);
    return keys;
  }
}
if (!Map.prototype.getValuesAsArray) {
  Map.prototype.getValuesAsArray = function<K,V>(this : Map<K,V>) : V[] {
    const values : V[] = [];
    for(const element of this)
      values.push(element[1]);
    return values;
  }
}
if (!Array.prototype.copyAsSet) {
  Array.prototype.copyAsSet = function<T>(this: T[]) : Set<T> {
    const result = new Set<T>();
    for(let idx = 0; idx < this.length;idx++) {
      result.add(this[idx]);
    }
    return result;
  }
}
if (!Array.prototype.copyAsArray) {
  Array.prototype.copyAsArray = function<T>(this: T[]) : T[] {
    const result = new Array<T>();
    for(let idx = 0; idx < this.length;idx++) {
      result.push(this[idx]);
    }
    return result;
  }
}
if (!Set.prototype.copyAsArray) {
  Set.prototype.copyAsArray = function<T>(this: Set<T>) : T[] {
    const result = new Array<T>();
    for(const element of this) {
      result.push(element);
    }
    return result;
  }
}
if (!Set.prototype.copyAsSet) {
  Set.prototype.copyAsSet = function<T>(this: Set<T>) : Set<T> {
    const result = new Set<T>();
    for(const element of this) {
      result.add(element);
    }
    return result;
  }
}
