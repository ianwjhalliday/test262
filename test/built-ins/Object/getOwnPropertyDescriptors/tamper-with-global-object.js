// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Object.getOwnPropertyDescriptors should not have its behavior impacted by modifications to the global property Object
esid: pending
author: Jordan Harband
includes: [fnGlobalObject.js]
---*/

function fakeObject() {
    $ERROR('The overriden version of Object was called!');
}
fakeObject.getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
fakeObject.keys = Object.keys;

var global = fnGlobalObject();
global.Object = fakeObject;

assert.sameValue(Object, fakeObject, 'Sanity check failed: could not modify the global Object');
assert.sameValue(Object.keys(Object.getOwnPropertyDescriptors('a')).length, 2, 'Expected string primitive to have 2 descriptors');
