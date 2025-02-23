# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The problem arises when attempting to increment a field that does not exist within a document, leading to unexpected outcomes.

## Bug Description
The `$inc` operator is used to increment a numerical field by a specified value.  However, if the field is absent, the `$inc` operator's behaviour is different than many would expect.  This can lead to bugs if not handled properly.

## Solution
The solution involves checking if the field exists before using `$inc`. If it doesn't, either create the field with the initial value or provide an alternative mechanism to handle missing fields.

## How to reproduce the bug
1. Clone this repository.
2. Make sure you have MongoDB and a MongoDB driver (e.g. Node.js driver) installed.
3. Run `bug.js`.  Observe the output of the MongoDB operation.
4. Run `bugSolution.js` to see the corrected approach.
