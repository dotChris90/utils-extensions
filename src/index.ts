/* eslint-disable no-restricted-syntax */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
eslint no-extend-native: ["error", { "exceptions": ["String","Array"] }]
*/

export {};

declare global {
  
  interface Set<T> {
    copyAsSet() : Set<T>;
    copyAsArray() : T[];
  }
  interface Array<T> {
    copyAsSet() : Set<T>;
    copyAsArray() : T[];
  }
  interface Map<K,V> {
    getKeysAsArray() : K[];
    getValuesAsArray() : V[];
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
