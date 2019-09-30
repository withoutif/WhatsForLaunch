//this would be way cleaner with lodash chains

/*Merges data into existing property based on key match.
sourceObject is a single object.
compareArray is an array of objects.
searchKey is the key that would contain the source object match.
propertyKey is the property a match will replace - the key name doesn't matter here, 
but the value has to be the ID to match on*/
export function mergeObjectByKey(sourceObject, compareArray, propertyKey, searchKey) {
    const idx = compareArray.findIndex(o => 
            o[searchKey] === sourceObject[propertyKey]);
    sourceObject[propertyKey] = compareArray[idx];
    return sourceObject;
}
